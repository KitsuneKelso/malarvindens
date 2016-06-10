import { Route } from 'react-router';
import React from 'react';

import Start from './start.jsx';
import OmOss from './about.jsx';
import VaraHundar from './varahundar.jsx';
import Tax from './tax.jsx';
import Aktuellt from './aktuellt.jsx';

export default [
  <Route path="/" component={Start}/>,
  <Route path="/om-oss" component={OmOss}/>,
  <Route path="/hundar" component={VaraHundar}/>,
  <Route path="/tax" component={Tax}/>,
  <Route path="/aktuellt" component={Aktuellt}/>,
];
