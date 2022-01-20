export function Post(props) {
    return `
        <h2 class="main-title">${props.title}</h2>
        <figure class="main-figure">
        <img class="main-img" src="${props.image}" alt"${props.title}">
        </figure>
        <p class="main-paragraph">${props.text}</p>
    `;
  }