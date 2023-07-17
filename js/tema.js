let body = document.querySelector('body');
let root = document.querySelector(':root');
let lampada = document.querySelector('#lampada');

document.getElementById('themeSwitcher').addEventListener('click', function() {
    if(body.dataset.theme === 'dark') {
        root.style.setProperty('--darker', '#ccc5b9');
        root.style.setProperty('--darker-secundary', '#ffe6a7');
        root.style.setProperty('--darker-terciary', '#e8eddf');
        root.style.setProperty('--color-font', '#0d1b2a');
        root.style.setProperty('--button', '#eecf6d');
        root.style.setProperty('--button-hover', '#d5ac4e');
        body.dataset.theme = 'light';
        lampada.setAttribute('class', 'bi bi-lightbulb-fill');
    } else {
        root.style.setProperty('--darker', '#0d1b2a');
        root.style.setProperty('--darker-secundary', '#1b263b');
        root.style.setProperty('--darker-terciary', '#415a77');
        root.style.setProperty('--color-font', '#f4f1de');
        root.style.setProperty('--button', '#80ed99');
        root.style.setProperty('--button-hover', '#57cc99');
        body.dataset.theme = 'dark';
        lampada.setAttribute('class', 'bi bi-lightbulb');
    }
});