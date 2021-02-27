import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../productList/product/product';
import axios from 'axios';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import { useCart, CartProvider } from '../../CartContext'
import { NativeSelect } from '@material-ui/core'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(),
    },
    product: {
        padding: theme.spacing(3),
    },
    link: {

        color: "black",
        "&:hover": {
            color: "black",
            textDecoration: "None"
        }
    },
    title: {
        marginTop: "0",
        color: "#3f51b5",
    },
    txt: {
        fontSize: "14px",
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}))

function ProductDetails() {
    let { id } = useParams();
    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState("1")
    const url = "http://localhost:8000/ecommerce/product/" + id + "/"
    const useAddCart = useCart();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    useEffect(() => {
        axios.get(url)
            .then(response => { return response.data })
            .then((data) => setProduct(data))
    }, []);
    const classes = useStyles();
    const addToCart = async () => {
        handleClick();
        await useAddCart.addCart(product, quantity);
    }
    return (
        <div className={classes.root}>
            <Grid container className={classes.product}>
                <Grid item xs={2}>
                    <img src={product?.image_url} height="100" alt="" />
                </Grid>
                <Grid item container xs={7}>
                    <Grid item>
                        <div>
                            <h5 className="title">{product.title}</h5>
                        </div>
                        <div className={classes.txt}>
                            by {product?.provider?.provider_name}
                        </div>
                        <div className={classes.txt}>$ {product?.cost}</div>
                    </Grid>
                </Grid>
                <Grid item xs={2}>
                    <div style={{ float: "right", marginRight: "60px", display: "inline-block" }}>
                        <div style={{ display: "inline-block" }}>
                            <InputLabel htmlFor="select">Qty</InputLabel>
                            <NativeSelect onChange={(e) => { setQuantity(e.target.value) }} id="select">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                            </NativeSelect>
                        </div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div style={{ display: "inline-block" }}>
                            <IconButton
                                edge="end"
                                aria-label="account of current user"
                                aria-haspopup="true"
                                color="inherit"
                                onClick={addToCart}
                            >
                                <AddShoppingCartIcon
                                    fontSize="large"
                                    cursor="pointer"
                                />
                            </IconButton>
                        </div>
                    </div>
                </Grid>
            </Grid>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    Added to cart succesfully
                </Alert>
            </Snackbar>
        </div>
    )
}

export default ProductDetails;