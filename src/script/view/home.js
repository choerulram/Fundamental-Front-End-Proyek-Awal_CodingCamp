// import note data
import { notesData } from '../data/local/notes-data.js';

// get elements
const notesListElement = document.querySelector('#notesList');

// create note item
function createNoteItemElement({ id, title, body, createdAt, archived }) {
  // create container for note
  const container = document.createElement('div');
  container.setAttribute('data-noteid', id);
  container.classList.add('note-card');

  // create title
  const titleElement = document.createElement('h3');
  titleElement.textContent = title;

  // create body
  const bodyElement = document.createElement('p');
  bodyElement.innerText = body;

  // create datetime
  const createdAtElement = document.createElement('small');
  createdAtElement.textContent = `Created at: ${new Date(createdAt).toLocaleString()}`;

  // craete archived
  const archivedElement = document.createElement('p');
  archivedElement.textContent = `Archived: ${archived ? 'Yes' : 'No'}`;

  container.append(titleElement, bodyElement, createdAtElement, archivedElement);
  
  return container;
}

// render all sample notes
function renderNotes(notes) {
  notesListElement.innerHTML = '';
  notes.forEach((note) => {
    const element = createNoteItemElement(note);
    notesListElement.append(element);
  });
}

renderNotes(notesData); // initial render