import { apiPets } from "./helpers/ajax.js";
import { Paragraph } from "./components/Paragraph.js";
import { Images } from "./components/Images.js";
import { Card } from "./components/Card.js";
import { Post } from "./components/Post.js";
import { Footer } from "./components/Footer.js";

export async function Router () {
    const $main = document.getElementById("main");
    let { hash } = location;
    //console.log(hash);

    $main.innerHTML = null;

    if(!hash || hash === "#/") {
        $main.innerHTML = `<h1 class="main-title">Bienvenido</h1>`;
        const api =  await apiPets();
        const $image = Images("app/assets/dog.png");
        $main.appendChild($image);
        const $p = Paragraph(api[0].welcome[0].text);
        const $footer = Footer();
        $main.appendChild($p);
        $main.appendChild($footer);
       //console.log($main);

    } else if (hash.includes("#/tips")) {
        $main.innerHTML = `<h1 class="main-title">Consejos</h1>`;
        const $gallery = document.createElement("div");
        $gallery.classList.add("container-cards");
        const api =  await apiPets();
        //console.log(api);
        let html = "";
       //let { tips } = api;
       //console.log(tips);
        api[0].tips.forEach(post => {
            html += Card(post);
        });
        $main.appendChild($gallery);
        $gallery.innerHTML += html;

    } else if (hash.includes("#/hygiene")) {
        $main.innerHTML = `<h1 class="main-title">Higiene</h2>`;
        const $gallery = document.createElement("div");
        $gallery.classList.add("container-cards");
        const api =  await apiPets();
        //console.log(api);
        let html = "";
        //let { hygiene } = api;
        api[0].hygiene.forEach(post => {
            html += Card(post);
        });
        $main.appendChild($gallery);
        $gallery.innerHTML += html;
        
    } else if (hash.includes("#/vaccines")) {
        $main.innerHTML = `<h1 class="main-title">Vacunas</h1>`;
        const $gallery = document.createElement("div");
        $gallery.classList.add("container-cards");
        const api =  await apiPets();
        let html = "";
        api[0].vaccines.forEach(post => {
            html += Card(post);
        });
        $main.appendChild($gallery);
        $gallery.innerHTML += html;
    }
    else if(hash.includes("#?tips")) { 
        let number = hash.split("#?tips");
        //console.log(number[1]);
        const api =  await apiPets();
        let html = Post(api[0].tips[number[1]]);
        $main.innerHTML = html;
    }
    else if(hash.includes("#?hygiene")) {
        
        let number = hash.split("#?hygiene");
        //console.log(number[1]);
        const api =  await apiPets();
        let html = Post(api[0].hygiene[number[1]]);
        $main.innerHTML = html;
    }
    else if(hash.includes("#?vaccines")) {
        
        let number = hash.split("#?vaccines");
        //console.log(number[1]);
        const api =  await apiPets();
        let html = Post(api[0].vaccines[number[1]]);
        $main.innerHTML = html;
    }
}