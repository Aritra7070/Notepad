function addNote() {
    const noteText = document.getElementById('noteText').value.trim();

    if (noteText === '') {
        alert('Please write something before adding a note.');
        return;
    }

    const noteElement = document.createElement('div');
    noteElement.className = 'note';

    const noteContent = document.createElement('p');
    noteContent.textContent = noteText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = function () {
        noteElement.remove();
    };

    noteElement.appendChild(noteContent);
    noteElement.appendChild(deleteBtn);

    document.getElementById('notes').appendChild(noteElement);

    document.getElementById('noteText').value = '';
}
