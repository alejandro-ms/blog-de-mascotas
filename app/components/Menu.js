
export function Menu () {
    const $nav = document.createElement("nav");
    $nav.innerHTML = `
        <a class="header-nav" href="#/tips">Consejos</a>
        <a class="header-nav" href="#/hygiene">Higiene</a>
        <a class="header-nav" href="#/vaccines">Vacunas</a>
    `

    return $nav;
}