import React from 'react';
import Sticky from 'react-sticky';

export default class Aktuellt extends React.Component {
  render() {
    return (
      <div className="aktuellt-page">
        <div className="box-first">
          <h1 className="page-title">Aktuellt</h1>
        </div>

        <div className="box-second">
          <p className="aktuellt">
            Ny kull planneras till våren 2018
          </p>
          <div className="aktuellt-bild-container">
            <p>
              Efter Ronja (Bellomis Kallaskula)
            </p>
          </div>
        </div>
        <Sticky topOffset={-40} stickyClass="divider-sticky-one">
          <div className="divider-one"></div>
        </Sticky>

        <div className="box-third">
          <p className="aktuellt">
            Viltspårprov 2017
          </p>
          <div className="aktuellt-bild-container">
            <div className="aktuellt-bild-container__image">
              <img className="aktuellt-viltspar" src="./public/img/viltspar.jpg" alt="Viltspår" />
            </div>
            <p>
              Astrid fick godkännt anlagsprov i viltspår 2017-04-17
            </p>
          </div>
        </div>
        <Sticky topOffset={-40} stickyClass="divider-sticky-two">
          <div className="divider-two"></div>
        </Sticky>

      </div>
    );
  }
}
