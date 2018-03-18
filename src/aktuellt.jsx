import React from 'react';
import Sticky from 'react-sticky';

export default () => (
  <div className="aktuellt-page">
    <div className="box-first">
      <h1 className="page-title">Aktuellt</h1>
    </div>

    <div className="box-second">
      <p className="aktuellt">
        Viltspårprov 2017
      </p>
      <div className="aktuellt-bild-container">
        <div className="aktuellt-bild-container__image">
          <img src="./public/img/viltspar.jpg" alt="Viltspår" />
        </div>
        <p>
          Astrid fick godkännt anlagsprov i viltspår 2017-04-17
        </p>
      </div>
    </div>
    <Sticky topOffset={-40} stickyClass="divider-sticky-one">
      <div className="divider-one"></div>
    </Sticky>

  </div>
);
