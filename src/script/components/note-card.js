// custom element NoteCard
class NoteCard extends HTMLElement {
    constructor() {
        super();
        const template = document.getElementById('note-template').content; // get content template from templates.hrml
        const shadowRoot = this.attachShadow({ mode: 'open' }).appendChild(template.cloneNode(true)); // shadow DOM (encapsulasi)
        
        // get elemetn from shadow DOM 
        this.titleElement = this.shadowRoot.querySelector('h2');
        this.bodyElement = this.shadowRoot.querySelector('p:nth-of-type(1)');
        this.createdAtElement = this.shadowRoot.querySelector('small');
        this.archivedElement = this.shadowRoot.querySelector('p:nth-of-type(2)');
        this.editButton = this.shadowRoot.querySelector('.edit-button');
        this.deleteButton = this.shadowRoot.querySelector('.delete-button');
    }

    // setter untk mengisi data note ke dalam elemetn
    set noteData(data) {
        // isi element data note
        this.titleElement.textContent = data.title;
        this.bodyElement.textContent = data.body;
        this.createdAtElement.textContent = `Created at: ${new Date(data.createdAt).toLocaleString()}`;
        this.archivedElement.textContent = `Archived: ${data.archived ? "Yes" : "No"}`;
        
        // add eventListener button edit & delete
        this.editButton.onclick = () => this.dispatchEvent(new CustomEvent('edit-note', { detail: data }));
        this.deleteButton.onclick = () => this.dispatchEvent(new CustomEvent('delete-note', { detail: data.id }));

        // Set custom attribute for note ID
        this.setAttribute('data-note-id', data.id);
    }
}

customElements.define('note-card', NoteCard);