import { useEffect, useState } from 'react';
import axios from 'axios';
import { css } from "@emotion/react";
import { ClipLoader } from "react-spinners";

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
        <>
            <div class="container" id="">
                <div class="h3">Admin Category |</div>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <div>
                        <h2>Products</h2>

                        {products.map(product => (
                            <div class="row">
                                <div class="card" key={product.id}>
                                    <div class="card-body d-flex">
                                        <img src="image.jpg" class="card-img-top" alt="Photo" />
                                        <h5 class="card-title">{product.name}</h5>
                                        <p class="card-text">${product.price}</p>
                                        <p class="card-text">{product.short_description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                )}
            </div>
        </>
    );
}

export default AdminCategory;
