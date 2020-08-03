import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Main from './components/sections/Main';
// import AddNote from './components/layout/AddNote';
import NotesState from './contexts/NotesState';
function App() {
	return (
		<NotesState>
			<div className="App">
				<Navbar />
				{/* <AddNote /> */}
				<Main />
			</div>
		</NotesState>
	);
}

export default App;
