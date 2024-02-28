import React from 'react';
import Nav from '../Components/Nav'
import NavigateButton from '../Components/NavigateButton';
import SearchBox from '../Components/SearchBox';
import InfoIcon from '@mui/icons-material/Info';
import ProductCards from '../Components/ProductCards'

const Product = () => {
    const categoryName = localStorage.getItem("categoryName")
    const categoryId = localStorage.getItem("categoryId")
    return (
        <div class="backgound">
            <Nav currentPage="Products"/>
            <div class="d-flex justify-content-between p-5">
                <div class="category-heading p-5 rounded-3 w-75 shadow">
                    <div class="h1 text-center ">{categoryName}</div>
                </div>
                <div class="category-func-box ps-5 text-center w-25 d-flex flex-column justify-content-evenly">
                    <SearchBox />
                    <NavigateButton text="Help Center" route="/help-center" custom_class="btn help-center-button h3 rounded text-white w-100 " logo={<InfoIcon />} />
                </div>
            </div>
            <ProductCards categoryId={categoryId}/>
        </div>
    );
};

export default Product;
