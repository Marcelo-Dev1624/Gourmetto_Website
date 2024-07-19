
//Format [Photo,Name,Description,Weight,Price]
const dataProductos = [
    ['images/products/pesto.jpg','Pesto Tradicional', 'Delicioso pesto en su receta tradicional', '220g','$5'],
    ['images/products/cebollas_encurtidas.jpg','Cebollas Encurtidas', 'Descripcion', '220g','$5'],
    ['images/products/pesto_tomate.jpg','Pesto de Tomates', 'Descripcion', '220g','$5'],
    ['images/products/higos.jpg','Mermelada de Higos', 'Descripcion', '220g','$5'],
    
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
      <div class="product-image-container">
        <img src="${product.photo}"/>
      </div>
      <div class="product-info">
        <div class="product-text-container">
          <h2>${product.name}</h2>
          <h3>${product.weight}</h3>
          <p>${product.description}</p>
        </div>
        <div class="product-pricing-container">
          <h3>${product.price}</h3>
          <button class="btn product-pricing-container-btn"><i class="fa-solid fa-cart-shopping"></i>Add to cart</button>
        </div>
      </div>
    `;
    return productElement;
  });
  // Agregar los elementos al contenedor de productos
  document.querySelector('.products-container').append(...productElements);


