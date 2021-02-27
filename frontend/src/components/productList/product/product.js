import React from 'react';
import './product.css'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme)=>({
    root:{
        marginBottom:theme.spacing(),
    },
    product:{
        padding: theme.spacing(3),
        borderBottom:'1px solid grey'
    },
    link: {
        
        color:"inherit",
        textDecoration: "None",
        "&:hover": {
            color:"inherit",
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
}))

function Product({ product }) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Link to={"/products/"+product.id} className={classes.link}>
                <Grid container className={classes.product}>
                    <Grid item xs={2}>
                        <img src={product?.image_url} height="100" alt="" />
                    </Grid>
                    <Grid container item xs={10}>
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
                </Grid>
            </Link>
        </div>
    )
}

export default Product;