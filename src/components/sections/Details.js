import React, { useContext, useState, useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NotesContext from '../../contexts/NotesContext';
import { Button } from '@material-ui/core';

import ArrowLeftAlt from '@material-ui/icons/ArrowLeft';
import AcUnit from '@material-ui/icons/AcUnit';

const useStyles = makeStyles((theme) => ({
	root: {
		textAlign: 'center',
		marginTop: (props) => (props > 700 ? '20px' : '0px'),
		borderLeft: (props) => (props > 700 ? '2px solid #101216a1' : 'none'),
	},
	titleInput: {
		width: '100%',
		background: '#101216a1',
		borderRadius: '5px',
		border: 'none',
		boxShadow: 'none',
		outline: 'none',
		textAlign: 'center',
		fontSize: '2em',
		color: '#8792be',
		fontWeight: 'bold',
		padding: theme.spacing(1, 0),
	},
	msgInput: {
		width: '100%',
		border: 'none',
		boxShadow: 'none',
		outline: 'none',
		background: '#101216a1',
		borderRadius: '5px',
		height: '60%',
		marginTop: '20px',
		fontSize: '1.1em',
		padding: theme.spacing(1),
		color: '#696e82',
	},
	cont: {
		height: '100%',
		width: '80%',
		marginLeft: '10%',
	},

	backIcon: {
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
		cursor: 'pointer',
	},
	upBtn: {
		marginTop: '15px',
		background: theme.palette.primary.light,
	},
	fullCont: {
		width: '100%',
		height: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	nullIcon: {
		fontSize: '2em',
		width: '4em',
		height: '4em',
		color: '#696e82',
	},
	nullText: {
		color: '#101216a1',
		marginTop: '20px',
	},
}));

function Details() {
	const { currentNote, updateNote, changePage, width, notes } = useContext(
		NotesContext
	);

	const {
		root,
		titleInput,
		msgInput,
		cont,

		backIcon,
		upBtn,
		fullCont,
		nullIcon,
		nullText,
	} = useStyles(width);

	const titleRef = useRef();
	const msgRef = useRef();

	const [Title, setTitle] = useState('');
	const [Msg, setMsg] = useState('');

	useEffect(() => {
		currentNote != null && setTitle(currentNote.title);
		currentNote != null && setMsg(currentNote.msg);
		localStorage.setItem('notes', JSON.stringify(notes));
	}, [currentNote, setTitle, setMsg, notes]);

	return (
		<div className={root}>
			{currentNote != null ? (
				<div className={cont}>
					{width < 800 && (
						<p className={backIcon} onClick={() => changePage(false)}>
							<ArrowLeftAlt /> <span>BACK</span>
						</p>
					)}
					<input
						ref={titleRef}
						onChange={(e) => setTitle(e.target.value)}
						value={Title}
						className={titleInput}
					/>
					<textarea
						ref={msgRef}
						onChange={(e) => setMsg(e.target.value)}
						value={Msg}
						className={msgInput}
					/>
					<Button
						variant="contained"
						elevation={1}
						onClick={() => {
							let datenow = new Date();
							let curTimeNow = datenow.getTime();
							updateNote({
								id: currentNote.id,
								timestamp: curTimeNow,
								title: titleRef.current.value,
								msg: msgRef.current.value,
							});
						}}
						className={upBtn}
					>
						UPDATE
					</Button>
				</div>
			) : (
				<div className={fullCont}>
					<div>
						<AcUnit className={nullIcon} />
						<h1 className={nullText}>ADD NEW NOTE</h1>
					</div>
				</div>
			)}
		</div>
	);
}

export default Details;
