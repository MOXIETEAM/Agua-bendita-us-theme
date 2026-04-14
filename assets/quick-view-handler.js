// Custom element for wrapp-hdt-open-modal-btn
// This handles opening the quick view modal when the button is clicked

class WrappHdtOpenModalBtn extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const button = this.querySelector('button[aria-controls="hdt-quick-view-modal"]');
        if (!button) return;

        button.addEventListener('click', this.handleClick.bind(this));
    }

    handleClick(event) {
        event.preventDefault();
        const button = event.currentTarget;
        const handle = button.getAttribute('handle');
        const modal = document.querySelector('#hdt-quick-view-modal');

        if (!modal || !handle) {
            console.error('Quick view modal or product handle not found');
            return;
        }

        // Set button as loading
        button.setAttribute('aria-busy', 'true');
        button.setAttribute('aria-expanded', 'true');

        // Get the section ID from the modal
        const sectionId = modal.getAttribute('section-id');

        // Fetch product quick view content using Shopify section rendering
        const url = `/products/${handle}?section_id=${sectionId}`;

        fetch(url)
            .then(response => response.text())
            .then(html => {
                // Parse the HTML response
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');

                // Find the section content
                const sectionElement = doc.querySelector(`#shopify-section-${sectionId}`);

                if (sectionElement) {
                    // Get the modal content
                    const newContent = sectionElement.querySelector('.hdt-main-product-quick-view');

                    if (newContent) {
                        // Find existing content in current modal
                        const existingContent = modal.querySelector('.hdt-main-product-quick-view');

                        if (existingContent) {
                            // Replace existing content
                            existingContent.replaceWith(newContent);
                        } else {
                            // Append if no existing content
                            modal.appendChild(newContent);
                        }

                        // Open the modal using setAttribute
                        modal.setAttribute('open', '');
                        modal.removeAttribute('hidden');

                        // Dispatch events for any initialized scripts
                        document.dispatchEvent(new CustomEvent('currency:update'));
                        document.dispatchEvent(new CustomEvent('products:update', { bubbles: true }));
                    } else {
                        console.error('Quick view content not found in response');
                    }
                } else {
                    console.error('Section element not found in response');
                }
            })
            .catch(error => {
                console.error('Error loading quick view:', error);
            })
            .finally(() => {
                button.setAttribute('aria-busy', 'false');
                button.setAttribute('aria-expanded', 'false');
            });
    }
}

// Register the custom element
customElements.define('wrapp-hdt-open-modal-btn', WrappHdtOpenModalBtn);
