import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [ { basket, user}, dispatch ] = useStateValue();
    const handleAuthentication = () => {
        if(user){
            auth.signOut();
        }
    }

    return (
        <div className="header">
        <Link to="/">
            <img 
                className="header__logo" 
                src ="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            />  
            </Link>           
            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
            <Link to= { !user && "/login"} >
                    <div onClick= { handleAuthentication} className="header__option">
                        <span className="header__optionLine1">
                            Hello {
                                user ? user.email : 'Guest'
                            }
                        </span>
                        <span className="header__optionLine2">{
                            user ? 'Sign Out' : 'Sign In'
                        }
                        </span>
                    </div>
            </Link>
                    <div className="header__option">
                        <span className="header__optionLine1">
                            returns
                        </span>
                        <span className="header__optionLine2">
                            & Orders
                        </span>
                    </div>

                    <div className="header__option">
                        <span className="header__optionLine1">
                            Your
                        </span>
                        <span className="header__optionLine2">
                            Prime
                        </span>
                    </div>
                    <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLine2 header__basketCount">{basket?.length}</span>
                    </div>
                    </Link>

                </div>
        </div>
    );
}

export default Header
