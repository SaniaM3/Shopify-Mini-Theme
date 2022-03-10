import { useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.production.min";
import { useContext } from "react/cjs/react.production.min";
import { ShopContext } from "../context/shopContext";
import { Text, Div, Col, Row, Container } from 'atomize';


const ProductPage = () => {

let {id} = useParams();
const {fetchProductWithId, addItemToCheckout, product} = useContext(ShopContext)

useEffect(() => {
    fetchProductWithId(id)
    return () => {

    };
}, [fetchProductWithId, id])
    if (!product.title) return <div>Loading</div>
    return(
        <Container>
            <Row>
              <Col>
                 <Div bgImg = {product.images[0].src} bgSize = 'cover' bgPos = 'center center' h = '40rem' />
              </Col>  
              <Col>
                <Text>{product.title}</Text>
                <Text>{`$`}</Text>
              </Col>  
            </Row>
        </Container>
    )
}

export default ProductPage;