import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { useContext } from 'react';
import NotesContext from '../../contexts/NotesContext';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
	notePaper: {
		background: '#0f1116a5',
		margin: theme.spacing(3, 6),
		height: 'auto',
		color: '#848893',
		textAlign: 'left',
		cursor: 'pointer',
	},
	noteTitle: {
		padding: theme.spacing(1, 2),
		margin: '0',
		color: (props) => (props ? theme.palette.primary.main : 'inherit'),
		'&:hover': {
			color: theme.palette.primary.main,
		},
	},
	bottomRow: {
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
		textAlign: 'right',
		padding: theme.spacing(0, 0, 1, 0),
		margin: '0',
		fontSize: '0.8em',
	},
	iconsCSS: {
		margin: theme.spacing(0, 2),
	},
}));

function Note({ note }) {
	const {
		setCurrentNote,
		removeNote,
		calculateTime,
		changePage,
		currentNote,
	} = useContext(NotesContext);

	let boolean = false;

	if (currentNote) {
		if (currentNote.id === note.id) {
			boolean = true;
		}
	}

	const { notePaper, noteTitle, bottomRow, iconsCSS } = useStyles(boolean);

	let date = new Date();
	let curTime = date.getTime();

	return (
		<Paper elevation={2} className={notePaper}>
			<h3
				className={noteTitle}
				onClick={() => {
					setCurrentNote(note);
					changePage(true);
				}}
			>
				{note.title}
			</h3>
			<p className={bottomRow}>
				<span>edited {calculateTime(note.timestamp, curTime)} ago</span>
				<DeleteIcon
					className={iconsCSS}
					onClick={() => removeNote(note.id)}
				/>
			</p>
		</Paper>
	);
}

export default Note;
