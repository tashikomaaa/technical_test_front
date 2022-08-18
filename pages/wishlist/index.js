import DefaultLayaout from '../../components/DefaultLayout'
import { useContext } from 'react'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { withStyles, Container, Grid, Typography, List, ListItem, ListItemText } from '@material-ui/core'
import ProductsList from '../../components/boutique/ProductsList'
import GlobalContext from "../../state/global-context";
import Link from 'next/link'

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
        paddingLeft: 0,
    }
});

const Wishlist = props => {
    const { classes } = props
    const context = useContext(GlobalContext);
    return (
        <DefaultLayaout>
            <Container maxWidth="lg" className={classes.root}>

                <Grid container justify={'center'}>
                    <Grid item>
                        <Typography variant="h3" component="h1" className={classes.h1}>SuperShop</Typography>
                    </Grid>
                </Grid>
                <Grid container justify={'center'}>
                    <Grid item>
                        <Typography variant="h5" component="h1" className={classes.h1}>Your Wishlist</Typography>
                    </Grid>
                </Grid>
                <Grid container>

                    <Grid item xs={12} md={3}>
                        <div className={classes.filterListContainer}>
                            <Link href="/boutique" passHref>
                                <a>
                                    <Typography className={classes.title}>
                                        <ArrowBackIcon />
                                    </Typography>
                                </a>
                            </Link>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={9} className={classes.productsListContainer}>
                        <ProductsList products={context.wishlist} />
                    </Grid>

                </Grid>

            </Container>
        </DefaultLayaout>
    )
}
export default withStyles(useStyles)(Wishlist)