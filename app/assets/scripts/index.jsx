import React from 'react';
import ReactDOM from 'react-dom';
import { MajorRunes } from './modules/MajorRunes.jsx';
import { InterRunes } from './modules/InterRunes.jsx';
import { MinorRunes } from './modules/MinorRunes.jsx';

ReactDOM.render(
	<MajorRunes />,
	document.getElementById('major-runes')
);

ReactDOM.render(
	<InterRunes />,
	document.getElementById('intermediate-runes')
);

ReactDOM.render(
	<MinorRunes />,
	document.getElementById('minor-runes')
);
