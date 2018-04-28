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
		this.changePage = this.changePage.bind(this);
	}

	changePage(name) {
		this.state.page = name;
		this.forceUpdate();
	}

	render() {
		if (this.state.page === "Idests") {
			return (
				<div>
					<Runes />
					<Navbar changePage={this.changePage} style={this.state.page}/>
				</div>
	    );
		} else if (this.state.page === "Calendar") {
			return (
				<div>
					<Navbar changePage={this.changePage} style={this.state.page}/>
	      	<CalendarPage />
				</div>
			);
		}
  }
}

ReactDOM.render(
	<Page />,
	document.getElementById('browser-window')
);
