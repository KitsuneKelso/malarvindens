import React from 'react';
import ReactDOM from 'react-dom';
import Sticky from 'react-sticky';

export default class VaraValpar extends React.Component {
  render() {
    return (
      <div className="temp">
        <div className="box-first">
          <h1 className="page-title">Våra Valpar</h1>
        </div>
        <div className="box-second">
          Test
        </div>
        <Sticky topOffset={-40} stickyClass="divider-sticky-one">
          <div className="divider-one"></div>
        </Sticky>
        <div className="box-third">
          Test
        </div>
        <Sticky topOffset={-40} stickyClass="divider-sticky-two">
          <div className="divider-two"></div>
        </Sticky>
      </div>
    )
  }
}
