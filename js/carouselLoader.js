const carouselIndicators = document.querySelector(".carousel-indicators");
const carouselContent = document.querySelector(".carousel-inner");
const element = document.getElementById("myElement");
            
if (window.innerWidth < 767)  document.querySelector("#mobileLink").classList.remove("invisible");


let content = [
                {
                    title: "PIZZA MANAGER",
                    link: "https://github.com/enricoberg/Pizza-manager",
                    description: "Gestionale completo per pizzerie, login con diversi ruoli: cameriere, cuoco, cassiere. Gestione ordinazioni, cassa, prenotazioni e tavoli.",
                    imgsource: "img/pizza.webp"
                },
                {
                    title: "HOTEL POMELIA",
                    link: "https://github.com/enricoberg/hotelpomelia",
                    description: "Primo progetto START2IMPACT: Introduzione allo sviluppo. Creazione di un sito per un hotel ecosostenibile.",
                    imgsource: "img/pomelia.webp"
                },
                {
                    title: "SITO FREELANCER",
                    link: "",
                    description: "Sito vetrina realizzato per un consulente di progettazione meccanica e stampaggio a iniezione.",
                    imgsource: "img/adm.webp"
                },
                {
                    title: "CATALOGO B|BRAUN",
                    link: "",
                    description: "Catalogo digitale di prodotti e servizi OEM per il settore medicale.",
                    imgsource: "img/bbraun.webp"
                },
                {
                    title: "CITY SCORE",
                    link: "https://github.com/enricoberg/city_score",
                    description: "Progetto JavaScript Advanced START2IMPACT: motore di ricerca con chiamata API per visualizzare i punteggi delle città",
                    imgsource: "img/city.webp"
                }

]

function loadProject(project,number){
    carouselIndicators.innerHTML += `<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${number}" aria-label="Slide ${number+1}" class="${(number==0)? "active" : ""}"></button>`
    carouselContent.innerHTML += `<div class="carousel-item ${(number==0)? "active" : ""}">
                            <img src="${project.imgsource}" class="d-block w-100 mx-auto" alt="preview of ${project.title} project">
                            <div class="carousel-caption d-none d-md-block text-dark">
                            <h5><a href="${project.link}" target="_blank">${project.title}</a></h5>
                            <p>${project.description}</p>
                            </div>
                        </div>`
}




document.addEventListener("DOMContentLoaded",()=>{
    
    for (let i=0; i<content.length; i++) {
        loadProject(content[i],i);
    }

});