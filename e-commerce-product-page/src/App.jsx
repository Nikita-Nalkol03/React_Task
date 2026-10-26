
import React, { useEffect, useState } from 'react';
import api from './apiServices';
import './App.css';

const App = () => {
  const [form, setForm] = useState({
    name: '',
    price: '',
    cate: '',
    quantity: ''
  });

  const [edit, setEdit] = useState(null);
  const [allproduct, setAllProduct] = useState([]);

  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('');

  const [cart, setCart] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const loadAllProduct = async () => {
    const { data } = await api.get('/products');
    setAllProduct(data);
  };

  useEffect(() => {
    loadAllProduct();
  }, []);

  const clearForm = () => {
    setForm({
      name: '',
      price: '',
      cate: '',
      quantity: ''
    });
    setEdit(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (edit !== null) {
      await api.put(`/products/${edit}`, form);
    } else {
      await api.post('/products', form);
    }

    await loadAllProduct();
    clearForm();
  };

  const handleEdit = (product) => {
    setForm({
      name: product.name,
      price: product.price,
      cate: product.cate,
      quantity: product.quantity
    });

    setEdit(product.id);
  };

  const handleDelete = async (id) => {
    await api.delete(`/products/${id}`);
    await loadAllProduct();
  };

  // Search, category filter and price sorting
  const filteredProducts = [...allproduct]
    .filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((product) =>
      category === 'All' || product.cate === category
    )
    .sort((a, b) => {
      if (sortOrder === 'low') {
        return Number(a.price) - Number(b.price);
      }

      if (sortOrder === 'high') {
        return Number(b.price) - Number(a.price);
      }

      return 0;
    });

  // Add product to cart
  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, cartQuantity: item.cartQuantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...product, cartQuantity: 1 }];
    });
  };

  // Remove product from cart
  const handleRemoveFromCart = (id) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== id)
    );
  };

  const cartCount = cart.reduce(
    (sum, item) => sum + item.cartQuantity,
    0
  );

  const cartTotal = cart.reduce(
    (sum, item) =>
      sum + Number(item.price) * item.cartQuantity,
    0
  );

  return (
    <div>
      <center>
        <h1>E-Commerce Product Page</h1>

        <h2>{edit !== null ? 'Update Product' : 'Add Product'}</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter product name"
            required
          />
          <br /><br />

          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="Enter product price"
            min="0"
            required
          />
          <br /><br />

          <input
            type="text"
            name="cate"
            value={form.cate}
            onChange={handleChange}
            placeholder="Enter category"
            required
          />
          <br /><br />

          <input
            type="number"
            name="quantity"
            value={form.quantity}
            onChange={handleChange}
            placeholder="Enter stock quantity"
            min="0"
            required
          />
          <br /><br />

          <button type="submit">
            {edit !== null ? 'Update Product' : 'Add Product'}
          </button>

          {edit !== null && (
            <button type="button" onClick={clearForm}>
              Cancel
            </button>
          )}
        </form>

        <hr />

        <h2>Product List</h2>

        <input
          type="text"
          placeholder="Search product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <br /><br />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All Categories</option>

          {[...new Set(allproduct.map((p) => p.cate))].map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {' '}

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="">Default Order</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>

        <br /><br />

        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Stock</th>
              <th>Actions</th>
              <th>Cart</th>
            </tr>
          </thead>

          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>₹{product.price}</td>
                <td>{product.cate}</td>
                <td>{product.quantity}</td>

                <td>
                  <button onClick={() => handleEdit(product)}>
                    Update
                  </button>

                  {' '}

                  <button onClick={() => handleDelete(product.id)}>
                    Delete
                  </button>
                </td>

                <td>
                  <button
                    disabled={Number(product.quantity) <= 0}
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                </td>
              </tr>
            ))}

            {filteredProducts.length === 0 && (
              <tr>
                <td colSpan="6">No products found</td>
              </tr>
            )}
          </tbody>
        </table>

        <hr />

        <h2>Shopping Cart ({cartCount} items)</h2>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <table border="1" cellPadding="10">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>₹{item.price}</td>
                    <td>{item.cartQuantity}</td>
                    <td>
                      ₹{Number(item.price) * item.cartQuantity}
                    </td>
                    <td>
                      <button
                        onClick={() => handleRemoveFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3>Total: ₹{cartTotal}</h3>
          </>
        )}
      </center>
    </div>
  );
};

export default App;
