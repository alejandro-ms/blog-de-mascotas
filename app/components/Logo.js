
export function Logo () {
    const $a = document.createElement('a');
    $a.classList.add('container-logo');
    const $img = "app/assets/welcome.svg";
    $a.href = "index.html#/";
    $a.innerHTML = `
        <img class="img-logo" src="${$img}" alt="welcome"> 
    `;

    return $a;
}