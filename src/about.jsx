import React from 'react';
import ReactDOM from 'react-dom';
import Sticky from 'react-sticky';

export default class OmOss extends React.Component {
  render() {
    return (
      <div className="about">
        <div className="box-first">
          <h1 className="om-title">Om Oss</h1>
        </div>
        <div className="box-second">
          <div className="contact-main">
            <div className="contact-text-top">
              <p>
                Redan som 16-åring visste jag vad jag ville arbeta med,
                djursjukvårdare förstås. Efter att ha praktiserat detta genom
                att regniga dagar försöka rädda alla stackars daggmaskar från
                att bli ihjältrampade av mina vänner och bära hem överkörda och
                skadade paddor visste nog både mina föräldrar och jag att detta
                yrke skulle passa mig som handen i handsken.
                <br/><br/>
                På den tiden fanns ingen utbildning till djursjukvårdare så efter avslutad
                grundskola tog jag saken i egna händer. Jag ringde upp samtliga
                veterinärer i Stockholmsregionen och fick napp då jag pratade
                med veterinär Sven-Åke Tevell på Södertälje Djurklinik. Hans
                sköterska skulle sluta och han var i behov av en ny
                djursköterske-lärling. Jag arbetade hos honom i ett år, både på
                kliniken och på hans hästgård. Samtidigt pluggade jag in
                Anatomi, Fysiologi mm på kvällstid på Stockholms
                Hundägareförening.
              </p>
            </div>
            <img className="contact-history" src="./public/img/birgitta-16.jpg" alt="Birgitta 16 år"/>
            <p className="img-txt-right">
              Birgitta, här 16 år gammal,
              <br/>
              vaccinerar strävhårig tax.
            </p>
            <div className="contact-text-mid">
              <p>
                Efter att jag träffade min man flyttade jag till Linköping och
                började där arbeta på Linköpings Djursjukhus samt pluggade Farmacologi
                på högskolan. Under senare delen av mitt yrkesverksamma liv har jag
                sadlat om och arbetat som försäljare inom guldsmedsbranschen,
                men hundarna har alltid varit min största hobby.
              </p>
            </div>
            <div className="contact-bottom-pic">
              <img className="contact-avatar" src="./public/img/birgitta.jpg" alt="Birgitta tillsammans med nyblivna champion Ida"/>
              <p className="img-txt-left">
                Birgitta tillsammans med Ida,
                <br/>
                nybliven viltspårschampion.
              </p>
            </div>
            <div className="contact-text-bot">
              <p>
                Mälarvindens Kennel fick sin första kull 1998. Det var vår
                första tax, Mälarvindens stammoder Hjortskogens Hilda, som
                startade verksamheten i vår kennel. Hon fick sju friska och
                fina valpar, en stor kull för nybörjare. Allt gick jättebra och
                vi hittade fina hem till sex av valparna, men behöll själva en
                tik som hette Mälarvindens Elvira.
                <br/><br/>
                År 2001 flyttade hela vår familj, med taxar till Los Angeles,
                Kalifornien och vi valde att lägga Mälarvindens Kennel i
                viloläge. Det är först nu 2016 som vi väljer att aktivera vårt
                kennelnamn igen och börja om igen. Det beslutet har vi kommit
                fram till då det nu passar utmärkt med tanke på hur vår
                livssituation ser ut. Våra barn har flugit ur boet och vi har
                både tid och lust att pyssla med det vi brinner för. Dessutom
                har jag nu slutat arbeta och kan lägga min tid på att ta hand
                om mina hundar fullt ut.
                <br/><br/>
                Vi inleder vårt Kennelarbete med att planera för en valpkull
                från vår lilla Ida, Hissmovallens Elvira.
                <br/><br/>
                Information om detta finns under fliken aktuellt.
                <br/><br/>
                På återseende,
              </p>
              <p className="signature">
                Birgitta Gustafsson med Familj
              </p>
            </div>
          </div>
        </div>
        <Sticky topOffset={-40} stickyClass="divider-sticky-one">
          <div className="divider-one"></div>
        </Sticky>
        <div className="box-third">
          <div className="contact-img-box">
            <img className="contact-left-img" src="./public/img/birgitta-thorbjorn.jpg" alt="Birgitta och Thorbjörn Gustafsson"/>
            <img className="contact-right-img" src="./public/img/huset.jpg" alt="Huset i Åkersberga"/>
          </div>
        </div>
        <Sticky topOffset={-40} stickyClass="divider-sticky-two">
          <div className="divider-two"></div>
        </Sticky>
      </div>
    );
  }
}
