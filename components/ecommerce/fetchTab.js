import React, { useEffect, useState } from "react";
import { server } from "../../config/index";
import FeaturedTab from "./../elements/FeaturedTab";
import NewArrivalTab from "./../elements/NewArrivalTab";
import TrendingTab from "./../elements/TrendingTab";
import Link from "next/link";

function FeatchTab() {
  const [active, setActive] = useState(0);
  const [featured, setFeatured] = useState([]);
  const [trending, setTrending] = useState([]);
  const [newArrival, setNewArrival] = useState([]);

  const featuredProduct = async () => {
    const request = await fetch(`${server}/static/product.json`);
    const allProducts = await request.json();
    const featuedItem = allProducts.filter((item) => item.featured);
    setFeatured(featuedItem);
    setActive("1");
  };

  const trendingProduct = async () => {
    const request = await fetch(`${server}/static/product.json`);
    const allProducts = await request.json();
    const trendingItem = allProducts.filter((item) => item.trending);
    setTrending(trendingItem);
    setActive("2");
  };
  const newArrivalProduct = async () => {
    const request = await fetch(`${server}/static/product.json`);
    const allProducts = await request.json();
    const newArrivalItem = allProducts.sort(function (a, b) {
      return a.created > b.created ? -1 : 1;
    });
    setNewArrival(newArrivalItem);
    setActive("3");
  };

  useEffect(() => {
    featuredProduct();
  }, []);

  return (
    <>
      {/* <div className="tab-header">
        <h3>Popular Products</h3>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className={active === "1" ? "nav-link active" : "nav-link"}
              onClick={featuredProduct}
            >
              Featured
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={active === "2" ? "nav-link active" : "nav-link"}
              onClick={trendingProduct}
            >
              Popular
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={active === "3" ? "nav-link active" : "nav-link"}
              onClick={newArrivalProduct}
            >
              New added
            </button>
          </li>
        </ul>
      </div> */}
      <div className="section-title mb-20">
        <div className="title tab-header">
          <h3>Featured Categories</h3>
          <ul className="list-inline nav nav-tabs links">
            <li className="list-inline-item nav-item">
              <a
                className={active === 0 ? "nav-link active" : "nav-link"}
                onClick={() => setActive(0)}
              >
                All
              </a>
            </li>
            <li className="list-inline-item nav-item">
              <a
                className={active === 1 ? "nav-link active" : "nav-link"}
                onClick={() => setActive(1)}
              >
                Cake & Milk
              </a>
            </li>
            <li className="list-inline-item nav-item">
              <a
                className={active === 2 ? "nav-link active" : "nav-link"}
                onClick={() => setActive(2)}
              >
                Coffes & Teas
              </a>
            </li>
            <li className="list-inline-item nav-item">
              <a
                className={active === 3 ? "nav-link active" : "nav-link"}
                onClick={() => setActive(3)}
              >
                Pet Foods
              </a>
            </li>
            <li className="list-inline-item nav-item">
              <a
                className={active === 4 ? "nav-link active" : "nav-link"}
                onClick={() => setActive(4)}
              >
                Vegetables
              </a>
            </li>
          </ul>
        </div>
        <div
          className="slider-arrow slider-arrow-2 flex-right carausel-6-columns-arrow"
          id="carausel-6-columns-arrows"
        ></div>
      </div>

      <div className="tab-content wow fadeIn animated">
        <div className="tab-pane fade show active">
          <div className="product-grid-5 row">
            <FeaturedTab products={featured} />
          </div>
        </div>

        {/* <div
          className={
            active === 1 ? "tab-pane fade show active" : "tab-pane fade"
          }
        >
          <div className="product-grid-4 row">
            <TrendingTab products={trending} />
          </div>
        </div>
        <div
          className={
            active === 2 ? "tab-pane fade show active" : "tab-pane fade"
          }
        >
          <div className="product-grid-4 row">
            <NewArrivalTab products={newArrival} />
          </div>
        </div> */}
      </div>
      <div className="tab-header">
        <h3>
          <Link href="/products/shop-grid-right">
            <a className="view-more d-none d-md-flex">
              View More<i className="fi-rs-angle-double-small-right"></i>
            </a>
          </Link>
        </h3>
      </div>
    </>
  );
}
export default FeatchTab;
