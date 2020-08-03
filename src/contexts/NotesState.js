import React, { useReducer } from 'react';
import NotesContext from './NotesContext';
import NotesReducer from './NotesReducer';
import uuid from 'react-uuid';

function NotesState(props) {
	const localNotes = localStorage.getItem('notes');

	const initialState = {
		notes: localNotes ? JSON.parse(localNotes) : [],
		page: false,
		currentNote: null,
		search: '',
		searched: [],
		width: 1000,
	};

	const [state, dispatch] = useReducer(NotesReducer, initialState);

	//! change width
	const changeWidth = (width) => {
		dispatch({ type: 'CHANGE_WIDTH', payload: width });
	};

	//! changePage
	const changePage = (bool) => {
		dispatch({ type: 'CHANGE_PAGE', payload: bool });
	};

	//! getting time difference
	const calculateTime = (date_before, date_now) => {
		var delta = Math.abs(date_now - date_before) / 1000;

		var days = Math.floor(delta / 86400);
		delta -= days * 86400;

		var hours = Math.floor(delta / 3600) % 24;
		delta -= hours * 3600;

		var minutes = Math.floor(delta / 60) % 60;
		delta -= minutes * 60;

		var seconds = Math.floor(delta % 60);
		const diff = minutes + ' m ' + seconds + ' s';
		return diff;
	};

	//! adding a note
	const addNote = (text, title) => {
		let date = new Date();
		let curTime = date.getTime();
		const current = {
			id: uuid(),
			timestamp: curTime,
			title: 'Enter the Title',
			msg: 'fill some details',
		};
		dispatch({
			type: 'ADD_NOTE',
			payload: current,
		});
	};

	//! setting current note
	const setCurrentNote = (note) => {
		dispatch({ type: 'SET_CURRENT_NOTE', payload: note });
	};

	//! updating the note
	const updateNote = (note) => {
		dispatch({ type: 'UPDATE_NOTE', payload: note });
	};

	//! setting search
	const updateSearch = (text) => {
		dispatch({ type: 'SET_SEARCH', payload: text });
		dispatch({ type: 'UPDATE_NOTES', payload: text });
	};

	//! removing note
	const removeNote = (id) => {
		dispatch({ type: 'REMOVE_NOTE', payload: id });
	};

	return (
		<NotesContext.Provider
			value={{
				notes: state.notes,
				currentNote: state.currentNote,
				search: state.search,
				searched: state.searched,
				page: state.page,
				width: state.width,
				changeWidth,
				changePage,
				calculateTime,
				addNote,
				updateSearch,
				setCurrentNote,
				updateNote,
				removeNote,
			}}
		>
			{props.children}
		</NotesContext.Provider>
	);
}

export default NotesState;
