import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-3">
            <h3>Features</h3>
            <ul className="list-unstyled text-white">
              <li>
                <a href="#" className="default">
                  Popular Recipes
                </a>
              </li>
              <li>
                <a href="#" className="default">
                  Meal Planning
                </a>
              </li>
              <li>
                <a href="#" className="default">
                  Cooking Tips
                </a>
              </li>
              <li>
                <a href="#" className="default">
                  Special Diets
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>About</h3>
            <ul className="list-unstyled text-white">
              <li>
                <a href="#" className="default">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="default">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="default">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="default">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>Quick Links</h3>
            <ul className="list-unstyled text-white">
              <li>
                <a href="#" className="default">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="default">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="default">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="default">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>Newsletter</h3>
            <form>
              <div className="form-group">
                <label htmlFor="newsletter-email">Enter your email</label>
                <input
                  type="email"
                  className="form-control"
                  id="newsletter-email"
                  placeholder="Your email"
                />
              </div>
              <button type="submit" className="btn btn-primary mt-2 border-0">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-12 text-center">
            <p>&copy; 2023. All rights reserved by Kitchen Whiz.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
