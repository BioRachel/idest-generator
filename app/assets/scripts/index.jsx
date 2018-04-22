import React from 'react';
import ReactDOM from 'react-dom';
import App from './modules/App.jsx';
import SiteHeader from './modules/SiteHeader.jsx';

class Sidebar extends React.Component {


  handleClick() {
    alert('Hello there from ');
  }

  render() {
    return <SiteHeader onClick={this.handleClick}/>;
  }

}

ReactDOM.render(
  <Sidebar />,
  document.getElementById('sidebar')
);

ReactDOM.render(
  <App majRunes="one"/>,
  document.getElementById('app')
);
