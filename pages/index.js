import DefaultLayaout from '../components/DefaultLayout'
import {
    withStyles,
    Button,
    Container,
    Grid,
    Typography,
    Card,
    CardContent,
    CardMedia,
} from '@material-ui/core'
import Link from 'next/link'

const useStyles = theme => ({
    container: { marginTop: theme.spacing(5) }
});

const Home = props => {
    const { classes } = props
    return (
        <DefaultLayaout>
            <Container maxWidth="sm" className={classes.container}>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    SuperShop
                </Typography>
                <Card className={classes.root}>
                    <CardContent className={classes.content}>
                        <div className={classes.thumbnailContainer}>
                            <CardMedia
                                component="img"
                                alt=''
                                image={`static/images/homepage-box-image.jpg`}
                                className={classes.thumbnail}
                                title="Contemplative Reptile"
                            />
                        </div>
                        {/*  <Typography gutterBottom component="h2" className={classes.name}>
                            {product.title}
                        </Typography>
                         <Typography variant="body2" color="textSecondary" component="p">
                            {product.desc}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {product.price}
                        </Typography> */}
                    </CardContent>
                </Card>
                <div className={classes.heroButtons}>
                    <Grid container spacing={2} justify="center">
                        <Grid item>
                            <Link href="/boutique" passhref>
                                <Button variant="contained" component="a">
                                    La Boutique
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </div>
            </Container>

        </DefaultLayaout>
    )
}
export default withStyles(useStyles)(Home)