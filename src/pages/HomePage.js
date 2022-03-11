import React, {useContext, useEffect} from 'react';
import { ShopContext } from '../context/shopContext';
import { Container, Text, Row, Col, Div } from 'atomize';
import { NavLink } from 'react-router-dom';

const HomePage = () => {

    const { fetchAllProducts, products } = useContext(ShopContext)

    useEffect(() => {
        fetchAllProducts()
        return () => {

        }
    },[fetchAllProducts])

    if(!products) return <div>loading</div>

    return(
          <Container>
              <Row>
                  {products.map(product => (
                      <Col key = {product.id} size = '3'>
                          <Text>
                             <NavLink to = {`/product/${product.id}`}>
                                 <Div p = '2rem'>
                                    <Div
                                    h = '20rem'
                                    bgImg = {product.images[0].src}
                                    bgSize = 'cover'
                                    bgPos = 'center center'
                                    />
                                    <Text>{product.title}</Text>    
                                    <Text>${product.variants[0].price}</Text>    
                                </Div>
                                 </NavLink>

                          </Text>
                      </Col>
                  ))}
              </Row>
          </Container>  
    )
}

export default HomePage;