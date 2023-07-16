


// GET
// ProductList
const productList = async () => {
    const data = await fetch('http://localhost:3000/products');
    return data.json();
}

// CategoriesList
const categoriesList = async () => {
    const data = await fetch('http://localhost:3000/categories');
    return data.json();
}

// UsersList

const usersList = async () => {
    const data = await fetch('http://localhost:3000/users');
    return data.json();
}

// LoadProduct

const loadProduct = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/products/${id}`);
      if (!response.ok) {
        throw new Error("Error al cargar el producto");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

// create product

const createProduct = async (imageUrl, name, price, categorie, description, id) => {
  return await fetch('http://localhost:3000/products', {
    method : 'POST',
    headers : {
      "Content-type" : "application/json",
    },
    body: JSON.stringify({
      imageUrl,
      name,
      price,
      categorie,
      description,
      id,
    })
  })
}

// delete product

const deleteProduct = async (id) => {
  return await fetch(`http://localhost:3000/products/${id}`, {
    method : 'DELETE',
  })
}

// edit product 

const updateProduct = async (id, imageUrl, name, price, categorie, description) => {
  return await fetch(`http://localhost:3000/products/${id}`, {
    method : 'PUT',
    headers : {
      "Content-type" : "application/json",
    },
    body: JSON.stringify({
      imageUrl,
      name,
      price,
      categorie,
      description,
    })
  })
}

export const productServices = {
    productList,
    categoriesList,
    loadProduct,
    usersList,
    createProduct,
    deleteProduct,
    updateProduct,
} 