import Layout from "../components/layout/Layout";

function About() {
  return (
    <>
      <Layout parent="Home" sub="Pages" subChild="About Us">
        {/* <section className="section-padding">
                    <div className="container pt-25">
                        <div className="row">
                            <div className="col-lg-6 align-self-center mb-lg-0 mb-4">
                                <h6 className="mt-0 mb-15 text-uppercase font-sm text-brand wow fadeIn animated">
                                    Our Company
                                </h6>
                                <h1 className="font-heading mb-40">
                                    We are Building The Destination For Getting
                                    Things Done
                                </h1>
                                <p>
                                    Tempus ultricies augue luctus et ut
                                    suscipit. Morbi arcu, ultrices purus dolor
                                    erat bibendum sapien metus.
                                </p>
                                <p>
                                    Tempus ultricies augue luctus et ut
                                    suscipit. Morbi arcu, ultrices purus dolor
                                    erat bibendum sapien metus. Sit mi,
                                    pharetra, morbi arcu id. Pellentesque
                                    dapibus nibh augue senectus.
                                </p>
                            </div>
                            <div className="col-lg-6">
                                <img
                                    src="assets/imgs/page/about-1.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section id="team" className="pt-25 wow fadeIn animated">
                    <div className="container">
                        <div className="row mb-50 align-items-center">
                            <div className="col-md-6">
                                <h6 className="mt-0 mb-15 text-uppercase font-sm text-brand wow fadeIn animated">
                                    Our Team
                                </h6>
                                <h2 className="mb-15 wow fadeIn animated">
                                    Top team of experts
                                </h2>
                                <p className="text-grey-3 wow fadeIn animated">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Ratione optio perferendis
                                    sequi mollitia quis autem ea cupiditate
                                    possimus!
                                </p>
                            </div>
                            <div className="col-md-6 text-md-end mt-30">
                                <a className="btn btn-outline btn-lg btn-brand-outline font-weight-bold text-brand text-hover-white border-radius-5 btn-shadow-brand hover-up">
                                    All Members
                                </a>
                            </div>
                        </div>
                        <div className="position-relative">
                            <div className="row wow fadeIn animated">
                                <div className="col-lg-3 col-md-6">
                                    <div className="blog-card border-radius-10 overflow-hidden text-center">
                                        <img
                                            src="assets/imgs/page/avatar-1.jpg"
                                            alt=""
                                            className="border-radius-10 mb-30 hover-up"
                                        />
                                        <h4 className="fw-500 mb-0">
                                            Patric Adams
                                        </h4>
                                        <p className="fw-400 text-brand mb-10">
                                            CEO & Co-Founder
                                        </p>
                                        <div className="mobile-social-icon wow fadeIn animated mb-sm-5 mb-md-0 animated">
                                            <a href="#">
                                                <img
                                                    src="assets/imgs/theme/icons/icon-facebook.svg"
                                                    alt=""
                                                />
                                            </a>
                                            <a href="#">
                                                <img
                                                    src="assets/imgs/theme/icons/icon-twitter.svg"
                                                    alt=""
                                                />
                                            </a>
                                            <a href="#">
                                                <img
                                                    src="assets/imgs/theme/icons/icon-instagram.svg"
                                                    alt=""
                                                />
                                            </a>
                                            <a href="#">
                                                <img
                                                    src="assets/imgs/theme/icons/icon-pinterest.svg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6">
                                    <div className="blog-card border-radius-10 overflow-hidden text-center">
                                        <img
                                            src="assets/imgs/page/avatar-2.jpg"
                                            alt=""
                                            className="border-radius-10 mb-30 hover-up"
                                        />
                                        <h4 className="fw-500 mb-0">
                                            Dilan Specter
                                        </h4>
                                        <p className="fw-400 text-brand mb-10">
                                            Head Engineer
                                        </p>
                                        <div className="mobile-social-icon wow fadeIn animated mb-sm-5 mb-md-0 animated">
                                            <a href="#">
                                                <img
                                                    src="assets/imgs/theme/icons/icon-facebook.svg"
                                                    alt=""
                                                />
                                            </a>
                                            <a href="#">
                                                <img
                                                    src="assets/imgs/theme/icons/icon-twitter.svg"
                                                    alt=""
                                                />
                                            </a>
                                            <a href="#">
                                                <img
                                                    src="assets/imgs/theme/icons/icon-instagram.svg"
                                                    alt=""
                                                />
                                            </a>
                                            <a href="#">
                                                <img
                                                    src="assets/imgs/theme/icons/icon-pinterest.svg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6">
                                    <div className="blog-card border-radius-10 overflow-hidden text-center">
                                        <img
                                            src="assets/imgs/page/avatar-3.jpg"
                                            alt=""
                                            className="border-radius-10 mb-30 hover-up"
                                        />
                                        <h4 className="fw-500 mb-0">Tomas Baker</h4>
                                        <p className="fw-400 text-brand mb-10">
                                            Senior Planner
                                        </p>
                                        <div className="mobile-social-icon wow fadeIn animated mb-sm-5 mb-md-0 animated">
                                            <a href="#">
                                                <img
                                                    src="assets/imgs/theme/icons/icon-facebook.svg"
                                                    alt=""
                                                />
                                            </a>
                                            <a href="#">
                                                <img
                                                    src="assets/imgs/theme/icons/icon-twitter.svg"
                                                    alt=""
                                                />
                                            </a>
                                            <a href="#">
                                                <img
                                                    src="assets/imgs/theme/icons/icon-instagram.svg"
                                                    alt=""
                                                />
                                            </a>
                                            <a href="#">
                                                <img
                                                    src="assets/imgs/theme/icons/icon-pinterest.svg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6">
                                    <div className="blog-card border-radius-10 overflow-hidden text-center">
                                        <img
                                            src="assets/imgs/page/avatar-4.jpg"
                                            alt=""
                                            className="border-radius-10 mb-30 hover-up"
                                        />
                                        <h4 className="fw-500 mb-0">
                                            Norton Mendos
                                        </h4>
                                        <p className="fw-400 text-brand mb-10">
                                            Project Manager
                                        </p>
                                        <div className="mobile-social-icon wow fadeIn animated mb-sm-5 mb-md-0 animated">
                                            <a href="#">
                                                <img
                                                    src="assets/imgs/theme/icons/icon-facebook.svg"
                                                    alt=""
                                                />
                                            </a>
                                            <a href="#">
                                                <img
                                                    src="assets/imgs/theme/icons/icon-twitter.svg"
                                                    alt=""
                                                />
                                            </a>
                                            <a href="#">
                                                <img
                                                    src="assets/imgs/theme/icons/icon-instagram.svg"
                                                    alt=""
                                                />
                                            </a>
                                            <a href="#">
                                                <img
                                                    src="assets/imgs/theme/icons/icon-pinterest.svg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="work" className="mt-40 pt-50 pb-50 section-border">
                    <div className="container">
                        <div className="row mb-50">
                            <div className="col-lg-12 col-md-12 text-center">
                                <h6 className="mt-0 mb-5 text-uppercase  text-brand font-sm wow fadeIn animated">
                                    Evara Coporation
                                </h6>
                                <h2 className="mb-15 text-grey-1 wow fadeIn animated">
                                    Our main branches
                                    <br /> around the world
                                </h2>
                                <p className="w-50 m-auto text-grey-3 wow fadeIn animated">
                                    At vero eos et accusamus et iusto odio
                                    dignissimos ducimus quiblanditiis
                                    praesentium. ebitis nesciunt voluptatum
                                    dicta reprehenderit accusamus
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 text-center mb-md-0 mb-4">
                                <img
                                    className="btn-shadow-brand hover-up border-radius-10 bg-brand-muted wow fadeIn animated"
                                    src="assets/imgs/page/company-1.jpg"
                                    alt=""
                                />
                                <h4 className="mt-30 mb-15 wow fadeIn animated">
                                    New York, USA
                                </h4>
                                <p className="text-grey-3 wow fadeIn animated">
                                    27 Division St, New York
                                    <br />
                                    NY 10002, USA
                                </p>
                            </div>
                            <div className="col-md-4 text-center mb-md-0 mb-4">
                                <img
                                    className="btn-shadow-brand hover-up border-radius-10 bg-brand-muted wow fadeIn animated"
                                    src="assets/imgs/page/company-2.jpg"
                                    alt=""
                                />
                                <h4 className="mt-30 mb-15 wow fadeIn animated">
                                    Paris, France
                                </h4>
                                <p className="text-grey-3 wow fadeIn animated">
                                    22 Rue des Carmes
                                    <br /> 75005 Paris
                                </p>
                            </div>
                            <div className="col-md-4 text-center">
                                <img
                                    className="btn-shadow-brand hover-up border-radius-10 bg-brand-muted wow fadeIn animated"
                                    src="assets/imgs/page/company-3.jpg"
                                    alt=""
                                />
                                <h4 className="mt-30 mb-15 wow fadeIn animated">
                                    Jakarta, Indonesia
                                </h4>
                                <p className="text-grey-3 wow fadeIn animated">
                                    2476 Raya Yogyakarta,
                                    <br />
                                    89090 Indonesia
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="testimonials" className="section-padding">
                    <div className="container pt-25">
                        <div className="row mb-50">
                            <div className="col-lg-12 col-md-12 text-center">
                                <h6 className="mt-0 mb-10 text-uppercase  text-brand font-sm wow fadeIn animated">
                                    some facts
                                </h6>
                                <h2 className="mb-15 text-grey-1 wow fadeIn animated">
                                    Take a look what
                                    <br /> our clients say about us
                                </h2>
                                <p className="w-50 m-auto text-grey-3 wow fadeIn animated">
                                    At vero eos et accusamus et iusto odio
                                    dignissimos ducimus quiblanditiis
                                    praesentium. ebitis nesciunt voluptatum
                                    dicta reprehenderit accusamus
                                </p>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-md-6 col-lg-4">
                                <div className="hero-card box-shadow-outer-6 wow fadeIn animated mb-30 hover-up d-flex">
                                    <div className="hero-card-icon icon-left-2 hover-up ">
                                        <img
                                            className="btn-shadow-brand hover-up border-radius-5 bg-brand-muted"
                                            src="assets/imgs/page/avatar-1.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="pl-30">
                                        <h5 className="mb-5 fw-500">J. Bezos</h5>
                                        <p className="font-sm text-grey-5">
                                            Adobe Jsc
                                        </p>
                                        <p className="text-grey-3">
                                            "Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Debitis nesciunt voluptatum dicta
                                            reprehenderit accusamus voluptatibus
                                            voluptas."
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="hero-card box-shadow-outer-6 wow fadeIn animated mb-30 hover-up d-flex">
                                    <div className="hero-card-icon icon-left-2 hover-up ">
                                        <img
                                            className="btn-shadow-brand hover-up border-radius-5 bg-brand-muted"
                                            src="assets/imgs/page/avatar-3.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="pl-30">
                                        <h5 className="mb-5 fw-500">B.Gates</h5>
                                        <p className="font-sm text-grey-5">
                                            Adobe Jsc
                                        </p>
                                        <p className="text-grey-3">
                                            "Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Debitis nesciunt voluptatum dicta
                                            reprehenderit accusamus voluptatibus
                                            voluptas."
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="hero-card box-shadow-outer-6 wow fadeIn animated mb-30 hover-up d-flex">
                                    <div className="hero-card-icon icon-left-2 hover-up ">
                                        <img
                                            className="btn-shadow-brand hover-up border-radius-5 bg-brand-muted"
                                            src="assets/imgs/page/avatar-2.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="pl-30">
                                        <h5 className="mb-5 fw-500">B. Meyers</h5>
                                        <p className="font-sm text-grey-5">
                                            Adobe Jsc
                                        </p>
                                        <p className="text-grey-3">
                                            "Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Debitis nesciunt voluptatum dicta
                                            reprehenderit accusamus voluptatibus
                                            voluptas."
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="hero-card box-shadow-outer-6 wow fadeIn animated mb-30 hover-up d-flex">
                                    <div className="hero-card-icon icon-left-2 hover-up ">
                                        <img
                                            className="btn-shadow-brand hover-up border-radius-5 bg-brand-muted"
                                            src="assets/imgs/page/avatar-4.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="pl-30">
                                        <h5 className="mb-5 fw-500">J. Bezos</h5>
                                        <p className="font-sm text-grey-5">
                                            Adobe Jsc
                                        </p>
                                        <p className="text-grey-3">
                                            "Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Debitis nesciunt voluptatum dicta
                                            reprehenderit accusamus voluptatibus
                                            voluptas."
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="hero-card box-shadow-outer-6 wow fadeIn animated mb-30 hover-up d-flex">
                                    <div className="hero-card-icon icon-left-2 hover-up ">
                                        <img
                                            className="btn-shadow-brand hover-up border-radius-5 bg-brand-muted"
                                            src="assets/imgs/page/avatar-5.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="pl-30">
                                        <h5 className="mb-5 fw-500">B.Gates</h5>
                                        <p className="font-sm text-grey-5">
                                            Adobe Jsc
                                        </p>
                                        <p className="text-grey-3">
                                            "Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Debitis nesciunt voluptatum dicta
                                            reprehenderit accusamus voluptatibus
                                            voluptas."
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="hero-card box-shadow-outer-6 wow fadeIn animated mb-30 hover-up d-flex">
                                    <div className="hero-card-icon icon-left-2 hover-up ">
                                        <img
                                            className="btn-shadow-brand hover-up border-radius-5 bg-brand-muted"
                                            src="assets/imgs/page/avatar-1.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="pl-30">
                                        <h5 className="mb-5 fw-500">B. Meyers</h5>
                                        <p className="font-sm text-grey-5">
                                            Adobe Jsc
                                        </p>
                                        <p className="text-grey-3">
                                            "Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Debitis nesciunt voluptatum dicta
                                            reprehenderit accusamus voluptatibus
                                            voluptas."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-30">
                            <div className="col-12 text-center">
                                <p className="wow fadeIn animated">
                                    <a className="btn btn-brand text-white btn-shadow-brand hover-up btn-lg">
                                        View More
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </section> */}
        <div className="page-content pt-50">
          <div className="container">
            <div className="row">
              <div className="col-xl-10 col-lg-12 m-auto">
                <section className="row align-items-center mb-50">
                  <div className="col-lg-6">
                    <img
                      src="assets/imgs/page/about-1.png"
                      alt=""
                      className="border-radius-15 mb-md-3 mb-lg-0 mb-sm-4"
                    />
                  </div>
                  <div className="col-lg-6">
                    <div className="pl-25">
                      <h2 className="mb-30">Welcome to Digital Store</h2>
                      <p className="mb-25">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate id est laborum.
                      </p>
                      <p className="mb-50">
                        Ius ferri velit sanctus cu, sed at soleat accusata.
                        Dictas prompta et Ut placerat legendos interpre.Donec
                        vitae sapien ut libero venenatis faucibus. Nullam quis
                        ante Etiam sit amet orci eget. Quis commodo odio aenean
                        sed adipiscing. Turpis massa tincidunt dui ut ornare
                        lectus. Auctor elit sed vulputate mi sit amet. Commodo
                        consequat. Duis aute irure dolor in reprehenderit in
                        voluptate id est laborum.
                      </p>
                      {/* <div className="carausel-3-columns-cover position-relative">
                        <div id="carausel-3-columns-arrows"></div>
                        <div
                          className="carausel-3-columns"
                          id="carausel-3-columns"
                        >
                          <img src="assets/imgs/page/about-2.png" alt="" />
                          <img src="assets/imgs/page/about-3.png" alt="" />
                          <img src="assets/imgs/page/about-4.png" alt="" />
                          <img src="assets/imgs/page/about-2.png" alt="" />
                        </div>
                      </div> */}
                    </div>
                  </div>
                </section>
                <section className="text-center mb-50">
                  <h2 className="title style-3 mb-40">What We Provide?</h2>
                  <div className="row">
                    <div className="col-lg-4 col-md-6 mb-24">
                      <div className="featured-card">
                        <img src="assets/imgs/theme/icons/icon-1.svg" alt="" />
                        <h4>Best Prices & Offers</h4>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form
                        </p>
                        <a href="#">Read more</a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-24">
                      <div className="featured-card">
                        <img src="assets/imgs/theme/icons/icon-2.svg" alt="" />
                        <h4>Wide Assortment</h4>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form
                        </p>
                        <a href="#">Read more</a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-24">
                      <div className="featured-card">
                        <img src="assets/imgs/theme/icons/icon-3.svg" alt="" />
                        <h4>Free Delivery</h4>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form
                        </p>
                        <a href="#">Read more</a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-24">
                      <div className="featured-card">
                        <img src="assets/imgs/theme/icons/icon-4.svg" alt="" />
                        <h4>Easy Returns</h4>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form
                        </p>
                        <a href="#">Read more</a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-24">
                      <div className="featured-card">
                        <img src="assets/imgs/theme/icons/icon-5.svg" alt="" />
                        <h4>100% Satisfaction</h4>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form
                        </p>
                        <a href="#">Read more</a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-24">
                      <div className="featured-card">
                        <img src="assets/imgs/theme/icons/icon-6.svg" alt="" />
                        <h4>Great Daily Deal</h4>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form
                        </p>
                        <a href="#">Read more</a>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="row align-items-center mb-50">
                  <div className="row mb-50 align-items-center">
                    <div className="col-lg-7 pr-30">
                      <img
                        src="assets/imgs/page/about-5.png"
                        alt=""
                        className="mb-md-3 mb-lg-0 mb-sm-4"
                      />
                    </div>
                    <div className="col-lg-5">
                      <h4 className="mb-20 text-muted">Our performance</h4>
                      <h1 className="heading-1 mb-40">
                        Your Partner for e-commerce grocery solution
                      </h1>
                      <p className="mb-30">
                        Ed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto
                      </p>
                      <p>
                        Pitatis et quasi architecto beatae vitae dicta sunt
                        explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                        aspernatur aut odit aut fugit, sed quia
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4 pr-30 mb-md-5 mb-lg-0 mb-sm-5">
                      <h3 className="mb-30">Who we are</h3>
                      <p>
                        Volutpat diam ut venenatis tellus in metus. Nec dui nunc
                        mattis enim ut tellus eros donec ac odio orci ultrices
                        in. ellus eros donec ac odio orci ultrices in.
                      </p>
                    </div>
                    <div className="col-lg-4 pr-30 mb-md-5 mb-lg-0 mb-sm-5">
                      <h3 className="mb-30">Our history</h3>
                      <p>
                        Volutpat diam ut venenatis tellus in metus. Nec dui nunc
                        mattis enim ut tellus eros donec ac odio orci ultrices
                        in. ellus eros donec ac odio orci ultrices in.
                      </p>
                    </div>
                    <div className="col-lg-4">
                      <h3 className="mb-30">Our mission</h3>
                      <p>
                        Volutpat diam ut venenatis tellus in metus. Nec dui nunc
                        mattis enim ut tellus eros donec ac odio orci ultrices
                        in. ellus eros donec ac odio orci ultrices in.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <section className="container mb-50 d-none d-md-block">
            <div className="row about-count">
              <div className=" col-md-6 text-center mb-lg-0 mb-md-5">
                <h1 className="heading-1">
                  <span className="count">12</span>+
                </h1>
                <h4>Glorious years</h4>
              </div>
              <div className="col-lg-1-5 col-md-6 text-center">
                <h1 className="heading-1">
                  <span className="count">36</span>+
                </h1>
                <h4>Happy clients</h4>
              </div>
              <div className="col-lg-1-5 col-md-6 text-center">
                <h1 className="heading-1">
                  <span className="count">58</span>+
                </h1>
                <h4>Projects complete</h4>
              </div>
              <div className="col-lg-1-5 col-md-6 text-center">
                <h1 className="heading-1">
                  <span className="count">24</span>+
                </h1>
                <h4>Team advisor</h4>
              </div>
              <div className="col-lg-1-5 text-center d-none d-lg-block">
                <h1 className="heading-1">
                  <span className="count">26</span>+
                </h1>
                <h4>Products Sale</h4>
              </div>
            </div>
          </section>
          <div className="container">
            <div className="row">
              <div className="col-xl-10 col-lg-12 m-auto">
                <section className="mb-50">
                  <h2 className="title style-3 mb-40 text-center">Our Team</h2>
                  <div className="row">
                    <div className="col-lg-4 mb-lg-0 mb-md-5 mb-sm-5">
                      <h6 className="mb-5 text-brand">Our Team</h6>
                      <h1 className="mb-30">Meet Our Expert Team</h1>
                      <p className="mb-30">
                        Proin ullamcorper pretium orci. Donec necscele risque
                        leo. Nam massa dolor imperdiet neccon sequata congue
                        idsem. Maecenas malesuada faucibus finibus.
                      </p>
                      <p className="mb-30">
                        Proin ullamcorper pretium orci. Donec necscele risque
                        leo. Nam massa dolor imperdiet neccon sequata congue
                        idsem. Maecenas malesuada faucibus finibus.
                      </p>
                      <a href="#" className="btn">
                        View All Members
                      </a>
                    </div>
                    <div className="col-lg-8">
                      <div className="row">
                        <div className="col-lg-6 col-md-6">
                          <div className="team-card">
                            <img src="assets/imgs/page/about-6.png" alt="" />
                            <div className="content text-center">
                              <h4 className="mb-5">H. Merinda</h4>
                              <span>CEO & Co-Founder</span>
                              <div className="social-network mt-20">
                                <a href="#">
                                  <img
                                    src="assets/imgs/theme/icons/icon-facebook-brand.svg"
                                    alt=""
                                  />
                                </a>
                                <a href="#">
                                  <img
                                    src="assets/imgs/theme/icons/icon-twitter-brand.svg"
                                    alt=""
                                  />
                                </a>
                                <a href="#">
                                  <img
                                    src="assets/imgs/theme/icons/icon-instagram-brand.svg"
                                    alt=""
                                  />
                                </a>
                                <a href="#">
                                  <img
                                    src="assets/imgs/theme/icons/icon-youtube-brand.svg"
                                    alt=""
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="team-card">
                            <img src="assets/imgs/page/about-8.png" alt="" />
                            <div className="content text-center">
                              <h4 className="mb-5">Dilan Specter</h4>
                              <span>Head Engineer</span>
                              <div className="social-network mt-20">
                                <a href="#">
                                  <img
                                    src="assets/imgs/theme/icons/icon-facebook-brand.svg"
                                    alt=""
                                  />
                                </a>
                                <a href="#">
                                  <img
                                    src="assets/imgs/theme/icons/icon-twitter-brand.svg"
                                    alt=""
                                  />
                                </a>
                                <a href="#">
                                  <img
                                    src="assets/imgs/theme/icons/icon-instagram-brand.svg"
                                    alt=""
                                  />
                                </a>
                                <a href="#">
                                  <img
                                    src="assets/imgs/theme/icons/icon-youtube-brand.svg"
                                    alt=""
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default About;
