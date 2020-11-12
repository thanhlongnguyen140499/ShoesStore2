import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../actions/productActions';
import './Trending.css'
import { Swiper } from 'swiper/react'

function Trending() {

    // const [products, setProduct] = useState([]);
    const productList = useSelector(state => state.productList);
    const { products, loading, error } = productList;
    const dispatch = useDispatch();

    useEffect(() => {
        // const fetchData = async () => {
        //     const {data} = await axios.get("/api/products");
        //     setProduct(data);
        // }
        // fetchData()
        dispatch(listProducts());
        return () => {

        }
    }, [])

    return (
        loading ? <div>Loading</div> :
            error ? <div>{error}</div> :
                <div className="trending">
                    <h3>Trending</h3>
                    <ul className="products">
                        {
                            products.map(product =>
                                <li key={product._id}>
                                    <Swiper>
                                        
                                    </Swiper>
                                    <div className="product">
                                        <div className="container-image">
                                            <Link to={'/product/' + product._id}>
                                                <img className="product-image" src={product.image} alt="product" />
                                            </Link>
                                        </div>
                                        <div className="product-name">
                                            <Link to={'/product/' + product._id}>
                                                {product.name}
                                            </Link>
                                        </div>
                                        <div className="product-brand"> {product.brand} </div>
                                        <div className="product-price"> ${product.price}</div>
                                        <div className="product-rating">
                                            {product.rating} stars ({product.numReviews})
                                        </div>
                                    </div>
                                </li>
                            )
                        }
                    </ul>
                </div>
    )
}

export default Trending
