
function clearFormDismissalStates() {
  const keysToRemove = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key) { // key can be null if an item was removed during iteration
      if (key.endsWith('-dismissed-in-session') || key.endsWith('-dismissed-after-submit')) {
        keysToRemove.push(key);
      }
    }
  }

  for (const key of keysToRemove) {
    // console.log('Clearing localStorage key:', key); // For debugging
    localStorage.removeItem(key);
  }
}

clearFormDismissalStates();

function checkFormSubmitSuccess(formEmbedElement) {
  if (!formEmbedElement || !formEmbedElement.shadowRoot) {
    return;
  }
  // console.log("Checking form submit success");
  if (formEmbedElement.shadowRoot.querySelector('[data-testid="banner-success"]')) {
    // console.log("Success banner detected inside shopify-forms-embed. Reloading page.");
    formEmbedElement.shadowRoot.querySelector("#app-embed").addEventListener("click", function() {
      clearFormDismissalStates();
      window.location.reload();
    });
    formEmbedElement.shadowRoot.querySelector("[data-testid=btn-close]").addEventListener("click", function() {
      clearFormDismissalStates();
      window.location.reload();
    });
  }
}

function hideTeaserButton(formEmbedElement) {
  if (!formEmbedElement || !formEmbedElement.shadowRoot) {
    return;
  }

  const teaserElement = formEmbedElement.shadowRoot.querySelector("[class*=_teaserContainer_]");
  if (teaserElement) {
    console.log('set none tearser');
    // teaserElement.style.display = "none";
    teaserElement.style.cssText = `
      display: none;
      --container-border-radius: 0;
    `;
  }
}

function handleFormEmbed(formEmbedElement) {
  if (formEmbedElement) {
    checkFormSubmitSuccess(formEmbedElement);

    const shadowRoot = formEmbedElement.shadowRoot;
    if (shadowRoot) {
      const formElement = shadowRoot.querySelector('[class*=_formFieldset_]');

      if (formElement) {


        const formFileInputFields = formElement.querySelectorAll('input');
        const formFieldButtons = formElement.querySelectorAll('button');
        const formDivs = shadowRoot.querySelectorAll('[class*=_gridItem_][class*=_imageLoaded_]');
        const formGeneral = shadowRoot.querySelector('[class*=_formContainer_]');
        //const formButtonFields = formElement.querySelectorAll('button._formSubmitButton_1ll8d_81');
        //const formpFields = formElement.querySelectorAll('._formFileInputField_ehvsf_5 p');


        formFileInputFields.forEach(inputField => {
          inputField.style.cssText = `
              border-radius:0px !important;
            `;
        });

        formFieldButtons.forEach(button => {
          button.style.cssText = `
              border-radius:0px !important;
            `;
        });

        formGeneral.style.cssText = `
              border-radius:0px !important;
            `;


        formDivs.forEach(container => {
          container.style.cssText = `${container.style.cssText}; border-radius: 0px !important;`;
        });

        // const emailLabel = shadowRoot.getElementById("label-email")
        // emailLabel.innerHTML = "Enter your Email"
        //
        // const phoneLabel = shadowRoot.getElementById("label-phone_number")
        // phoneLabel.innerHTML = "Enter your Phone Number"

        // const termElement = shadowRoot.querySelector("[class*=_formFieldset_] [class*=_radioField_] [class*=_textBody_]")
        // termElement.innerHTML = termElement.innerHTML.replace("terms and conditions", '<a href="/pages/terms-and-conditions">terms and conditions</a>')


        const disclaimerElement = shadowRoot.querySelector("[class*=_formDisclaimer_]");
        const confirmAgreementElement = shadowRoot.querySelector('form fieldset[name="custom#confirm_your_agreement"]');
        confirmAgreementElement.before(disclaimerElement);


        // Style
        var style = document.createElement('style');

        style.innerHTML = `
          * {
            box-sizing: border-box !important;
            font-family: var(--font-body-family) !important;
            --container-border-radius: 0;
            --container-max-w: 480px;
            --forms-padding-top: 40px;
            --forms-padding-bottom: 40px;
            --forms-padding-left: 50px;
            --forms-padding-right: 50px;
            --form-field-border-focused: 0 0 0 2px #c9a564;
          }
          h2 {
              font-size: 20px !important;
              font-weight: 700 !important;
              letter-spacing: 2px !important;
              line-height: 1 !important;
              text-transform: uppercase;
              margin-bottom: 10px !important;
          }

          section[class*=_formHeader_] {
            margin-bottom: 20px !important;
          }

          section[class*=_formHeader_] > [class*=_textBody_] {
            p:first-child {
              font-size: 14px;
              font-weight: 500;
              letter-spacing: 1.1px;
              line-height: 1;
              margin-bottom: 10px;
            }
            @media(min-width: 1150px) {
              p:first-child {
                font-size: 16px;
              }
            }
            p:nth-child(2) {
              font-size: 13px !important;
              line-height: 1.4;
              letter-spacing: normal;
            
            margin-bottom: 20px !important;}
          }

          form fieldset[name="custom#confirm_your_agreement"] {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            cursor: pointer;

            legend {
              display: none;
            }
            label {
              cursor: pointer;
            }
            label span {
              font-size: 12px;
              font-style: italic;
              line-height: 1.2;
              letter-spacing: .5px;
              color: #707070;
            }
            input {
              cursor: pointer;
            }
          }

        [class*=_formDisclaimer_] p {
          font-size: 11px !important;
          color: #9a9a9a;
          text-align: center;
          line-height: 1.2;
          letter-spacing: .5px;
          a {
            color: #000;
          }
        }

        button[class*=_formSubmitButton_] {
          text-transform: uppercase !important;
          height: 40px !important;
          width: 150px !important;
          padding: 10px 24px !important;
          font-weight: 700;
          font-size: 16px;
          line-height: 1.5 !important;
          letter-spacing: normal !important;
          margin: 0 auto !important;
        }
        @media(max-width: 1149px) {
          button[class*=_formSubmitButton_] {
            font-size: 14px !important;
          }

        }
        `
        formEmbedElement.shadowRoot.appendChild(style)

      }

    }
  }
}

