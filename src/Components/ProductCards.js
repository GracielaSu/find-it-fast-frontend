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

  function handleBuy(link) {
    navigate(link, { replace: true });
  }

  return (
    <div class="row justify-content-md-around w-100">
      {products.map(product => (
        <div class="card mb-5" style={{width: "20rem"}}>
          <div class="p-3">
          <img src={imgPath+product.img_url} class="card-img-top" alt="..." style={{width:"100%"}}/>
          </div>
            <div class="card-body">
              <h5 class="card-title">{product.name}</h5>
              <p class="card-text">{product.long_description}</p>
              <div class="d-flex justify-content-around">
                <div class="text-info p-2">${product.price}</div>
                <div class="btn btn-info h6" onClick={() => handleBuy("/coming-soon")}>Buy <ShoppingCartIcon/></div>
              </div>
              {/* <div className="category-button btn w-50 p-3 text-white h3" onClick={() => handleExplore(product.name)}>Explore <ShoppingCartIcon /></div> */}
            </div>
        </div>
      ))}
      {products.map(product => (
        <div class="card mb-5" style={{width: "20rem"}}>
          <div class="p-3">
          <img src={imgPath+product.img_url} class="card-img-top" alt="..." style={{width:"100%"}}/>
          </div>
            <div class="card-body">
              <h5 class="card-title">{product.name}</h5>
              <p class="card-text">{product.long_description}</p>
              <div class="d-flex justify-content-around">
                <div class="text-info p-2">${product.price}</div>
                <div class="btn btn-info h6" onClick={() => handleBuy("/coming-soon")}>Buy <ShoppingCartIcon/></div>
              </div>
            </div>
        </div>
      ))}
    </div>
  );
}


export default ProductCards;
