import React from 'react';
import ReactDOM from 'react-dom';
import App from './modules/App.jsx';
import { SiteHeader } from './modules/SiteHeader.jsx';

class Sidebar extends React.Component {
  render() {
    return <SiteHeader />;
  }

}

ReactDOM.render(
  <Sidebar />,
  document.getElementById('sidebar')
);

ReactDOM.render(
  <App majRunes="two"/>,
  document.getElementById('app')
);
