let alleLinks = document.querySelectorAll('nav ul li a');
let deSecties = document.querySelectorAll('.content');

const opties = {
    // rootMargin: '-150px',
    treshold: 1.0
};
const verwerkDoorsnijding = (entries, observer) => {
    entries.forEach( entry => {
        console.log(entry.target.parentNode.parentNode.id + " doorsnijdt " + entry.isIntersecting);
        if (entry.isIntersecting) {
            let link = zoekBijpassendeLink(entry.target.parentNode.parentNode.id);
            maakActief(link);
        }
    });
}

let observer = new IntersectionObserver(verwerkDoorsnijding, opties);

// observer.observe(deSecties[1]);
deSecties.forEach( sectie => {
    observer.observe(sectie.getElementsByTagName('h1')[0]);
})

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

const zoekBijpassendeLink = (id) => {
    let link = document.querySelector('nav ul li a[href="#'+id+'"]');
    return link;
}