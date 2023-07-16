


// GET
// ProductList
const productList = async () => {
    const data = await fetch('https://64b461990efb99d86268ff0c.mockapi.io/products');
    return data.json();
}

// CategoriesList
const categoriesList = async () => {
    const data = await fetch('https://64b461990efb99d86268ff0c.mockapi.io/categories');
    return data.json();
}

// UsersList

const usersList = async () => {
    const data = await fetch('https://64b465e50efb99d862690358.mockapi.io/users');
    return data.json();
}

// LoadProduct

const loadProduct = async (id) => {
    try {
      const response = await fetch(`https://64b461990efb99d86268ff0c.mockapi.io/products/${id}`);
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
  return await fetch('https://64b461990efb99d86268ff0c.mockapi.io/products', {
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
  return await fetch(`https://64b461990efb99d86268ff0c.mockapi.io/products/${id}`, {
    method : 'DELETE',
  })
}

// edit product 

const updateProduct = async (id, imageUrl, name, price, categorie, description) => {
  return await fetch(`https://64b461990efb99d86268ff0c.mockapi.io/products/${id}`, {
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