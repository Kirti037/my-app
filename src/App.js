import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Slider from "./slider";
import Videos from "./videos";
import Released from "./released";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar Section */}
        <Navbar />

        {/* Define Routes */}
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <div>
                {/* Welcome Section */}
                <div className="text-center my-5">
                  <h1 className="display-4">WELCOME TO BGMI WORLD</h1>
                  <Slider />
                  
                </div>
                <h3 className="text-center mb-4">
                    Here you can find information, articles, images, related to BGMI.
                  </h3>

                {/* Content Section */}
                <div className="content container my-5">
                 

                  <div className="row">
                    {/* Card 1 */}
                    <div className="col-12 col-sm-6 col-md-4 mb-4">
                      <a
                        href="https://www.youtube.com/watch?v=n1ASAkFLk0Y"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none" }}
                      >
                        <div className="card hover-effect">
                          <img
                            src="https://www.battlegroundsmobileindia.com/data/board/2/850/02_Banner_Notice.jpg"
                            className="card-img-top img-fluid"
                            alt="Notice"
                          />
                          <div className="card-body">
                            <h5 className="card-title">Notice</h5>
                            <p className="card-text"> 21/10/2024.</p>
                          </div>
                        </div>
                      </a>
                    </div>

                    {/* Card 2 */}
                    <div className="col-12 col-sm-6 col-md-4 mb-4">
                      <a
                        href="https://www.youtube.com/watch?v=n1ASAkFLk0Y"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none" }}
                      >
                        <div className="card hover-effect">
                          <img
                            src="https://www.battlegroundsmobileindia.com/data/board/2/853/06_Banner_Notice.jpg"
                            className="card-img-top img-fluid"
                            alt="Notice"
                          />
                          <div className="card-body">
                            <h5 className="card-title">Notice</h5>
                            <p className="card-text"> 22/10/2024.</p>
                          </div>
                        </div>
                      </a>
                    </div>

                    {/* Card 3 */}
                    <div className="col-12 col-sm-6 col-md-4 mb-4">
                      <a
                        href="https://www.youtube.com/watch?v=n1ASAkFLk0Y"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none" }}
                      >
                        <div className="card hover-effect">
                          <img
                            src="https://www.battlegroundsmobileindia.com/data/board/2/850/02_Banner_Notice.jpg"
                            className="card-img-top img-fluid"
                            alt="Notice"
                          />
                          <div className="card-body">
                            <h5 className="card-title">Notice</h5>
                            <p className="card-text"> 23/10/2024.</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            }
          />

          {/* Videos Page */}
          <Route path="/videos" element={<Videos />} />
          <Route path="/released" element={<Released />} />

        </Routes>

        {/* Footer Section */}
        <footer className="App-footer text-center py-3">
          <p>&copy; BGMI WORLD. All rights reserved.</p>
          <p>
            &copy;About us &copy;Contact us
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
