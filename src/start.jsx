import React from 'react';
import ReactDOM from 'react-dom';
import Sticky from 'react-sticky';

export default class Start extends React.Component {
  render() {
    return (
      <div className="start-page">
        <div className="box-first">
          <h1 className="page-title">Välkommen till Mälarvindens Kennel</h1>
          <p className="p-first">
            Vi är en kennel i liten skala i hemmiljö. Vi är belägna i Roslagens
            famn, nära havet i Åkersberga, drygt 3 mil nordöst om Stockholm.
          <br/><br/>
            Hos oss är taxarna våra kära familjemedlemmar som lever nära oss i en trygg
            hemmiljö. Det bidrar till en mental stabilitet och sunda och trevliga
            individer med mycket personlighet och charm.
          </p>
        </div>
        <div className="text-break pic-1"></div>
        <div className="box-second">
          <p className="p-second">
            Mälarvindens stammoder är Hjortskogens Hilda. Hon härstammar
            från Hjortskogens kennel i Östergötland, som ägdes av min makes syster.
          <br/><br/>
            Vår målsättning i vårt avelsarbete är att i första hand föda upp
            sunda taxar som fungerar utmärkt som familjehundar och blir de sociala
            och trevliga hundar som man vill leva tillsammans med i många år framöver.
          </p>
        </div>
        <Sticky topOffset={-40} stickyClass="divider-sticky-one">
          <div className="divider-one"></div>
        </Sticky>
        <div className="text-break pic-2"></div>
        <div className="box-third">
          <p className="p-third">
            Förutom att vi tycker mycket om att umgås med våra hundar socialt i form
            av promenader, lek- och mysstunder så tycker vi att det är jätteroligt
            att arbeta med viltspår tillsammans. Då får hunden tillfälle att utnyttja
            sina jaktegenskaper och jobba på ett givande sätt tillsammans med husse
            eller matte. Det stärker banden mellan ägare och hund att få samarbeta
            ute i naturen. Vår lilla Ida (Hissmovallens Elvira) utförde sitt första
            anlagsprov i viltspår straxt före sin 2-årsdag och en månad senare, efter
            3 stycken ettor i öppna viltspår lyckades hon bli Viltspårschampion.
          </p>
        </div>
        <Sticky topOffset={-60} stickyClass="divider-sticky-two">
          <div className="divider-two"></div>
        </Sticky>
      </div>
    );
  }
};
