import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import Sticky from 'react-sticky';

export default class NavBar extends React.Component {
  constructor() {
    super();
    this.setLocation = this.setLocation.bind(this);
    this.state = {
      location: window.location.hash.split('?')[0],
    };
  }

  setLocation(e) {
    if (e.target && e.target.href) {
      const location = `#${e.target.href.split('#')[1]}`;
      this.setState({ location });
      window.scrollTo(0, 400);
    }
  }

  render() {
    return (
      <div className="nav-bar">
        <Sticky topOffset={400}>
          <div className="nav-menu">
            <div className="nav-logo">
              <img className="logo-big" src="./public/img/logo.svg" height="100px" alt="Mälarvindens Kennel" />
              <img className="logo-small" src="./public/img/logo.svg" height="50px" alt="Mälarvindens Kennel" />
            </div>
            <div className="nav-links">
              <Nav bsStyle="tabs" activeHref={this.state.location} onClick={this.setLocation}>
                <NavItem href="#/">Hem</NavItem>
                <NavItem href="#/om-oss">Om Oss</NavItem>
                <NavItem href="#/hundar">Våra Hundar</NavItem>
                <NavItem href="#/tax">Livet med Taxar</NavItem>
                <NavItem href="#/aktuellt">Aktuellt</NavItem>
              </Nav>
            </div>
          </div>
        </Sticky>
      </div>
    );
  }
}
