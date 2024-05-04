import React from "react";
import './NavBar.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="nav">
            <Link href='/'>
                <div className="logo-holder">
                    <img className="logo" src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c14f69ea-b533-4263-8be6-4977e2869356/datwqpt-c0d1482e-cce8-4fba-80fb-666a66f50aa9.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2MxNGY2OWVhLWI1MzMtNDI2My04YmU2LTQ5NzdlMjg2OTM1NlwvZGF0d3FwdC1jMGQxNDgyZS1jY2U4LTRmYmEtODBmYi02NjZhNjZmNTBhYTkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.odRbg8CcXNmBWYd8W01QW52VbiUlxVVMkATEjTa5l2o'></img>
                    <h3>origatune merchs</h3>
                </div>
            </Link>

            <div className="nav-links">
                <div className="link search-container">
                    <input type="text" id="searchInput" placeholder="Search..." />
                    <button  id="searchBtn">
                        <SearchIcon />
                    </button>
                </div>

                <Link href='/shop'>
                    <div className="link">
                        <p>Shop</p>
                    </div>
                </Link>
                
                <Link href='/aboutus'>                    
                    <div className="link">
                        <p>About Us</p>
                    </div>
                </Link>
                
                <Link href='/cart'>  
                    <div className="link">
                        <ShoppingCartIcon />
                    </div>              
                </Link>  
                <Link href='/account'>  
                    <div className="link">
                        <AccountCircleIcon />
                    </div>            
                </Link>  
            </div>
        </nav>
    );
}

function search() {
    // Handle search functionality
}
