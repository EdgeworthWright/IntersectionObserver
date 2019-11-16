let alleLinks = document.querySelectorAll('nav ul li a');


// Functie die active verwijderd
const verwijderActief = () => {
    alleLinks.forEach( (link) => {
        if (link.classList == 'active') {
            link.classList.remove('active');
        }
    });
}

// functie die active toevoegt
const maakActief = (elem) => {
    verwijderActief();
    elem.classList.add('active');
}


alleLinks.forEach( (link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        maakActief(e.target);
        window.location = e.target.href;
    })
})