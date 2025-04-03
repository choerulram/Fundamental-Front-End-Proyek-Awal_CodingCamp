// custom element Header
class AppHeader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .navbar {
                    background: rgb(9, 202, 48);
                    color: #fff;
                    padding: 1px 0;
                    text-align: center;
                    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.1);
                    transition: all 0.3s ease-in-out;
                }
                .navbar > h1 {
                    font-size: 30px;
                }
            </style>
            <nav class="navbar">
                <h1>Notes App</h1>
            </nav>
        `;
    }
}

customElements.define('app-header', AppHeader);