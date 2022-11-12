import React from 'react';
import './App.css';

import Game from './components/Game';

const App = () => {
	return (
		<div className='app'>
			<h1>Tic Tac Toe</h1>
			<Game/>
			<h3>Created By <a href='https://fb.com/bdmohi'>Md Mohi Uddin</a></h3>
		</div>
	);
};

export default App;
