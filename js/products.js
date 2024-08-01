
//Format [Photo,Name,Description,Weight,Price]
const dataProductos = [
    ['images/products/pesto_trad.png','Pesto Tradicional', 'Delicioso pesto en su receta tradicional', '220g','$5'],
    ['images/products/cebollas.png','Cebollas Encurtidas', 'Descripcion', '220g','$5'],
    ['images/products/pesto_tom.png','Pesto de Tomates', 'Descripcion', '220g','$5'],
    ['images/products/higos.png','Mermelada de Higos', 'Descripcion', '220g','$5'],
    ['images/products/frutos_rojos.png','Mermelada de Frutos Rojos', 'Descripcion', '220g','$5'],
    ['images/products/tomates.png','Tomates Confitados', 'Descripcion', '220g','$5'],
    ['images/products/ajos.png','Ajos Confitados', 'Descripcion', '220g','$5'],

    
]

const products = dataProductos.map(([photo,name, description, weight,price]) => ({
    photo,
    name,
    description,
    weight,
    price,
  }));


  let productsContainer = document.querySelector('.products-container');

  const productElements = products.map((product) => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');
    productElement.innerHTML = `

        <img src="${product.photo}"/>
      <div class="product-info">
        <div class="product-text-container">
          <h2>${product.name} </br> <span>${product.weight}</span></h2>
          <p>${product.description}</p>
        </div>
        <div class="product-pricing-container">
          
            <h3><span>Precio: </span>${product.price}</h3>
          
          <button class="btn-size small btn-third-dark-hover mobile-full"><i class="fa-solid fa-cart-shopping"></i> Añadir al carro</button>
        </div>
      </div>
    `;
    return productElement;
  });
  // Agregar los elementos al contenedor de productos
  document.querySelector('.products-container').append(...productElements);


