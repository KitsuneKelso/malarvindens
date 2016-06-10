import React from 'react';
import ReactDOM from 'react-dom';

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <div className="footer-top">
          <p>
            <b>Mälarvindens Kennel</b><br/>
            Birgitta Gustafsson<br/>
            Fjärilsvägen 14A<br/>
            184 38 Åkersberga<br/>
            076-251 95 85<br/>
            <a href="mailto:taxmamman@gmail.com">taxmamman@gmail.com</a><br/>
          </p>
        </div>
        <div className="footer-image"></div>
        <div className="footer-end">
          <p>
            Webmaster: <a href="https://se.linkedin.com/in/frgustafsson" target="_blank">Fredrik Gustafsson</a>
          </p>
        </div>
      </div>
    );
  }
};
