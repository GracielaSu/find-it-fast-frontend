import { useState, useEffect } from 'react';
import axios from 'axios';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';


const categoriesApiEndpoint = "http://localhost:8000/api/categories";
const imgPath = "/photos/";

const CategoryCards = () => {
  const token = localStorage.getItem('token');
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(categoriesApiEndpoint, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
      .then(response => {
        setCategories(response.data.categories);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching categories', error);
        setLoading(false);
      });
  }, [token]);

  if (loading) {
    return <p>Loading categories...</p>;
  }

  function handleExplore (name, id) {
    localStorage.setItem("categoryName", name)
    localStorage.setItem("categoryId", id)
    navigate("/product", { replace: true });
  }

  return (
    <>
      {categories.map(category => (
        <div class="category-card container my-5 rounded p-0">
          <div class="category-name w-50 p-3 text-white h3">{category.name}</div>
          <div class="category-image">
            <img src={imgPath + category.img_url} alt="Image description" class="w-100" />
          </div>
          <div class="d-flex justify-content-end">
            <div class="category-button btn w-50 p-3 text-white h3" onClick={() => handleExplore(category.name, category.id)}>Explore <ShoppingCartIcon/></div>
          </div>
        </div>
      ))}
    </>
  );
}

export default CategoryCards;
