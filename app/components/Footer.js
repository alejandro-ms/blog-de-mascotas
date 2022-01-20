export function Footer() {
    const $footer = document.createElement("footer");
    $footer.classList.add("main-footer");
    $footer.innerHTML = `<p>Nuestras mascotas nos aman y nosotros a ellas. Si 
        eres testigo de algún tipo de maltrato, no dudes denunciar. Alza la voz que ellos no pueden. <br> Para más información 
        <a target="_blank" href="https://igualdadanimal.mx/blog/como-denunciar-el-maltrato-y-la-crueldad-animal-en-mexico/">https://igualdadanimal.mx/blog/como-denunciar-el-maltrato-y-la-crueldad-animal-en-mexico/</a></p>`;
    return $footer;
  }