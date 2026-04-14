/**
 * Linked Products Navigation using Shopify's Section Rendering API
 * 
 * This script handles navigation between linked products without full page reload,
 * using Shopify's Section Rendering API for better JavaScript compatibility.
 * 
 * Unlike HTMX's hx-boost which can break third-party scripts and custom elements,
 * this approach fetches only the main-product section and properly reinitializes
 * any JavaScript features after the content swap.
 */

(function() {
  'use strict';

  // Cache for fetched product pages to improve navigation speed
  const pageCache = new Map();

  /**
   * Initialize linked product click handlers
   */
  function initLinkedProducts() {
    // Use event delegation on the linked product container
    document.addEventListener('click', handleLinkedProductClick);
  }

  /**
   * Handle click events on linked product links
   * @param {Event} event - The click event
   */
  function handleLinkedProductClick(event) {
    // Find if the click was on a linked product link
    const link = event.target.closest('.hdt-linked-product-values a.hdt-product-form_value, .hdt-linked-product-values a.hdt-product-form_wrap-link');
    
    if (!link) return;
    
    // Don't intercept if already selected
    if (link.classList.contains('is-selected')) {
      event.preventDefault();
      return;
    }
    
    // Prevent default navigation
    event.preventDefault();
    
    const targetUrl = link.href;
    
    if (!targetUrl) return;
    
    // Show loading state
    showLoadingState(link);
    
    // Navigate to the linked product
    navigateToLinkedProduct(targetUrl, link);
  }

  /**
   * Show loading state on the clicked element
   * @param {HTMLElement} element - The clicked element
   */
  function showLoadingState(element) {
    // Add loading class to the parent container
    const container = element.closest('.hdt-linked-product');
    if (container) {
      container.classList.add('hdt-linked-product--loading');
    }
    
    // Add loading state to the main content area
    const mainContent = document.getElementById('MainContent');
    if (mainContent) {
      mainContent.classList.add('hdt-content-loading');
    }
    
    // Dispatch loading event for potential loader UI
    document.dispatchEvent(new CustomEvent('theme:loading:doing', { bubbles: true }));
  }

  /**
   * Hide loading state
   */
  function hideLoadingState() {
    // Remove loading class from all linked product containers
    document.querySelectorAll('.hdt-linked-product--loading').forEach(el => {
      el.classList.remove('hdt-linked-product--loading');
    });
    
    // Remove loading state from main content
    const mainContent = document.getElementById('MainContent');
    if (mainContent) {
      mainContent.classList.remove('hdt-content-loading');
    }
    
    // Dispatch loading done event
    document.dispatchEvent(new CustomEvent('theme:loading:done', { bubbles: true }));
  }

  /**
   * Navigate to a linked product using Section Rendering API
   * @param {string} url - The target product URL
   * @param {HTMLElement} clickedLink - The clicked link element
   */
  async function navigateToLinkedProduct(url, clickedLink) {
    try {
      // Parse the URL to get the pathname
      const targetUrl = new URL(url, window.location.origin);
      const productPath = targetUrl.pathname;
      
      // Check cache first
      let htmlContent = pageCache.get(productPath);
      
      if (!htmlContent) {
        // Fetch the full product page (not just a section)
        // This ensures all sections and their JavaScript are properly loaded
        const response = await fetch(productPath);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch product page: ${response.status}`);
        }
        
        htmlContent = await response.text();
        
        // Cache the response
        pageCache.set(productPath, htmlContent);
      }
      
      // Parse the fetched HTML
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlContent, 'text/html');
      
      // Get the new MainContent
      const newMainContent = doc.getElementById('MainContent');
      const currentMainContent = document.getElementById('MainContent');
      
      if (!newMainContent || !currentMainContent) {
        throw new Error('Could not find MainContent element');
      }
      
      // Update the page title
      const newTitle = doc.querySelector('title');
      if (newTitle) {
        document.title = newTitle.textContent;
      }
      
      // Update meta description if present
      const newMetaDesc = doc.querySelector('meta[name="description"]');
      const currentMetaDesc = document.querySelector('meta[name="description"]');
      if (newMetaDesc && currentMetaDesc) {
        currentMetaDesc.setAttribute('content', newMetaDesc.getAttribute('content') || '');
      }
      
      // Replace the main content
      // Using innerHTML to ensure proper element initialization
      currentMainContent.innerHTML = newMainContent.innerHTML;
      
      // Update the URL without page reload
      history.pushState({ linkedProduct: true, url: productPath }, '', productPath);
      
      // Scroll to top of the page smoothly
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      // Reinitialize any JavaScript features
      reinitializeFeatures(currentMainContent);
      
      // Hide loading state
      hideLoadingState();
      
    } catch (error) {
      console.error('Error navigating to linked product:', error);
      
      // Hide loading state
      hideLoadingState();
      
      // Fall back to regular navigation
      window.location.href = url;
    }
  }

  /**
   * Reinitialize JavaScript features after content swap
   * @param {HTMLElement} container - The container with new content
   */
  function reinitializeFeatures(container) {
    // Dispatch currency update event for multi-currency support
    document.dispatchEvent(new CustomEvent('currency:update'));
    
    // Dispatch products update event (used by the theme)
    container.dispatchEvent(new CustomEvent('products:update', { bubbles: true }));
    
    // Init size by app
    if (window.SizebayInit) {
      window.SizebayInit()
    }
    
    // Trigger Shopify's built-in page view event for analytics
    if (window.Shopify && window.Shopify.PaymentButton) {
      window.Shopify.PaymentButton.init();
    }
    
    // Reinitialize tooltips (remove stale ones)
    document.querySelectorAll('.hdt-tooltip').forEach(tooltip => tooltip.remove());
    
    // Fire theme-specific initialization event
    document.dispatchEvent(new CustomEvent('theme:linked-product:loaded', { 
      bubbles: true,
      detail: { container: container }
    }));
    
    // Re-run any inline scripts that may have been added
    executeInlineScripts(container);
  }

  /**
   * Execute inline scripts in the new content
   * Custom elements auto-initialize, but inline scripts need manual execution
   * @param {HTMLElement} container - The container with new content
   */
  function executeInlineScripts(container) {
    const scripts = container.querySelectorAll('script:not([src])');
    scripts.forEach(script => {
      // Skip if the script has already been executed
      if (script.dataset.executed === 'true') return;
      
      try {
        // Create a new script element and copy the content
        const newScript = document.createElement('script');
        newScript.textContent = script.textContent;
        
        // Copy attributes
        Array.from(script.attributes).forEach(attr => {
          newScript.setAttribute(attr.name, attr.value);
        });
        
        // Mark original as executed
        script.dataset.executed = 'true';
        
        // Append to document to execute
        document.body.appendChild(newScript);
        
        // Remove the appended script element (it's already executed)
        document.body.removeChild(newScript);
      } catch (e) {
        console.warn('Error executing inline script:', e);
      }
    });
  }

  /**
   * Handle browser back/forward navigation
   */
  function handlePopState(event) {
    if (event.state && event.state.linkedProduct) {
      // User navigated back/forward to a linked product
      const url = event.state.url || window.location.pathname;
      
      // Show loading and fetch the page
      document.dispatchEvent(new CustomEvent('theme:loading:doing', { bubbles: true }));
      
      navigateToLinkedProduct(window.location.href, null).catch(() => {
        // If navigation fails, force a page reload
        window.location.reload();
      });
    }
  }

  // Initialize when the DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLinkedProducts);
  } else {
    initLinkedProducts();
  }

  // Handle browser history navigation
  window.addEventListener('popstate', handlePopState);

})();
