import React from 'react';
import s from './Settings.module.css';

const Settings = (props) => {
	return (	
		<div className={s.settingsText}>
			<div>
				<h2>Settings</h2>
			</div>
			<div>
				<button className={s.buttonSettings}>open</button>
			</div>
		</div>
	);
}

export default Settings;