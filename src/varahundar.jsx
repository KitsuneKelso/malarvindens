import React from 'react';
import ReactDOM from 'react-dom';
import Sticky from 'react-sticky';

export default class VaraHundar extends React.Component {
  render() {
    return (
      <div className="vara-hundar">
        <div className="box-first">
          <h1 className="page-title">Våra Hundar</h1>
        </div>
        <div className="box-second">
          <div className="tax-container-2cell">
            <div className="tax-box">
              <div className="tax-bild">
                <img className="tax-portrait" src="./public/img/ida.jpg"/>
              </div>
              <p className="tax-info">
                <b>Ida (SE VCH, Hissmovallens Elvira)</b>
                <br/>
                <b>Född:</b> 2012-11-26<br/>
                <b>Utställningsmerit:</b> Excellent<br/>
                <b>Jaktmerit:</b> Viltspårschampion
              </p>
            </div>
            <div className="tax-box">
              <div className="tax-bild">
                <img className="tax-portrait" src="./public/img/ronja.jpg"/>
              </div>
              <p className="tax-info">
                <b>Ronja (SE, Bellomis Kalas Kula)</b>
                <br/>
                <b>Född:</b> 2015-02-19
                <br/>
                <b>Utställningsmerit:</b> HP Valpklass
                <br/>
                <b>Jaktmerit:</b> Godkännt Anlagsprov i Viltspår
              </p>
            </div>
          </div>
        </div>
        <Sticky topOffset={-50} stickyClass="divider-sticky-one">
          <div className="divider-one"></div>
        </Sticky>
        <div className="box-third">
          <div className="tax-container-3cell">
            <h2 className="secondary-title">Saknade och i kärt minne</h2>
            <div className="tax-box">
              <div className="tax-bild">
                <img className="tax-portrait" src="./public/img/emma.jpg"/>
              </div>
              <p className="tax-info">
                Emma (SE, Hjortskogens Hilda)
                <br/>
                1993-06-11 - 2000-09-05
              </p>
            </div>
            <div className="tax-box">
              <div className="tax-bild">
                <img className="tax-portrait" src="./public/img/elvira.jpg"/>
              </div>
              <p className="tax-info">
                Elvira (SE, Mälarvindens Elvira)
                <br/>
                1998-05-24 - 2012-09-26
              </p>
            </div>
            <div className="tax-box">
              <div className="tax-bild">
                <img className="tax-portrait" src="./public/img/alva.jpg"/>
              </div>
              <p className="tax-info">
                Alva (SE, Dalstagårdens Alva)
                <br/>
                2000-08-06 - 2015-01-30
              </p>
            </div>
          </div>
        </div>
        <Sticky topOffset={-40} stickyClass="divider-sticky-two">
          <div className="divider-two"></div>
        </Sticky>
      </div>
    );
  }
};
