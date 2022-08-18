import { createContext, Component } from 'react';
const GlobalContext = createContext();
import PropTypes from 'prop-types';

export class GlobalProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open_interstitial: false,
            cart: [],
            wishlist: [],
            pushObject: this.pushObject.bind(this),
            getCart: this.getCart.bind(this),
            addProductToCart: this.addProductToCart.bind(this),
            addProductToWishlist: this.addProductToWishlist.bind(this),
            removeProductToCart: this.removeProductToCart.bind(this),
            removeProductToWishlist: this.removeProductToWishlist.bind(this),
        }
    }

    pushObject(key, value, callback) {
        this.setState({ [key]: value }, callback);
    }

    getCart() {
        const sessionStorageCart = JSON.parse(sessionStorage.getItem('cart')); // null if not exist

        if (sessionStorageCart !== null) {
            this.setState({ cart: sessionStorageCart });
        }else {
            this.setState({ cart: [] });
        }
    }

    addProductToCart(product, callback) {
        const newCart = [...this.state.cart]
        newCart.push(product)
        this.setState({ cart: newCart }, () => {
            sessionStorage.setItem('cart', JSON.stringify(newCart));

            if (typeof callback !== 'undefined') callback();
        });
    }

    addProductToWishlist(product, callback) {
        const newWishlist = [...this.state.wishlist]
        newWishlist.push(product)
        this.setState({ wishlist: newWishlist }, () => {
            sessionStorage.setItem('wishlist', JSON.stringify(newWishlist));

            if (typeof callback !== 'undefined') callback();
        });
    }

    removeProductToCart(id, callback) {
        const newCart = [...this.state.cart]
        const ProductIndex = newCart.findIndex(p => p.id === id);
        console.log({ProductIndex, newCart, id})
        newCart.splice(ProductIndex, 1)
        this.setState({ cart: newCart }, () => {
            sessionStorage.setItem('cart', JSON.stringify(newCart));
            if (typeof callback !== 'undefined') callback();
        });
    }

    removeProductToWishlist(id, callback) {
        const newWishlist = [...this.state.wishlist]
        const ProductIndex = newWishlist.findIndex(p => p.id === id);
        console.log({ProductIndex, newWishlist, id})
        newWishlist.splice(ProductIndex, 1)
        this.setState({ wishlist: newWishlist }, () => {
            sessionStorage.setItem('wishlist', JSON.stringify(newWishlist));
            if (typeof callback !== 'undefined') callback();
        });
    }

    componentDidMount() {
        this.getCart()
    }

    render() {
        const { children } = this.props;

        return (
            <GlobalContext.Provider value={{ ...this.state }}>
                {children}
            </GlobalContext.Provider>
        );
    }
}

GlobalProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const GlobalConsumer = GlobalContext.Consumer;
export default GlobalContext;
