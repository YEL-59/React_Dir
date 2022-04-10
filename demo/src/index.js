import React from "react";
import ReactDOM, { render } from "react-dom";
import "./css/style.css";

function Ecommerce() {
  return (
    <section>
      <Allcomponent></Allcomponent>
    </section>
  );
}

const Allcomponent = () => {
  return (
    <article>
      <Mainpage></Mainpage>
    </article>
  );
};

const Mainpage = () => {
  return (
    <section>
      <html lang="en">
        <head></head>
        <body>
          <div className="section">
            <div className="navbar">
              <div className="logo">
                <img src="./image/logo.png" alt="" />
              </div>
              <nav>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Find Us</a>
                  </li>
                  <li>
                    <a href="#">like</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="small-container">
              <div class="row">
                <div class="col1">
                  <h1>
                    Give Your Workout <br />A New Style!
                  </h1>
                  <p>
                    Success in not Alwayes About greatness.Its about
                    consistincy.Consisten <br />
                    hard word gain success.Greatness will come
                  </p>
                  <a href="#" class="btn1">
                    Explore now &#8594;
                  </a>
                </div>
                <div class="col1">
                  <img src="./image/image1.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div class="catagory-container">
            <div class="row">
              <div class="col2">
                <img src="./image/category-1.jpg" alt="" />
              </div>
              <div class="col2">
                <img src="./image/category-2.jpg" alt="" />
              </div>
              <div class="col2">
                <img src="./image/category-3.jpg" alt="" />
              </div>
            </div>
          </div>
          <h2 class="medleheader">feature Product</h2>
          <div class="small-container">
            <div class="row">
              <div class="col3">
                <img src="./image/product-1.jpg" alt="" />
                <h3>Red T-shirt</h3>
                <div class="stargroup">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <p>$50.00</p>
                <a href="#" class="btn">
                  Buy now
                </a>
              </div>

              <div class="col3">
                <img src="./image/product-2.jpg" alt="" />
                <h3>Red T-shirt</h3>
                <div class="stargroup">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <p>$50.00</p>
                <a href="#" class="btn">
                  Buy now
                </a>
              </div>

              <div class="col3">
                <img src="./image/product-3.jpg" alt="" />
                <h3>Red T-shirt</h3>
                <div class="stargroup">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <p>$50.00</p>
                <a href="#" class="btn">
                  Buy now
                </a>
              </div>

              <div class="col3">
                <img src="./image/product-4.jpg" alt="" />
                <h3>Red T-shirt</h3>
                <div class="stargroup">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <p>$50.00</p>
                <a href="#" class="btn">
                  Buy now
                </a>
              </div>
            </div>

            <div class="row">
              <div class="col3">
                <img src="./image/product-1.jpg" alt="" />
                <h3>Red T-shirt</h3>
                <div class="stargroup">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <p>$50.00</p>
                <a href="#" class="btn">
                  Buy now
                </a>
              </div>

              <div class="col3">
                <img src="./image/product-2.jpg" alt="" />
                <h3>Red T-shirt</h3>
                <div class="stargroup">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <p>$50.00</p>
                <a href="#" class="btn">
                  Buy now
                </a>
              </div>

              <div class="col3">
                <img src="./image/product-3.jpg" alt="" />
                <h3>Red T-shirt</h3>
                <div class="stargroup">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <p>$50.00</p>
                <a href="#" class="btn">
                  Buy now
                </a>
              </div>

              <div class="col3">
                <img src="./image/product-4.jpg" alt="" />
                <h3>Red T-shirt</h3>
                <div class="stargroup">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <p>$50.00</p>
                <a href="#" class="btn">
                  Buy now
                </a>
              </div>
            </div>
          </div>
          <h2 class="medleheader">Latest Product</h2>

          <div class="catagory-container">
            <div class="row">
              <div class="col3">
                <img src="./image/product-1.jpg" alt="" />
                <h3>Red T-shirt</h3>
                <div class="stargroup">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <p>$50.00</p>
                <a href="#" class="btn">
                  Buy now
                </a>
              </div>

              <div class="col3">
                <img src="./image/product-2.jpg" alt="" />
                <h3>Red T-shirt</h3>
                <div class="stargroup">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <p>$50.00</p>
                <a href="#" class="btn">
                  Buy now
                </a>
              </div>

              <div class="col3">
                <img src="./image/product-3.jpg" alt="" />
                <h3>Red T-shirt</h3>
                <div class="stargroup">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <p>$50.00</p>
                <a href="#" class="btn">
                  Buy now
                </a>
              </div>

              <div class="col3">
                <img src="./image/product-4.jpg" alt="" />
                <h3>Red T-shirt</h3>
                <div class="stargroup">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <p>$50.00</p>
                <a href="#" class="btn">
                  Buy now
                </a>
              </div>
            </div>
          </div>

          <div class="offer-product">
            <div class="small-container">
              <div class="row">
                <div class="col4">
                  <img src="./image/exclusive.png" alt="" />
                </div>
                <div class="col4">
                  <div class="col4-text">
                    <p>Exclusively Available on store</p>
                    <h1>Smart Band 4</h1>
                    <span>
                      Success in not Always About greatness.Its about
                      consistincy.Consisten <br />
                      hard word gain success.Greatness will come
                    </span>
                    <br />
                    <a class="btn" href="">
                      buy now &#8594;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="testimonial">
            <div class="small-container">
              <div class="row">
                <div class="col2">
                  <div class="card">
                    <i class="fa fa-quote-left" aria-hidden="true"></i>
                    <p>
                      Success in not Always About greatness.Its about
                      consistincy.Consisten hard word gain success.Greatness
                      will come
                    </p>
                    <div class="ratting">
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star-o" aria-hidden="true"></i>
                    </div>
                    <img src="./image/user-1.png" alt="" />
                    <h2>Md.Tofayel islam</h2>
                  </div>
                </div>
                <div class="col2">
                  <div class="card">
                    <i class="fa fa-quote-left" aria-hidden="true"></i>
                    <p>
                      Success in not Always About greatness.Its about
                      consistincy.Consisten hard word gain success.Greatness
                      will come
                    </p>
                    <div class="ratting">
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star-o" aria-hidden="true"></i>
                    </div>
                    <img src="./image/user-2.png" alt="" />
                    <h2>Md.Tofayel islam</h2>
                  </div>
                </div>

                <div class="col2">
                  <div class="card">
                    <i class="fa fa-quote-left" aria-hidden="true"></i>
                    <p>
                      Success in not Always About greatness.Its about
                      consistincy.Consisten hard word gain success.Greatness
                      will come
                    </p>
                    <div class="ratting">
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star-o" aria-hidden="true"></i>
                    </div>
                    <img src="./image/user-3.png" alt="" />
                    <h2>Md.Tofayel islam</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="partner">
            <div class="catagory-container">
              <div class="row">
                <div class="col5">
                  <img src="./image/logo-paypal.png" alt=""/>
                </div>
                <div class="col5">
                  <img src="./image/logo-coca-cola.png" alt=""/>
                </div>
                <div class="col5">
                  <img src="./image/logo-oppo.png" alt=""/>
                </div>
                <div class="col5">
                  <img src="./image/logo-philips.png" alt=""/>
                </div>
                <div class="col5">
                  <img src="./image/logo-white.png" alt=""/>
                </div>
                <div class="col5">
                  <img src="./image/logotuhin.png" alt=""/>
                </div>
              </div>
            </div>
          </div>

          <div class="footer">
            <div class="containerr">
              <div class="row">
                <div class="footercol1">
                  <h3>Download our App</h3>
                  <p>Download App Form Android and ios</p>
                  <div class="app-logo">
                    <img src="image/play-store.png" alt="" />
                    <img src="image/app-store.png" alt="" />
                  </div>
                </div>
                <div class="footercol-2">
                  <img src="image/logo-white.png" alt="" />
                  <p>Download App Form Android and ios</p>
                </div>
                <div class="footercol-3">
                  <h3>Useful Links</h3>
                  <ul>
                    <li>Coupons</li>
                    <li>Blog Post</li>
                    <li>Return Policy</li>
                    <li>Join Affiliate</li>
                  </ul>
                </div>
                <div class="footercol-4">
                  <h3>Follow us</h3>
                  <ul>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>instagram</li>
                    <li>YouTube</li>
                  </ul>
                </div>
              </div>
              <hr />
              <p class="copy">Copyright2022-tofayelislam</p>
            </div>
          </div>
        
          
        </body>
      </html>
    </section>
  );
};

ReactDOM.render(<Ecommerce></Ecommerce>, document.getElementById("root"));
