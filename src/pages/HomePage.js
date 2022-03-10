import React, {useContext, useEffect} from 'react';
import { ShopContext } from '../context/shopContext';

const HomePage = () => {

    const { fetchAllProducts, products } = useContext(ShopContext)

    useEffect(() => {
        fetchAllProducts()
        return () => {

        }
    },[fetchAllProducts])

    if(!products) return <div>loading</div>

    return(
        <div>
            we have products
        </div>
    )
}

export default HomePage;