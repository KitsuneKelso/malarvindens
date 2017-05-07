import React from 'react';
import Sticky from 'react-sticky';

export default class VaraHundar extends React.Component {
  render() {
    return (
      <div className="vara-hundar">

        <div className="box-first">
          <h1 className="page-title">Våra Hundar</h1>
        </div>

        <div className="box-second">
          <div className="tax-box">
            <div className="tax-bild">
              <img className="tax-portrait" src="./public/img/ida.jpg" alt="Ida" />
            </div>
            <div className="tax-info">
              <p>
                <b>Ida (SE VCH, Hissmovallens Elvira)</b>
                <br />
                <b>Född:</b> 2012-11-26<br />
                <b>Utställningsmerit:</b> Excellent<br />
                <b>Jaktmerit:</b> Viltspårschampion
              </p>
            </div>
          </div>
          <div className="tax-box">
            <div className="tax-bild">
              <img className="tax-portrait" src="./public/img/ronja.jpg" alt="Ronja" />
            </div>
            <div className="tax-info">
              <p>
                <b>Ronja (SE, Bellomis Kalas Kula)</b>
                <br />
                <b>Född:</b> 2015-02-19
                <br />
                <b>Utställningsmerit:</b> Excellent, HP i Valpklass
                <br />
                <b>Jaktmerit:</b> Godkännt Anlagsprov i Viltspår
              </p>
            </div>
          </div>
          <div className="tax-box">
            <div className="tax-bild">
              <img className="tax-portrait" src="./public/img/astrid.jpg" alt="Astrid" />
            </div>
            <div className="tax-info">
              <p>
                <b>Astrid (SE, Mälarvindens Astrid)</b>
                <br />
                <b>Född:</b> 2016-05-01
                <br />
                <b>Utställningsmerit:</b> BIM & HP i Valpklass
                <br />
                <b>Jaktmerit:</b> Godkännt Anlagsprov i Viltspår
              </p>
            </div>
          </div>
        </div>
        <Sticky topOffset={-50} stickyClass="divider-sticky-one">
          <div className="divider-one"></div>
        </Sticky>

        <div className="box-first">
          <h2 className="page-title">Våra Kullar</h2>
        </div>

        <div className="box-third">
          <div className="tax-grupp">
            <h2 className="secondary-title">
              A-kullen (2016-05-01)
            </h2>
            <p>
              Efter Ida (SE VCH, Hissmovallens Elvira) och <br />
              Emil (SE UvCH, FI UvCH, SE VCH, Bellomis USA)
            </p>
            <img className="tax-grupp__bild" src="./public/img/grupp.jpg" alt="Kull A" />
            <p className="tax-grupp__bild-text">
              Astrid, Agnes, Arne och Alma (fr. vä.)
            </p>
          </div>
          <div className="tax-grupp">
            <h2 className="secondary-title">
              Ny kull planneras till våren 2018
            </h2>
            <p className="tax-grupp__bild-text">
              Efter Ronja (Bellomis Kallaskula)
            </p>
          </div>
        </div>
        <Sticky topOffset={-40} stickyClass="divider-sticky-two">
          <div className="divider-two"></div>
        </Sticky>

        <div className="box-first">
          <h2 className="page-title">Saknade och i kärt minne</h2>
        </div>

        <div className="box-second">
          <div className="tax-box">
            <div className="tax-bild">
              <img className="tax-portrait" src="./public/img/emma.jpg" alt="Emma" />
            </div>
            <div className="tax-info">
              <p>
                Emma (SE, Hjortskogens Hilda)
                <br />
                1993-06-11 - 2000-09-05
              </p>
            </div>
          </div>
          <div className="tax-box">
            <div className="tax-bild">
              <img className="tax-portrait" src="./public/img/elvira.jpg" alt="Elvira" />
            </div>
            <div className="tax-info">
              <p>
                Elvira (SE, Mälarvindens Elvira)
                <br />
                1998-05-24 - 2012-09-26
              </p>
            </div>
          </div>
          <div className="tax-box">
            <div className="tax-bild">
              <img className="tax-portrait" src="./public/img/alva.jpg" alt="Alva" />
            </div>
            <div className="tax-info">
              <p>
                Alva (SE, Dalstagårdens Alva)
                <br />
                2000-08-06 - 2015-01-30
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
