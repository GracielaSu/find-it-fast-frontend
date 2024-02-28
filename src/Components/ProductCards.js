import { useState, useEffect } from 'react';
import axios from 'axios';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';

const productsApiEndpoint = "http://localhost:8000/api/products";
const imgPath = "/photos/";

const ProductCards = (categoryId) => {
  const token = localStorage.getItem('token');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const category_id = +categoryId.categoryId

  useEffect(() => {
    axios.get(productsApiEndpoint, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
      .then(response => {
        console.log(category_id)
        const filteredProducts = response.data.products.filter(product => product.category_id === category_id);
        setProducts(filteredProducts);
        setLoading(false);
        console.log("Filtered:", filteredProducts)
      })
      .catch(error => {
        console.error('Error fetching products', error);
        setLoading(false);
      });
  }, [token]);

  if (loading) {
    return <p>Loading products...</p>;
  }

  function handleExplore(name) {
    localStorage.setItem("categoryName", name);
    navigate("/product", { replace: true });
  }

  return (
    <>
      {products.map(product => (
        <div class="card" style={{width: "18rem"}}>
          <img src="..." class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
              {/* <div className="category-button btn w-50 p-3 text-white h3" onClick={() => handleExplore(product.name)}>Explore <ShoppingCartIcon /></div> */}
            </div>
        </div>
      ))}
    </>
  );
}


export default ProductCards;
