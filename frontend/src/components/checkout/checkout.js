import React from 'react';
import { useCart, CartProvider } from '../../CartContext'
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Checkout() {
    const useAddCart = useCart();
    const [open, setOpen] = React.useState(false);
    function handleOrder() {
        handleClick();
        useAddCart.emptyCart();
    }
    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    return (
        <div>
            Order Total : ${useAddCart.totalCost}
            <div>
                <Button variant="contained" color="primary" onClick={handleOrder}>
                    Place Order
                </Button>
            </div>
            <div>
                <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success">
                        Order Placed Successfully!
                </Alert>
                </Snackbar>
            </div>
        </div>
    )
}

export default Checkout;