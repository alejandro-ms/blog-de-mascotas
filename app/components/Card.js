export function Card(props) {
    return `
        <article class="post-card">
        <a class="post-link" href="#?${props.id}">
            <figure class="card-figure"> 
                <img class= "card-img" src="${props.image}" alt = "${props.title}">
            </figure>
            <h2 class="card-title">
                ${props.title}
            </h2>
            <p class="card-p">
            ${props.description}
            </p>
        </a>
        </article>
    `;
  }