export function Paragraph(props) {
    const $p = document.createElement("p");
    $p.classList.add('main-paragraph');
    //console.log(props);
    $p.innerHTML = `${props}`;
    return $p;
}