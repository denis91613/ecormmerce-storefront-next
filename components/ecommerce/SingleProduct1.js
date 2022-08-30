import Link from "next/link";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "../../redux/action/cart";
import { addToCompare } from "../../redux/action/compareAction";
import { openQuickView } from "../../redux/action/quickViewAction";
import { addToWishlist } from "../../redux/action/wishlistAction";
import Loader from "../elements/Loader";

const SingleProduct1 = ({
  product,
  addToCart,
  addToCompare,
  addToWishlist,
  openQuickView,
}) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const handleCart = (product) => {
    addToCart(product);
    toast.success("Add to Cart !");
  };

  const handleCompare = (product) => {
    addToCompare(product);
    toast.success("Add to Compare !");
  };

  const handleWishlist = (product) => {
    addToWishlist(product);
    toast.success("Add to Wishlist !");
  };
  return (
    <>
      {!loading ? (
        <>
          <div className="product-cart-wrap mb-30">
            <div className="product-img-action-wrap">
              <div className="product-img product-img-zoom">
                <Link href="/products/[slug]" as={`/products/${product.slug}`}>
                  <a>
                    <img
                      className="default-img"
                      src={product.images[0].img}
                      alt=""
                    />
                    <img
                      className="hover-img"
                      src={product.images[1].img}
                      alt=""
                    />
                  </a>
                </Link>
              </div>
              <div className="product-action-1">
                <a
                  aria-label="Add To Wishlist"
                  className="action-btn hover-up"
                  onClick={(e) => handleWishlist(product)}
                >
                  <i className="fi-rs-heart"></i>
                </a>
                <a
                  aria-label="Compare"
                  className="action-btn hover-up"
                  onClick={(e) => handleCompare(product)}
                >
                  <i className="fi-rs-shuffle"></i>
                </a>
                <a
                  aria-label="Quick view"
                  className="action-btn hover-up"
                  data-bs-toggle="modal"
                  onClick={(e) => openQuickView(product)}
                >
                  <i className="fi-rs-eye"></i>
                </a>
              </div>

              <div className="product-badges product-badges-position product-badges-mrg">
                {product.trending ? <span className="hot">Hot</span> : null}
                {product.created ? <span className="new">New</span> : null}
                {product.totalSell > 100 ? (
                  <span className="best">Best Sell</span>
                ) : null}
                {product.discount.isActive ? (
                  <span className="sale">Sale</span>
                ) : null}
                {product.discount.percentage >= 5 ? (
                  <span className="hot">{product.discount.percentage}%</span>
                ) : null}
              </div>
            </div>
            <div className="product-content-wrap">
              <div className="product-category">
                <Link href="/products">
                  <a>{product.brand}</a>
                </Link>
              </div>
              <h2>
                <Link href="/products/[slug]" as={`/products/${product.slug}`}>
                  <a>{product.title}</a>
                </Link>
              </h2>
              <div className="product-rate-cover">
                <div className="product-rate d-inline-block">
                  <div
                    className="product-rating"
                    style={{ width: "90%" }}
                  ></div>
                </div>
                {/* <span>{product.ratingScore}%</span> */}
                <span className="font-small ml-5 text-muted"> (4.0)</span>
              </div>
              <div className="product-card-bottom">
                <div className="product-price">
                  <span>${product.price} </span>
                  <span className="old-price">
                    {product.oldPrice ? `$ ${product.oldPrice}` : null}
                  </span>
                  <span className="old-price">$32.8</span>
                </div>
                {/* <div className="add-cart">
                  <a className="add" onClick={(e) => handleCart(product)}>
                    <i className="fi-rs-shopping-cart mr-5"></i>Add{" "}
                  </a>
                </div> */}
              </div>
              <div className="sold mt-15 mb-15">
                <div className="progress mb-5" style={{ height: "5px" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "50%", height: "5px" }}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <span className="font-xs text-heading"> Sold: 90/120</span>
              </div>
              <a
                className="btn w-100 hover-up"
                onClick={(e) => handleCart(product)}
              >
                <i className="fi-rs-shopping-cart mr-5"></i>Add To Cart
              </a>
            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

const mapDispatchToProps = {
  addToCart,
  addToCompare,
  addToWishlist,
  openQuickView,
};

export default connect(null, mapDispatchToProps)(SingleProduct1);
