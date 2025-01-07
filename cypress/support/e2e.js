// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

const app = window.top;
if (!app.document.head.querySelector("[data-hiden-command-log-request]")) {
    const style = app.document.createElement('style');
    style.innerHTML = `
    .command-name-report,
    .command-name-xhr,
    .command-name-page-load,
    .command-name-new-url,
    .command-name-page-load-start,
    .command-name-page-load-end {
        display:  none;
    }
    .command-method::before {
        content: none !important;
        background-color: red;
    }
    .command-method {
        background-color: #6262e49e;
        color: white;
        border-radius: 3px;
        padding: 3px 5px 
    }
    .command-method span {
        color: white;
    }
    `
    ;

    style.setAttribute("data-hide-command-log-request", "")
    app.document.head.appendChild(style)
}