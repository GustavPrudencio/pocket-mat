import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import ScrollspyNav from "./scrollSpy";

class NavbarPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            navItems : [
                { id: 1 , idnm : "home", navheading: "Home" },
                { id: 3 , idnm : "service", navheading: "Features" },
                { id: 3 , idnm : "testimonial", navheading: "Reviews" },
                { id: 4 , idnm : "pricing", navheading: "Pricing" },
                { id: 5 , idnm : "gallery", navheading: "Gallery" },
                { id: 6 , idnm : "contact", navheading: "Contact" },
                ],
                isOpen : false, 
        };
        this.toggleLine = this.toggleLine.bind(this);
    }

    toggleLine() {
        this.setState(prevState => ({  isOpen: !prevState.isOpen }));
    }
    
    render() {
        //Store all Navigationbar Id into TargetID variable(Used for Scrollspy)
        let targetId = this.state.navItems.map((item) => {
            return(
                item.idnm
            )
        });
        return (
            <React.Fragment>
                    <header id="topnav" className="defaultscroll sticky">
                            <Container>
                            <div>
                                <Link className="logo" to="/index">Pocket Prayer Mat<span className="text-primary">.</span></Link>
                            </div>                 
                            <div className="buy-button">
                                <Link to="https://1.envato.market/4n73n" target="_blank" className="btn btn-primary">Buy Now</Link>
                            </div>
                            <div className="menu-extras">
                                        <div className="menu-item">
                                            <Link to="#" onClick={ this.toggleLine } className={this.state.isOpen ? "navbar-toggle open" : "navbar-toggle" } >
                                                <div className="lines">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                            </Link>
                                        </div>
                            </div>
                                    <ScrollspyNav
                                        scrollTargetIds={targetId}
                                        scrollDuration="800"
                                        headerBackground="false"
                                        activeNavClass="active"
                                    >
                                    <div id="navigation" style={{ display : this.state.isOpen ? "block" : "none" }}>
                                        <ul className="navigation-menu">
                                            {this.state.navItems.map((item, key) => (
                                                <li key={key} className="has-submenu">
                                                    <a href={"#" + item.idnm} > {item.navheading}</a>
                                                </li>
                                            ))} 
                                        </ul>
                                    </div>
                                    </ScrollspyNav>
                            </Container>
                        </header>
            </React.Fragment>
        );
    }
}

export default NavbarPage;