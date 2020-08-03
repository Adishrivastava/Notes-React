export default (state, action) => {
	switch (action.type) {
		case 'CHANGE_WIDTH':
			return {
				...state,
				width: action.payload,
			};
		case 'CHANGE_PAGE':
			return {
				...state,
				page: action.payload,
			};
		case 'ADD_NOTE':
			return {
				...state,
				notes: [...state.notes, action.payload],
				currentNote: action.payload,
			};
		case 'SET_CURRENT_NOTE':
			return {
				...state,
				currentNote: action.payload,
			};
		case 'UPDATE_NOTE':
			let updatedNote = state.notes;
			let upid = updatedNote.findIndex(
				(note) => note.id === action.payload.id
			);

			return {
				...state,
				notes: [
					...updatedNote.slice(0, upid),
					action.payload,
					...updatedNote.slice(upid + 1),
				],
				currentNote: action.payload,
			};
		case 'SET_SEARCH':
			return {
				...state,
				search: action.payload,
			};
		case 'REMOVE_NOTE':
			const newNotes = state.notes.filter((note) => {
				return note.id !== action.payload;
			});
			let curNote;
			state.currentNote && state.currentNote.id === action.payload
				? (curNote = null)
				: (curNote = state.currentNote);
			return {
				...state,
				notes: newNotes,
				currentNote: curNote,
			};

		default:
			return state;
	}
};
