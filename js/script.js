/*
Consegna:
Dato un array contenente una lista di cinque immagini, creare un carosello ispirandovi alle foto in allegato.
Potete anche usare immagini diverse e variare leggermente lo stile, l'importante è la logica!
MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo l'immagine grande in modo
da poter stilare lo slider; avremo così la struttura base e gli stili pronti per poterci poi concentrare
solamente sull'aspetto logico.
MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo le immagini dinamicamente servendoci dell'array
fornito e un semplice ciclo for. Possiamo concatenare una stringa con un template literal oppure utilizzare
gli altri metodi di manipolazione del DOM che abbiamo visto insieme. Al termine di questa fase ci ritroveremo
con lo stesso slider, ma costruito dinamicamente attraverso JavaScript.
MILESTONE 3
Al click dell'utente sulle frecce, l'immagine attiva cambia e diventa visibile nello slider, prendendo il posto
della precedente.
BONUS 1:
Aggiungere il ciclo infinito del carosello. Ovvero se l' immagine attiva è la prima e l'utente clicca
la freccia per andare indietro, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima
miniatura se l'utente clicca la freccia verso avanti, deve attivarsi la prima immgine.
BONUS 2:
Creiamo delle miniature di tutte le immagni, in cui dovrà apparire in evidenza l’immagine equivalente a
quella attiva, scegliete liberamente se scurire le altre immagini oppure se evidenziarla semplicemente
con un bordo. Tra queste miniature, quella corrispondente all'immagine attiva deve evidenziarsi,
scegliete voi l'effetto estetico, potete colorarla diversamente rispetto alle altre o aggiungere
un semplice bordo.
*/

// FASE DI PREPARAZIONE
// preparo le sorgenti dell'immagine
const sources = ['img/01.webp','img/02.webp','img/03.webp','img/04.webp','img/05.webp'];
// prendo gli elementi che mi interessano dal DOM
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const carouselGallery = document.querySelector('.gallery');
// vado a considerare ora le img del thumbnails
const thumbnailsGallery = document.getElementById('thumbnails');

// ora devo generare le immagini da Js
let imgs = '';
for(let i = 0; i < sources.length; i++){
    const currentElement = sources[i];
    imgs += `<img alt="hero${i+1}" src="${currentElement}">`;
}
// metto in pagina le immagini carousel and thumbnails
carouselGallery.innerHTML = imgs;
thumbnailsGallery.innerHTML = imgs;
// raccolgo tutte le immagini carousel e thumbnails
const images = document.querySelectorAll('#carousel img');
const thumbs = document.querySelectorAll('#thumbnails img');


// rendiamo visibile la prima img
let currentActiveIndex = 0;
images[currentActiveIndex].classList.add('active');
thumbs[currentActiveIndex].classList.add('active');
// gestiamo ora gli eventi dinamici
// gestiamo il tasto next
nextButton.addEventListener('click', function(){

    // togliamo la classe active all'immagina attualmente attiva
    images[currentActiveIndex].classList.remove('active');
    thumbs[currentActiveIndex].classList.remove('active');

    // incremento indice
    currentActiveIndex++;

    // controlliamo se siamo fuori array 
    if(currentActiveIndex === images.length){
        currentActiveIndex= 0;
    }

    console.log(currentActiveIndex, images);

    // mettiamo la classe active all'immagine successiva
    images[currentActiveIndex].classList.add('active');
    thumbs[currentActiveIndex].classList.add('active');

})
// gestiamo il tasto previous
prevButton.addEventListener('click', function(){
    images[currentActiveIndex].classList.remove('active');
    thumbs[currentActiveIndex].classList.remove('active');

    //DECREMTNO INDICE
    currentActiveIndex--;
    // faccio il controllo se sono arrivata all'inizio
    if(currentActiveIndex < 0){
        currentActiveIndex = images.length - 1;
    }
    images[currentActiveIndex].classList.add('active');
    thumbs[currentActiveIndex].classList.add('active');

})