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
              Kull född den 1 Maj 2016:
            </p>
            <div className="aktuellt-bild-container">
              <div className="aktuellt-left-col">
                <h2>
                  OBS!
                </h2>
                <p>
                  Efter återbud från en av valpköparna till en tik så söker vi nu ett nytt kärleksfullt hem till henne.
                </p>
              </div>
              <img className="aktuellt-valpar-bild" src="./public/img/valpar.jpg"/>
            </div>
            <div className="aktuellt-right-col">
              <p>
                Mamma Ida med <br />
                Mälarvindens Arne, Astrid, Alma & Agnes
              </p>
            </div>
          </div>
          <Sticky topOffset={-40} stickyClass="divider-sticky-one">
            <div className="divider-one"></div>
          </Sticky>
          <div className="box-third">
            <div className="aktuellt-container">
              <p className="aktuellt-header">
                Efter de stolta föräldrarna:
              </p>
              <div className="aktuellt-box">
                <img className="aktuellt-bild" src="./public/img/ida_a.jpg"/>
                <p>
                  Ida (SE VCH, Hissmovallens Elvira)
                </p>
              </div>
              <div className="aktuellt-box">
                <img className="aktuellt-bild" src="./public/img/emil.jpg"/>
                <p>
                  Emil (SE UvCH, FI UvCH, SE VCH, Bellomis USA)
                </p>
              </div>
              <div className="aktuellt-text">

              </div>
            </div>
          </div>
        <Sticky topOffset={-40} stickyClass="divider-sticky-two">
          <div className="divider-two"></div>
        </Sticky>
      </div>
    );
  }
}
