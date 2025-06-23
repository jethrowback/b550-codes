export function createCards() {
  const products = [
    { title: 'StormShield Tech Tee', desc: 'Whether you’re dodging raindrops or chasing adventure, the StormShield Tech Tee has your back.', img: 'images/product1.jpg', price: 'Buy now - ₱249.99' },
    { title: 'Typhoon Breaker Graphic Tee', desc: 'Make a statement before the storm even hits with the Typhoon Breaker Tee.', img: 'images/product2.jpg', price: 'Buy now - ₱249.99' },
    { title: 'Monsoon Mesh Tee', desc: 'Upgrade your storm-ready wardrobe with the Monsoon Mesh Polo.', img: 'images/product3.jpg', price: 'Buy now - ₱249.99' }
  ];

  let html = '<div class="row">';
  products.forEach(p => {
    html += `
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <img src="${p.img}" class="card-img-top" alt="${p.title}">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${p.title}</h5>
            <p class="card-text">${p.desc}</p>
            <a href="#" class="mt-auto btn btn-primary">${p.price}</a>
          </div>
        </div>
      </div>
    `;
  });
  html += '</div>';
  return html;
}
