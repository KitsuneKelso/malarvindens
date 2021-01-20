import React from "react";
import Sticky from "react-sticky";

export default () => (
  <div className="aktuellt-page">
    <div className="box-first">
      <h1 className="page-title">Aktuellt</h1>
    </div>

    <div className="box-second">
      <p className="aktuellt">Kull plannerad 2021</p>
      <div className="aktuellt-bild-container">
        <div className="aktuellt-bild-container__image">
          <img src="./public/img/kull_b.jpg" alt="Ronja och Loke" />
        </div>
        <p>
          Kull planeras under våren mellan SE18998/2015, SE Uch, SE VCh Bellomis
          Kalas Kula och SE38078/2015, SE Uch, SE VCh Heavenly Hunters Loke.
        </p>
      </div>
    </div>
    <Sticky topOffset={-40} stickyClass="divider-sticky-one">
      <div className="divider-one"></div>
    </Sticky>

    <div className="box-third">
      <p className="aktuellt">Ronja Viltspårprovschampionat 2019</p>
      <div className="aktuellt-bild-container">
        <div className="aktuellt-bild-container__image">
          <img
            src="./public/img/ronja-vch.jpg"
            alt="Ronja Viltspårprovschampionat"
          />
        </div>
        <p>
          Ronja vinner sitt viltspårprovschampionat, samtidigt som Hugo
          (Mälarvindens Arne) vinnner sitt första 1:a-pris, 2019-10-20
        </p>
      </div>
    </div>
    <Sticky topOffset={-40} stickyClass="divider-sticky-two">
      <div className="divider-two"></div>
    </Sticky>

    <div className="box-second">
      <p className="aktuellt">Astrid Viltspårprovschampionat 2019</p>
      <div className="aktuellt-bild-container">
        <div className="aktuellt-bild-container__image">
          <img
            src="./public/img/astrid-vch.jpg"
            alt="Astrid Viltspårprovschampionat"
          />
        </div>
        <p>Astrid vinner sitt viltspårprovschampionat på Värmdö, 2019-05-05</p>
      </div>
    </div>

    <div className="box-third">
      <p className="aktuellt">Ronja Utställningschampionat 2019</p>
      <div className="aktuellt-bild-container">
        <div className="aktuellt-bild-container__image">
          <img
            src="./public/img/ronja-uch.jpg"
            alt="Ronja Utställningschampionat"
          />
        </div>
        <p>Ronja vinner sitt utställningschampionat i Flen, 2019-04-21</p>
      </div>
    </div>

    <div className="box-second">
      <p className="aktuellt">Astrid Viltspårprov 2017</p>
      <div className="aktuellt-bild-container">
        <div className="aktuellt-bild-container__image">
          <img src="./public/img/viltspar.jpg" alt="Astrid Viltspår" />
        </div>
        <p>Astrid får godkännt anlagsprov i viltspår, 2017-04-17</p>
      </div>
    </div>
  </div>
);
