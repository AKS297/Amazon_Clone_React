import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';






function Header() {
    const [{basket,user},dispatch]=useStateValue();
    console.log(basket);

    const handleAuthentication=()=>{
    auth.signOut();
    }
    return (
        <nav className='header'>
            <Link to='/'>
                {/* Amazon Logo   */}
                <img className='header__logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='logo' />
            </Link>
            {/* search bar */}

            <div className='header__search'>
                <input type='text' className='header_searchinput' />
                <SearchIcon className='header__searchicon' />

            </div>
            {/*Header lnks */}
            <div className='header__nav'>
            <Link to={!user &&'/login'} className='header__link'>
                <div onClick={handleAuthentication} className='header__option'>
                <span className='header__optionLineOne'>Hello {!user ? 'Guest' : user.email}</span>
                <span className='header__optionLineTWo'>{user ? 'Sign Out' : 'Sign In'}</span>
                </div>
            </Link>
            
            <Link to='/' className='header__link'>
                <div className='header__option'>
                <span className='header__optionLineOne'>Returns</span>
                <span className='header__optionLineTwo'>& Orders</span>
                </div>
            </Link>

            <Link to='/' className='header__link'>
                <div className='header__option'>
                <span className='header__optionLineOne'>Your</span>
                <span className='header__optionLineTwo'>Prime</span>
                </div>
            </Link>

            <Link to='/checkout' className='header__link'>
             <div className='header__optionBasket'>
             <ShoppingBasketIcon />
              <span className='header__optionLineTwo header_BasketCount'>{basket?.length}</span>
             </div>
            </Link>
            </div>
        </nav>
    )
}

export default Header
