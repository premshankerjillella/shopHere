import React from 'react';
import './cartItem.css';
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(),
    },
    product: {
        padding: theme.spacing(3),
        borderBottom:'1px solid grey'
    },
    title: {
        marginTop: "0",
        color: "#3f51b5",
    },
    txt: {
        fontSize: "14px",
    },
}))

function CartItem({product, quantity}){
    const classes = useStyles();
    return (
        <div className={classes.root}>
                <Grid container className={classes.product}>
                    <Grid item xs={2}>
                        <img src={product?.image_url} height="100" alt="" />
                    </Grid>
                    <Grid container item xs={8}>
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
                    ${product.cost}  x  {quantity}  =  ${product.cost*quantity}
                    </Grid>
                </Grid>
        </div>
    )
}


export default CartItem;