let doesHideFormEmbedModalFooter = false;
const FORM_EMBED_SELECTOR = "#app-embed-container-732739";
const FORM_EMBED_SELECTOR_FOOTER = "#app-embed-container-732834";

const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.type === 'childList') {
      const formEmbedElement = document.querySelector(FORM_EMBED_SELECTOR);
      const formEmbedElementFooter = document.querySelector(FORM_EMBED_SELECTOR_FOOTER);

      // Hide form embed modal for footer when first access to store
      if (!doesHideFormEmbedModalFooter) {
        if (formEmbedElementFooter && formEmbedElementFooter.shadowRoot) {
          const closeButton = formEmbedElementFooter.shadowRoot.querySelector('[class*="formCloseButton"]');
          const formContainer = formEmbedElementFooter.shadowRoot.querySelector('#form-container-ref');
          if (closeButton && formContainer) {
            closeButton.click();

            const appEmbedElement = formEmbedElementFooter.shadowRoot.querySelector(".appEmbed");
            appEmbedElement.style.setProperty('display', 'none', 'important');
            
            doesHideFormEmbedModalFooter = true;
          }
        }
      }

      handleFormEmbed(formEmbedElement);

      handleFormEmbed(formEmbedElementFooter);
      hideTeaserButton(formEmbedElementFooter);

      // Support show poup subscription for signup button in footer
      if (!formEmbedElementFooter) {
        return;
      }
      const shadowRoot = formEmbedElementFooter.shadowRoot;
      if (!shadowRoot) {
        return;
      }
      const triggerButton = document.querySelector('.mox-custom-trigger');
      if (triggerButton) {
        triggerButton.addEventListener('click', function(event) {
          event.preventDefault(); // Prevenir comportamiento por defecto (por ejemplo, abrir un modal)


          // Buscar dentro de #app-embed un botón con clase que contenga "teaserContainer"
          const teaserButton = shadowRoot.querySelector('[class*="teaserContainer"]');
          if (teaserButton) {
            // Prevent hide form embed modal 
            doesHideFormEmbedModalFooter = true;
            const appEmbedElement = shadowRoot.querySelector(".appEmbed");
            appEmbedElement.style.setProperty('display', 'flex', 'important');
            teaserButton.click(); // Simular el click
          } else {
          }

        });
      }

    }
  });
});


observer.observe(document.body, { childList: true, subtree: true });



