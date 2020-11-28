const colorBtns = document.querySelectorAll('.color-btn'),
      newBtn = document.querySelector('.plus'),
      notesContainer = document.querySelector('.notes-container');
let color, note;

newBtn.addEventListener('click', () => {
    for (const btn of colorBtns) {
        btn.classList.toggle('animate');
    }
});

document.querySelector('.new-note').addEventListener('click', (e) => {
    if (e.target.classList[0] === 'color-btn') {
        color = e.target.getAttribute('data-color');
        note = document.createElement('div');
        note.classList.add('note');
        note.style.backgroundColor = color;
        note.innerHTML = 
        '<textarea placeholder="Your Note"></textarea> <i class="fas fa-pen"></i>'
        notesContainer.appendChild(note);
        setTimeout(() => {
            notesContainer.lastChild.classList.add('create');
            notesContainer.lastChild.firstChild.focus();
        }, 200);
    }
});
