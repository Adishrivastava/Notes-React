import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Note from '../layout/Note';

import { useContext } from 'react';
import NotesContext from '../../contexts/NotesContext';

const useStyles = makeStyles((theme) => ({
	note: {
		// overflowY: 'scroll',
	},
	h2: {
		textAlign: 'center',
		color: '#8792be',
	},
	notAva: {
		textAlign: 'center',
	},
}));

function Notes() {
	const classes = useStyles();
	const { notes, search } = useContext(NotesContext);
	return (
		<div id="notesList">
			<h2 className={classes.h2}>ALL NOTES</h2>
			{notes.length > 0 ? (
				<Grid className={classes.note}>
					{
						<>
							{notes.map(
								(note) =>
									(search === '' ||
										note.title.toLowerCase().includes(search)) && (
										<Note key={note.id} note={note} />
									)
							)}
						</>
					}
				</Grid>
			) : (
				<p className={classes.notAva}>No notes available.</p>
			)}
		</div>
	);
}

export default Notes;
