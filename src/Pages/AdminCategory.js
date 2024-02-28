import { useEffect, useState } from 'react';
import axios from 'axios';
import { css } from "@emotion/react";
import { ClipLoader } from "react-spinners";
import Nav from '../Components/Nav'
import CommingSoon from './ComingSoon';

const apiEndPoint = "http://localhost:8000/api/products"
const token = localStorage.getItem('token');

const AdminCategory = () => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(apiEndPoint, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
            .then(response => {
                setProducts(response.data.products);
                console.log(response.data)
            })
            .catch(error => {
                console.error('Error checking user', error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const override = css`
    display: block;
    margin: 0 auto;
  `;

    if (loading) {
        return (
            <div className="loading-spinner">
                <ClipLoader color={"#36D7B7"} loading={loading} css={override} size={50} />
            </div>
        );
    }

    return (
        <div class="backgound">
            <Nav currentPage="Admin Portal"/>
            <CommingSoon/>
        </div>
    );
}

export default AdminCategory;
