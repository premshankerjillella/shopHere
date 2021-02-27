import React from 'react';
import CartItem from './cartItem/cartItem'
import { useCart, CartProvider } from '../../CartContext'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import './cart.css'
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';



function Cart() {
    const useAddCart = useCart();
    const cart = useAddCart.cart
    const totalCost = useAddCart.totalCost
    return (
        <div>
            {
                cart?.map((item) =>
                    <CartItem key={uuidv4()} product={item.product} quantity={item.qty} />
                )
            }
            {
                cart.length > 0 ? (
                    <Grid container >
                        <Grid item xs={9} />
                        <Grid item xs={3}>
                            <div className="total">
                                <div >
                                    Total : ${totalCost}
                                </div>
                                <div>
                                    <Link to="/checkout">
                                        <Button variant="contained" color="primary">Proceed to Checkout</Button>
                                    </Link>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                ) : <h2>cart is empty</h2>
            }
        </div>

    )
}

export default Cart;