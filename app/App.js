import { Header } from "./components/Header.js";
import { Main } from "./components/Main.js";
import { apiPets } from "./helpers/ajax.js";
import { Router } from "./router.js";

export function App () {
    const $root = document.getElementById("root");
  
    $root.innerHTML = null;
    $root.appendChild(Header());
    $root.appendChild(Main());
    Router();
  }
  