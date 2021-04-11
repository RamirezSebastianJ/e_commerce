import React from 'react'
import { Container, Typography, Button, Grid} from '@material-ui/core';
import useStyles from './styles';
import { Link } from 'react-router-dom';

import CardItem from './CartItem/CartItem';


const Cart = ( { cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {
    //const isEmpty = !cart.line_items.lenght;
    const classes = useStyles;


    const EmptyCard = () => (
        <Typography variant="subtitle1">You have no items in your shopping cart,
            <Link className={classes.link} to="/">start adding some</Link>!
        </Typography>
    );

    const FilledCart = () => (
        <> 
            <Grid containe spacing={3}>
                {cart.line_items.map((item)=>(
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CardItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart = {handleRemoveFromCart}/>
                    </Grid>    
                ))}
            </Grid>
            <div className={classes.cardDetails} >
                <Typography variant="h4">SubTotal: { cart.subtotal.formatted_with_symbol }</Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty Card</Button>
                    <Button className={classes.checKoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
                </div>
                
            </div>
        </>
    );
    
    if(!cart.line_items) return 'Loading ...';

    return (
        <Container>
            <div className={classes.toolbar}/>
            <Typography className={classes.title} varaint="h3">Your Shopping Cart</Typography>
            { cart.line_items.length == 0 ? EmptyCard() : FilledCart() }
        </Container>
    )
}

export default Cart
