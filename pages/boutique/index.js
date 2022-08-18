import DefaultLayaout from '../../components/DefaultLayout'
import { withStyles, Container, Grid, Typography, List, ListItem, ListItemText } from '@material-ui/core'
import ProductsList from '../../components/boutique/ProductsList'
import { useEffect, useState } from 'react';

const useStyles = theme => ({
    root: { marginBottom: theme.spacing(3) },
    h1: {
        margin: theme.spacing(5, 0)
    },
    filterTitle: {
        backgroundColor: theme.palette.primary,
        color: theme.palette.primary.main
    },
    filterListItem: {
        paddingLeft: '1rem',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#ece4e2'
        }
    }
});

const Boutique = props => {
    const { classes } = props
    const [productsDatas, setProductsDatas] = useState([])
    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState('')
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${category !== '' ? `category/${category}` : ''}`)
            .then(res => res.json())
            .then(json => setProductsDatas(json))
        fetch('https:fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(json => setCategories(json))
    }, [category])
    return (
        <DefaultLayaout>
            <Container maxWidth="lg" className={classes.root}>

                <Grid container justify={'center'}>
                    <Grid item>
                        <Typography variant="h3" component="h1" className={classes.h1}>SuperShop</Typography>
                    </Grid>
                </Grid>

                <Grid container>

                    <Grid item xs={12} md={3}>
                        <Typography variant="h6" className={classes.filterTitle}>Catégories</Typography>
                        <div className={classes.filterListContainer}>
                            <List>
                                <ListItem onClick={() => setCategory('')} className={classes.filterListItem}>
                                    <ListItemText
                                        primary='All products'
                                    />
                                </ListItem>
                                {categories.map((cat) =>
                                    <ListItem onClick={() => setCategory(cat)} className={classes.filterListItem}>
                                        <ListItemText
                                            primary={cat}
                                        />
                                    </ListItem>
                                )}
                            </List>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={9} className={classes.productsListContainer}>
                        <ProductsList products={productsDatas} />
                    </Grid>

                </Grid>

            </Container>
        </DefaultLayaout>
    )
}
export default withStyles(useStyles)(Boutique)