import React from 'react';
import Nav from '../Components/Nav'
import CategoryCards from '../Components/CategoryCards';
import NavigateButton from '../Components/NavigateButton';
import SearchBox from '../Components/SearchBox';
import InfoIcon from '@mui/icons-material/Info';

const Category = () => {
    const productCategories = ['Laptops', 'Hats', 'Zentai'];
    const products = [
        { name: 'Laptop 1', description: 'A powerful laptop for all your needs.', image: '...' },
        { name: 'Laptop 2', description: 'A budget-friendly laptop with great features.', image: '...' },
        // ... more products
    ];

    return (
        <div class="backgound">
            <Nav />
            <div class="d-flex justify-content-between p-5">
                <div class="category-heading p-5 rounded-3 w-75 shadow">
                    <div class="h6 text-center ">Here you can search what type of products we have!<br />Tap explore more to see specific items!</div>
                </div>
                <div class="category-func-box ps-5 text-center w-25 d-flex flex-column justify-content-evenly">
                    <SearchBox />
                    <NavigateButton text="Help Center" route="/coming-soon" custom_class="btn help-center-button h3 rounded text-white w-100 " logo={<InfoIcon />} />
                </div>
            </div>
            <CategoryCards />
        </div>
    );
};

export default Category;
