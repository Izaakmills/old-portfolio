import React, { Component } from 'react';

class Header extends Component {
    constructor(props){
        super(props)
        console.log("constructor saying hi here...")
    }
    render() {
        return(
            <body>

                <div className="container-fluid rounded header">
                <div className="row">
                    <div className="col-sm-12 col-md-4 header">
                    <h1>Izaak Mills</h1>
                    </div>
                    <div className="col-sm-12 col-md-8 header-social-links">
                    <a className="btn social-btn" href="https://github.com/Izaakmills" role="button">
                        <i className="fab fa-github fa-2x"></i>
                    </a>
                    <a className="btn social-btn" href="https://www.linkedin.com/in/izaak-mills-09bb6b85/" role="button">
                        <i className="fab fa-linkedin-in fa-2x"></i>
                    </a>
                    </div>
                </div>
                </div>

            {/* <!-- Main Content Section 1  --> */}

            <div className="container">
              {/* <!-- Main Content Section 2 - Projects  --> */}

                <div className="row section">
                    <div className="col-md-12">
                    <img src="./assets/images/whitecappic.jpg" className="head-img rounded-circle mx-auto" alt="not found"/>
                    </div>
                </div>
                <div className="row section">
                    <div className="col-md-12">
                    <h2>About Me</h2>
                    <p>Graduated in 2016 from a tiny college in Maine. I started working for a Fortune 100 Insurance company. Once on the
                        job I found myself doing more than what was required of my job when it came to identifying and solving system problems
                        and process enhancements. This led me to develop my Excel skills and inspired my passion into the development world.</p>
                    <hr/>
                    </div>
                </div>
            </div>
          </body>

        )
        
    }

}
export default Header;