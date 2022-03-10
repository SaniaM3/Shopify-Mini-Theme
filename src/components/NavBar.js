import { Container, Anchor} from 'atomize';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react/cjs/react.production.min';
import { ShopContext } from '../context/shopContext';


const NavBar = () => {

    const { openCart } = useContext(ShopContext)

    return(
        <Container>
            <NavLink to = '/'>Shop</NavLink>
            <Anchor onClick = {()=> openCart()}>Cart</Anchor>
        </Container>
    )
}

export default NavBar;