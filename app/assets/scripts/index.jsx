import React from 'react';
import ReactDOM from 'react-dom';
import { MajorRunes } from './modules/MajorRunes.jsx';
import { InterRunes } from './modules/InterRunes.jsx';
import { MinorRunes } from './modules/MinorRunes.jsx';
import { Navbar } from './modules/SiteNavbar.jsx';
import { RuneApp } from './modules/RuneApp.jsx';
import { CalendarApp } from './modules/CalendarApp.jsx';
import { CalendarPage } from './modules/CalendarPage.jsx';
import { Runes } from './modules/Runes.jsx';

class Page extends React.Component {
	constructor(props) {
		super(props);
		this.state = { page: "Calendar" }
	}

	render() {
		if (this.state.page === "Runes") {
			return (
	      <Runes />
	    );
		} else if (this.state.page === "Calendar") {
			return (
				<CalendarPage />
			);
		}
  }
}

ReactDOM.render(
	<Navbar />,
	document.getElementById('site-navbar')
);

ReactDOM.render(
	<Page />,
	document.getElementById('browser-window')
);




/*
const currentPage = "Idests";

if (currentPage === "Idests") {
	ReactDOM.render(
		<MajorRunes />,
		document.getElementById('sidebar-top')
	);

	ReactDOM.render(
		<InterRunes />,
		document.getElementById('sidebar-middle')
	);

	ReactDOM.render(
		<MinorRunes />,
		document.getElementById('sidebar-bottom')
	);

	ReactDOM.render(
		<RuneApp />,
		document.getElementById('idest-area')
	);
}

else if (currentPage === "Calendar") {
	ReactDOM.render(
		<CalendarApp />,
		document.getElementById('idest-area')
	);
}
*/
