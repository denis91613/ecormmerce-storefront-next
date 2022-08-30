import Link from "next/link";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Search from "../ecommerce/Search";

const Header = ({
  totalCartItems,
  totalCompareItems,
  toggleClick,
  totalWishlistItems,
  headerStyle,
}) => {
  const [isToggled, setToggled] = useState(false);
  const [scroll, setScroll] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [selMenu, setSelMenu] = useState(2);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY >= 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });

  const handleToggle = () => setToggled(!isToggled);

  return (
    <>
      <header className={`header-area ${headerStyle} header-height-2`}>
        <div className="header-top header-top-ptb-1 d-none d-lg-block">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-4 col-lg-4">
                <div className="header-info">
                  <ul>
                    <li>
                      <Link href="/page-contact">
                        <a>About Us</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/page-account">
                        <a>My Account</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop-wishlist">
                        <a>Wishlist</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop-order">
                        <a>Order Tracking</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4">
                <div className="text-center">
                  <div id="news-flash" className="d-inline-block">
                    <ul>
                      <li>
                        100% Secure delivery without contacting the courier
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4">
                <div className="header-info header-info-right">
                  <ul>
                    <li>
                      Need help? Call Us:{" "}
                      <strong className="text-brand"> +91-888888888</strong>
                    </li>
                    <li>
                      <Link href="/#">
                        <a className="language-dropdown-active">
                          English
                          <i className="fi-rs-angle-small-down"></i>
                        </a>
                      </Link>
                      <ul className="language-dropdown">
                        <li>
                          <Link href="/#">
                            <a>
                              <img
                                src="/assets/imgs/theme/flag-fr.png"
                                alt=""
                              />
                              Français
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/#">
                            <a>
                              <img
                                src="/assets/imgs/theme/flag-dt.png"
                                alt=""
                              />
                              Deutsch
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/#">
                            <a>
                              <img
                                src="/assets/imgs/theme/flag-ru.png"
                                alt=""
                              />
                              Pусский
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/#">
                        <a className="language-dropdown-active">
                          USD
                          <i className="fi-rs-angle-small-down"></i>
                        </a>
                      </Link>
                      <ul
                        className="language-dropdown"
                        style={{ left: "-70px" }}
                      >
                        <li>
                          <Link href="/#">
                            <a>
                              <img
                                src="/assets/imgs/theme/flag-fr.png"
                                alt=""
                              />
                              Français
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/#">
                            <a>
                              <img
                                src="/assets/imgs/theme/flag-dt.png"
                                alt=""
                              />
                              Deutsch
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/#">
                            <a>
                              <img
                                src="/assets/imgs/theme/flag-ru.png"
                                alt=""
                              />
                              Pусский
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-middle header-middle-ptb-1 d-none d-lg-block">
          <div className="container">
            <div className="header-wrap">
              <div className="logo logo-width-1">
                <Link href="/">
                  <a>
                    <img src="/assets/imgs/theme/SVGLogo.svg" alt="logo" />
                  </a>
                </Link>
              </div>
              <div className="header-right">
                <div className="search-style-2">
                  <Search />
                </div>
                <div className="header-action-right">
                  <div className="header-action-2">
                    <div className="header-action-icon-2">
                      <Link href="/shop-compare">
                        <a>
                          <img
                            className="svgInject"
                            alt="Nest"
                            src="/assets/imgs/theme/icons/icon-compare.svg"
                          />
                          <span className="pro-count blue">
                            {totalCompareItems}
                          </span>
                        </a>
                      </Link>
                      <Link href="/shop-compare">
                        <a>
                          <span className="lable ml-0 ps-1">Compare</span>
                        </a>
                      </Link>
                    </div>
                    <div className="header-action-icon-2">
                      <Link href="/shop-wishlist">
                        <a>
                          <img
                            className="svgInject"
                            alt="Wishlist"
                            src="/assets/imgs/theme/icons/icon-heart.svg"
                          />
                          <span className="pro-count blue">
                            {totalWishlistItems}
                          </span>
                        </a>
                      </Link>
                      <Link href="/shop-wishlist">
                        <a>
                          <span className="lable ps-1">Wishlist</span>
                        </a>
                      </Link>
                    </div>
                    <div className="header-action-icon-2">
                      <a className="mini-cart-icon">
                        <img
                          alt="Cart"
                          src="/assets/imgs/theme/icons/icon-cart.svg"
                        />
                        <span className="pro-count blue">{totalCartItems}</span>
                      </a>
                      <a>
                        <span className="lable ps-1">Cart</span>
                      </a>
                      <div className="cart-dropdown-wrap cart-dropdown-hm2">
                        <ul>
                          <li>
                            <div className="shopping-cart-img">
                              <Link href="/products/shop-grid-right">
                                <a>
                                  <img
                                    alt="Nest"
                                    src="/assets/imgs/shop/thumbnail-3.jpg"
                                  />
                                </a>
                              </Link>
                            </div>
                            <div className="shopping-cart-title">
                              <h4>
                                <Link href="/products/shop-grid-right">
                                  <a>Daisy Casual Bag</a>
                                </Link>
                              </h4>
                              <h4>
                                <span>1 × </span>$800.00
                              </h4>
                            </div>
                            <div className="shopping-cart-delete">
                              <a>
                                <i className="fi-rs-cross-small"></i>
                              </a>
                            </div>
                          </li>
                        </ul>
                        <div className="shopping-cart-footer">
                          <div className="shopping-cart-total">
                            <h4>
                              Total <span>$4000.00</span>
                            </h4>
                          </div>
                          <div className="shopping-cart-button">
                            <Link href="/shop-cart">
                              <a className="outline">View cart</a>
                            </Link>
                            <Link href="/shop-checkout">
                              <a>Checkout</a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="header-action-icon-2">
                      <a>
                        <img
                          className="svgInject"
                          alt="Account"
                          src="/assets/imgs/theme/icons/icon-user.svg"
                        />
                      </a>
                      <a>
                        <span className="lable ml-0 ps-1">Account</span>
                      </a>
                      <div className="cart-dropdown-wrap cart-dropdown-hm2 account-dropdown">
                        <ul>
                          <li>
                            <Link href="/page-account">
                              <a>
                                <i className="fi fi-rs-user mr-10"></i>My
                                Account
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/shop-order">
                              <a>
                                <i className="fi fi-rs-location-alt mr-10"></i>
                                Order Tracking
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/page-account">
                              <a>
                                <i className="fi fi-rs-label mr-10"></i>My
                                Voucher
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/shop-wishlist">
                              <a>
                                <i className="fi fi-rs-heart mr-10"></i>My
                                Wishlist
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/page-setting">
                              <a>
                                <i className="fi fi-rs-settings-sliders mr-10"></i>
                                Setting
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/page-login">
                              <a>
                                <i className="fi fi-rs-sign-out mr-10"></i>Sign
                                out
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            scroll
              ? "header-bottom header-bottom-bg-color sticky-bar stick"
              : "header-bottom header-bottom-bg-color sticky-bar"
          }
        >
          <div className="container">
            <div className="header-wrap header-space-between position-relative">
              <div className="logo logo-width-1 d-block d-lg-none">
                <Link href="/">
                  <a>
                    <img src="/assets/imgs/theme/logo.svg" alt="logo" />
                  </a>
                </Link>
              </div>
              <div className="header-nav d-none d-lg-flex">
                <div className="main-categori-wrap d-none d-lg-block">
                  <a
                    className="categori-button-active"
                    onClick={() => setShowAll(!showAll)}
                  >
                    <span className="fi-rs-apps"></span>
                    Browse All Categories
                    <span className="ps-1 pt-1">
                      <i className="fi-rs-angle-small-down"></i>
                    </span>
                  </a>
                  {showAll && (
                    <div className="categories-dropdown-wrap categories-dropdown-active-large font-heading">
                      <div className="d-flex categori-dropdown-inner">
                        <ul>
                          <li>
                            <a href="shop-grid-right.html">
                              <img
                                src="/assets/imgs/theme/icons/category-1.svg"
                                alt=""
                              />
                              Milks and Dairies
                            </a>
                          </li>
                          <li>
                            <a href="shop-grid-right.html">
                              <img
                                src="/assets/imgs/theme/icons/category-2.svg"
                                alt=""
                              />
                              Clothing & beauty
                            </a>
                          </li>
                          <li>
                            <a href="shop-grid-right.html">
                              <img
                                src="/assets/imgs/theme/icons/category-3.svg"
                                alt=""
                              />
                              Pet Foods & Toy
                            </a>
                          </li>
                          <li>
                            <a href="shop-grid-right.html">
                              <img
                                src="/assets/imgs/theme/icons/category-4.svg"
                                alt=""
                              />
                              Baking material
                            </a>
                          </li>
                          <li>
                            <a href="shop-grid-right.html">
                              <img
                                src="/assets/imgs/theme/icons/category-5.svg"
                                alt=""
                              />
                              Fresh Fruit
                            </a>
                          </li>
                        </ul>
                        <ul className="end">
                          <li>
                            <a href="shop-grid-right.html">
                              <img
                                src="/assets/imgs/theme/icons/category-6.svg"
                                alt=""
                              />
                              Wines & Drinks
                            </a>
                          </li>
                          <li>
                            <a href="shop-grid-right.html">
                              <img
                                src="/assets/imgs/theme/icons/category-7.svg"
                                alt=""
                              />
                              Fresh Seafood
                            </a>
                          </li>
                          <li>
                            <a href="shop-grid-right.html">
                              <img
                                src="/assets/imgs/theme/icons/category-8.svg"
                                alt=""
                              />
                              Fast food
                            </a>
                          </li>
                          <li>
                            <a href="shop-grid-right.html">
                              <img
                                src="/assets/imgs/theme/icons/category-9.svg"
                                alt=""
                              />
                              Vegetables
                            </a>
                          </li>
                          <li>
                            <a href="shop-grid-right.html">
                              <img
                                src="/assets/imgs/theme/icons/category-10.svg"
                                alt=""
                              />
                              Bread and Juice
                            </a>
                          </li>
                        </ul>
                      </div>
                      {showMore && (
                        <div className="more_slide_open">
                          <div className="d-flex categori-dropdown-inner">
                            <ul>
                              <li>
                                <a href="shop-grid-right.html">
                                  <img
                                    src="/assets/imgs/theme/icons/icon-1.svg"
                                    alt=""
                                  />
                                  Milks and Dairies
                                </a>
                              </li>
                              <li>
                                <a href="shop-grid-right.html">
                                  <img
                                    src="/assets/imgs/theme/icons/icon-2.svg"
                                    alt=""
                                  />
                                  Clothing & beauty
                                </a>
                              </li>
                            </ul>
                            <ul className="end">
                              <li>
                                <a href="shop-grid-right.html">
                                  <img
                                    src="/assets/imgs/theme/icons/icon-3.svg"
                                    alt=""
                                  />
                                  Wines & Drinks
                                </a>
                              </li>
                              <li>
                                <a href="shop-grid-right.html">
                                  <img
                                    src="/assets/imgs/theme/icons/icon-4.svg"
                                    alt=""
                                  />
                                  Fresh Seafood
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}
                      <div className="more_categories">
                        <span
                          className="icon"
                          onClick={() => setShowMore(!showMore)}
                        ></span>
                        <span className="heading-sm-1">Show more...</span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block">
                  <nav>
                    <ul>
                      <li className="hot-deals">
                        <Link href="/shop-grid-right">
                          <img
                            src="/assets/imgs/theme/icons/icon-hot.svg"
                            alt="hot deals"
                          />
                        </Link>
                        <Link href="/products/shop-grid-right">
                          <a
                            className={selMenu === 1 ? "active" : ""}
                            onClick={() => setSelMenu(1)}
                          >
                            Hot Deals
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/">
                          <a
                            className={selMenu === 1 ? "active" : ""}
                            onClick={() => setSelMenu(2)}
                          >
                            Home
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/page-about">
                          <a
                            className={selMenu === 3 ? "active" : ""}
                            onClick={() => setSelMenu(3)}
                          >
                            About
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/products/shop-grid-right">
                          <a
                            className={selMenu === 4 ? "active" : ""}
                            onClick={() => setSelMenu(4)}
                          >
                            Shop
                          </a>
                        </Link>
                      </li>
                      <li className="position-static">
                        <a>
                          Mega menu
                          <i className="fi-rs-angle-down"></i>
                        </a>
                        <ul className="mega-menu">
                          <li className="sub-mega-menu sub-mega-menu-width-22">
                            <Link href="/#">
                              <a className="menu-title">Women's Fashion</a>
                            </Link>
                            <ul>
                              <li>
                                <Link href="/products/shop-grid-right">
                                  <a>Dresses</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/products/shop-grid-right">
                                  <a>Blouses & Shirts</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/products/shop-grid-right">
                                  <a>Hoodies & Sweatshirts</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/products/shop-grid-right">
                                  <a>Wedding Dresses</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/products/shop-grid-right">
                                  <a>Prom Dresses</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/products/shop-grid-right">
                                  <a>Cosplay Costumes</a>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="sub-mega-menu sub-mega-menu-width-22">
                            <Link href="/#">
                              <a className="menu-title">Men's Fashion</a>
                            </Link>
                            <ul>
                              <li>
                                <Link href="/products/shop-grid-right">
                                  <a>Jackets</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/products/shop-grid-right">
                                  <a>Casual Faux Leather</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/products/shop-grid-right">
                                  <a>Genuine Leather</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/products/shop-grid-right">
                                  <a>Casual Pants</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/products/shop-grid-right">
                                  <a>Sweatpants</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/products/shop-grid-right">
                                  <a>Harem Pants</a>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="sub-mega-menu sub-mega-menu-width-22">
                            <Link href="/#">
                              <a className="menu-title">Technology</a>
                            </Link>
                            <ul>
                              <li>
                                <Link href="/products/shop-grid-right">
                                  <a>Gaming Laptops</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/products/shop-grid-right">
                                  <a>Ultraslim Laptops</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/products/shop-grid-right">
                                  <a>Tablets</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/products/shop-grid-right">
                                  <a>Laptop Accessories</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/products/shop-grid-right">
                                  <a>Tablet Accessories</a>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="sub-mega-menu sub-mega-menu-width-34">
                            <div className="menu-banner-wrap">
                              <Link href="/products/shop-grid-right">
                                <a>
                                  <img
                                    src="/assets/imgs/banner/menu-banner.jpg"
                                    alt="Evara"
                                  />
                                </a>
                              </Link>
                              <div className="menu-banner-content">
                                <h4>Hot deals</h4>
                                <h3>
                                  Don't miss
                                  <br />
                                  Trending
                                </h3>
                                <div className="menu-banner-price">
                                  <span className="new-price text-success">
                                    Save to 50%
                                  </span>
                                </div>
                                <div className="menu-banner-btn">
                                  <Link href="/products/shop-grid-right">
                                    <a>Shop now</a>
                                  </Link>
                                </div>
                              </div>
                              <div className="menu-banner-discount">
                                <h3>
                                  <span>35%</span>
                                  off
                                </h3>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link href="/blog-category-grid">
                          <a>
                            Blog
                            <i className="fi-rs-angle-down"></i>
                          </a>
                        </Link>
                        <ul className="sub-menu">
                          <li>
                            <Link href="/blog-category-grid">
                              <a>Blog Category Grid</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/blog-category-list">
                              <a>Blog Category List</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/blog-category-big">
                              <a>Blog Category Big</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/blog-category-fullwidth">
                              <a>Blog Category Wide</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/#">
                              <a>
                                Single Post
                                <i className="fi-rs-angle-right"></i>
                              </a>
                            </Link>
                            <ul className="level-menu level-menu-modify">
                              <li>
                                <Link href="/blog-post-left">
                                  <a>Left Sidebar</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/blog-post-right">
                                  <a>Right Sidebar</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/blog-post-fullwidth">
                                  <a>No Sidebar</a>
                                </Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link href="/#">
                          <a>
                            Pages
                            <i className="fi-rs-angle-down"></i>
                          </a>
                        </Link>
                        <ul className="sub-menu">
                          <li>
                            <Link href="/page-about">
                              <a>About Us</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/page-contact">
                              <a>Contact</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/page-account">
                              <a>My Account</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/page-login">
                              <a>Login</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/page-register">
                              <a>Regiser</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/page-purchase-guide">
                              <a>Purchase Guide</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/page-privacy-policy">
                              <a>Privacy Policy</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/page-terms">
                              <a>Terms of Service</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/page-404">
                              <a>404 Page</a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link href="/page-contact">
                          <a>Contact</a>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="hotline d-none d-lg-flex">
                <img
                  src="/assets/imgs/theme/icons/icon-headphone.svg"
                  alt="hotline"
                />
                <p className="ps-2">
                  +91- 88888888<span>24/7 Support Center</span>
                </p>
              </div>
              <p className="mobile-promotion">
                Happy
                <span className="text-brand">Mother's Day</span>. Big Sale Up to
                40%
              </p>
              <div className="header-action-right d-block d-lg-none">
                <div className="header-action-2">
                  <div className="header-action-icon-2">
                    <Link href="/shop-wishlist">
                      <a>
                        <img
                          alt="Evara"
                          src="/assets/imgs/theme/icons/icon-compare.svg"
                        />
                        <span className="pro-count white">
                          {totalCompareItems}
                        </span>
                      </a>
                    </Link>
                  </div>
                  <div className="header-action-icon-2">
                    <Link href="/shop-wishlist">
                      <a>
                        <img
                          alt="Evara"
                          src="/assets/imgs/theme/icons/icon-heart.svg"
                        />
                        <span className="pro-count white">
                          {totalWishlistItems}
                        </span>
                      </a>
                    </Link>
                  </div>
                  <div className="header-action-icon-2">
                    <Link href="/shop-cart">
                      <a className="mini-cart-icon">
                        <img
                          alt="Evara"
                          src="/assets/imgs/theme/icons/icon-cart.svg"
                        />
                        <span className="pro-count white">
                          {totalCartItems}
                        </span>
                      </a>
                    </Link>
                    <div className="cart-dropdown-wrap cart-dropdown-hm2">
                      <ul>
                        <li>
                          <div className="shopping-cart-img">
                            <Link href="/products/shop-grid-right">
                              <a>
                                <img
                                  alt="Evara"
                                  src="/assets/imgs/shop/thumbnail-3.jpg"
                                />
                              </a>
                            </Link>
                          </div>
                          <div className="shopping-cart-title">
                            <h4>
                              <Link href="/products/shop-grid-right">
                                <a>Plain Striola Shirts</a>
                              </Link>
                            </h4>
                            <h3>
                              <span>1 × </span>
                              $800.00
                            </h3>
                          </div>
                          <div className="shopping-cart-delete">
                            <Link href="/#">
                              <a>
                                <i className="fi-rs-cross-small"></i>
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="shopping-cart-img">
                            <Link href="/products/shop-grid-right">
                              <a>
                                <img
                                  alt="Evara"
                                  src="/assets/imgs/shop/thumbnail-4.jpg"
                                />
                              </a>
                            </Link>
                          </div>
                          <div className="shopping-cart-title">
                            <h4>
                              <Link href="/products/shop-grid-right">
                                <a>Macbook Pro 2022</a>
                              </Link>
                            </h4>
                            <h3>
                              <span>1 × </span>
                              $3500.00
                            </h3>
                          </div>
                          <div className="shopping-cart-delete">
                            <Link href="/#">
                              <a>
                                <i className="fi-rs-cross-small"></i>
                              </a>
                            </Link>
                          </div>
                        </li>
                      </ul>
                      <div className="shopping-cart-footer">
                        <div className="shopping-cart-total">
                          <h4>
                            Total
                            <span>$383.00</span>
                          </h4>
                        </div>
                        <div className="shopping-cart-button">
                          <Link href="/shop-cart">
                            <a>View cart</a>
                          </Link>
                          <Link href="/shop-checkout">
                            <a>Checkout</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="header-action-icon-2 d-block d-lg-none">
                    <div
                      className="burger-icon burger-icon-white"
                      onClick={toggleClick}
                    >
                      <span className="burger-icon-top"></span>
                      <span className="burger-icon-mid"></span>
                      <span className="burger-icon-bottom"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

const mapStateToProps = (state) => ({
  totalCartItems: state.cart.length,
  totalCompareItems: state.compare.items.length,
  totalWishlistItems: state.wishlist.items.length,
});

export default connect(mapStateToProps, null)(Header);
