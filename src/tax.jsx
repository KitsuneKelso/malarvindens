import React from 'react';
import Sticky from 'react-sticky';

export default class Tax extends React.Component {
  render() {
    return (
      <div className="tax-page">
        <h1 className="page-title">Livet med Taxar</h1>
        <p className="tax-intro">
          Livet med taxar blir aldrig långtråkigt.
          <br /><br />
          Ett av våra stora intressen är viltspårning med våra hundar. Här är en
          film från min spårträning med vår Ida, hösten 2014.
        </p>
        <div className="video-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/gyGvnR7dK4g" frameBorder="0" allowFullScreen></iframe>
        </div>
        <p className="tax-intro">
          Fortsätt nedåt så får ni även ta del av vardagslivet med våra taxar!
        </p>
        <div className="text-break pic-3"></div>
        <div className="box-second">
          <div className="pic-box-one">
            <div className="pic-left">
              <img className="pic-one" src="./public/img/kollage2.png" alt="Kollage 2" />
            </div>
            <p className="pic-text-right">
              Våra taxar är mycket sociala och trevliga hundar som tycker om
              att få vara med i de flesta vardagsbestyren. Under den varma
              årstiden befinner de sig mestadels ute i trädgården och på
              uteplatsen.
              <br /><br />
              Tillsammans med familjen deltar de gärna i allt från
              trädgårdsarbete till grillning på altanen. De ligger gärna och
              slappar i sin korg i solen efter att ha busat på tomten. Kort
              sagt är de riktiga livsnjutare.
            </p>
          </div>
        </div>
        <Sticky topOffset={-40} stickyClass="divider-sticky-one">
          <div className="divider-one"></div>
        </Sticky>
        <div className="box-third">
          <div className="pic-box-two">
            <div className="pic-right">
              <img className="pic-two" src="./public/img/kollage1.png" alt="Kollage 1" />
            </div>
            <p className="pic-text-left">
              Att taxen är en stor hund i liten förpackning stämmer verkligen.
              De älskar att gå långpromenader i skog och mark och vår lilla
              Ida älskar att man kastar pinnar och kottar under promenaden.
              <br /><br />
              Ibland går vi till sjön eller havet och där svalkar de gärna av sig i
              vattnet. Vi brukar även leka godissök uppe på stenar och i
              barken på träd, en nyttig aktivitet för både nos och hjärna.
            </p>
          </div>
        </div>
        <Sticky topOffset={-40} stickyClass="divider-sticky-two">
          <div className="divider-two"></div>
        </Sticky>
        <div className="text-break pic-4"></div>
      </div>
    );
  }
}
