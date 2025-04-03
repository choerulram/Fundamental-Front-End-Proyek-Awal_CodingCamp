// custom element Footer
class AppFooter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                footer {
                    text-align: center;
                    padding: 1rem;
                    background-color: rgb(9, 202, 48);
                    color: white;
                }
                .coding-camp {
                    color: rgb(52, 51, 51);
                }
            </style>
            <footer>
                <p>Created by <span><b>Achmad Choerul Ramdhani</b></span> in Program <span class="coding-camp"><b>Coding Camp Powered by DSS Foundation</b></span></p>
            </footer>
        `;
    }
}

customElements.define('app-footer', AppFooter);