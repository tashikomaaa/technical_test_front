import {
    Card,
    CardContent,
    CardActions,
    CardMedia,
    Typography,
    Button,
    withStyles,
    IconButton
} from '@material-ui/core'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorderRounded';
import FavoriteIcon from '@material-ui/icons/FavoriteRounded';
import { useContext } from "react";
import GlobalContext from "../../state/global-context";

const useStyles = theme => ({
    root: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    content: {
        width: "100%",
    },
    thumbnailContainer: {
        padding: theme.spacing(2),
        textAlign: "cetner",
    },
    thumbnail: {
        maxHeight: '170px',
        width: "auto",
        margin: "auto",
    },
    name: {
        fontSize: '1rem',
    }
})

const ProductCard = (props) => {
    const { classes, product } = props
    const context = useContext(GlobalContext);
    console.log(context.wishlist)
    const handleAddToCart = (e, product) => {
        context.addProductToCart(product, context.pushObject('open_interstitial', true))
    }

    const handleAddToWishlist = (e, product) => {
        context.addProductToWishlist(product)
    }
    const handleremoveProductToWishlist = (e, product) => {
        context.removeProductToWishlist(product.id)
    }
console.log(product, context.wishlist.includes(product))
    return (
        <Card className={classes.root}>
            <CardContent className={classes.content}>
                <div className={classes.thumbnailContainer}>
                    <CardMedia
                        component="img"
                        alt={product.title}
                        image={product.image}
                        className={classes.thumbnail}
                        title="Contemplative Reptile"
                    />
                </div>
                <Typography gutterBottom component="h2" className={classes.name}>
                    {product.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {product.desc}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {product.price}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton onClick={e => handleAddToCart(e, product)}>
                    <ShoppingBasketIcon color="secondary" />
                </IconButton>
                {context.wishlist.find(el => product.id === el.id)
                    ? <IconButton onClick={e => handleremoveProductToWishlist(e, product)} >
                        <FavoriteIcon color="secondary" />
                    </IconButton> : <IconButton onClick={e => handleAddToWishlist(e, product)}>
                        <FavoriteBorderIcon color="secondary" />
                    </IconButton>}
            </CardActions>
        </Card>
    )
}

export default withStyles(useStyles)(ProductCard)