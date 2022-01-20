export function Images (props) {
    const $figure = document.createElement("figure"); 
    $figure.classList.add('main-figure');  
    const $img = `${props}`;
    $figure.innerHTML = `
        <img class="main-img welcome-img" src="${$img}" alt="welcome">
    `;
    return $figure;
}