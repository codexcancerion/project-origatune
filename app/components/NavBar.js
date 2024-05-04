"use client"
import React, { useState, useEffect } from "react";
import './NavBar.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import Link from "next/link";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
                setIsOpen(false); // Ensures that isOpen is reset when resizing to a large screen
            }
        };

        window.addEventListener('resize', handleResize);

        // Check initial size
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav className="nav">
            <Link href='/'>
                <div className="logo-holder">
                    <img className="logo" src='/img/emblems/origatune-emblem.png' alt="Logo" />
                    <h3 className="mobile-hidden">Origatune Merchandise</h3>
                </div>
            </Link>

            <button className="menu-button" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                <MenuIcon />
            </button>

            {isMobile ? (
                <div className={`nav-links ${isOpen ? "open" : ""}`}>
                    <div className="link search-container">
                        <input type="text" id="searchInput" placeholder="Search..." />
                        <button id="searchBtn">
                            <SearchIcon />
                        </button>
                    </div>

                    <Link href='/shop'><div className="link">Shop</div></Link>
                    <Link href='/aboutus'><div className="link">About Us</div></Link>
                    <Link href='/cart'><div className="link"><ShoppingCartIcon /></div></Link>
                    <Link href='/account'><div className="link"><AccountCircleIcon /></div></Link>
                </div>
            ) : (
                <div className="nav-links">
                    <div className="link search-container">
                        <input type="text" id="searchInput" placeholder="Search..." />
                        <button id="searchBtn">
                            <SearchIcon />
                        </button>
                    </div>

                    <Link href='/shop'><div className="link">Shop</div></Link>
                    <Link href='/aboutus'><div className="link">About Us</div></Link>
                    <Link href='/cart'><div className="link"><ShoppingCartIcon /></div></Link>
                    <Link href='/account'><div className="link"><AccountCircleIcon /></div></Link>
                </div>
            )}
        </nav>
    );
}
