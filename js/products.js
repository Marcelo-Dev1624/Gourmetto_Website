
//Format [Photo,Name,Description,Weight,Price]
const dataProductos = [
    ['images/products/pesto.jpg','Pesto Tradicional', 'Delicioso pesto en su receta tradicional', '220g'],
    ['images/products/cebollas_encurtidas.jpg','Cebollas Encurtidas', 'Descripcion', '220g'],
    ['images/products/pesto_tomate.jpg','Pesto de Tomates', 'Descripcion', '220g'],
    ['images/products/higos.jpg','Mermelada de Higos', 'Descripcion', '220g'],
]

const products = dataProductos.map(([photo,name, description, weight]) => ({
    photo,
    name,
    description,
    weight,
  }));


  let productsContainer = document.querySelector('.products-container');

  const productElements = products.map((product) => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');
    productElement.innerHTML = `
      <img src="${product.photo}" />
      <div class="product-text-container">
        <h2>${product.name}</h2>
        <h3>${product.weight}</h3>
        <p>${product.description}</p>
      </div>
    `;
    return productElement;
  });
  // Agregar los elementos al contenedor de productos
  document.querySelector('.products-container').append(...productElements);


