import Link from "next/link";
import Layout from "../components/layout/Layout";

function Login() {
  return (
    <>
      <Layout parent="Home" sub="Pages" subChild="Login & Register">
        <div className="page-content pt-150 pb-150">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-12 m-auto">
                <div className="login_wrap widget-taber-content background-white">
                  <div className="padding_eight_all bg-white">
                    <div className="heading_s1">
                      <img
                        className="border-radius-15"
                        src="/assets/imgs/page/forgot_password.svg"
                        alt=""
                      />
                      <h2 className="mb-15 mt-15">Forgot your password?</h2>
                      <p className="mb-30">
                        Not to worry, we got you! Let’s get you a new password.
                        Please enter your email address or your Username.
                      </p>
                    </div>
                    <form method="post">
                      <div className="form-group">
                        <input
                          type="text"
                          required=""
                          name="email"
                          placeholder="Username or Email *"
                        />
                      </div>
                      <div className="login_footer form-group">
                        <div className="chek-form">
                          <input
                            type="text"
                            required=""
                            name="email"
                            placeholder="Security code *"
                          />
                        </div>
                        <span className="security-code">
                          <b className="text-new">8</b>
                          <b className="text-hot">6</b>
                          <b className="text-sale">7</b>
                          <b className="text-best">5</b>
                        </span>
                      </div>
                      <div className="login_footer form-group mb-50">
                        <div className="chek-form">
                          <div className="custome-checkbox">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="checkbox"
                              id="exampleCheckbox1"
                              value=""
                            />
                            <label
                              className="form-check-label"
                              for="exampleCheckbox1"
                            >
                              <span>I agree to terms & Policy.</span>
                            </label>
                          </div>
                        </div>
                        <Link href="/page-privacy-policy">
                          <a className="text-muted">Learn more</a>
                        </Link>
                      </div>
                      <div className="form-group">
                        <button
                          type="submit"
                          className="btn btn-heading btn-block hover-up"
                          name="login"
                        >
                          Reset password
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Login;
