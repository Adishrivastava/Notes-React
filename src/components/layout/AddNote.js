import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Paper, Button } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles((theme) => ({
	layoutCont: {
		position: 'absolute',
		top: '0px',
		left: '0px',
		right: '0px',
		bottom: '0px',
		background: 'rgba(96, 99, 101, 0.486)',
		width: '100%',
		height: '100vh',
		zIndex: '10',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	addCont: {
		width: '600px',
		background: 'white',
		padding: theme.spacing(2, 0, 3, 0),
		[theme.breakpoints.down('sm')]: {
			width: '80%',
		},
	},
	icon: {
		float: 'right',
		right: '20px',
	},
	form: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
	},
	input: {
		width: '80%',
	},
	heading: {
		textAlign: 'center',
		margin: theme.spacing(0, 0, 2, 0),
	},
	button: {
		marginTop: '20px',
	},
}));

function AddNote() {
	const props = 700;
	const {
		layoutCont,
		addCont,
		form,
		heading,
		button,
		input,
		icon,
	} = useStyles(props);
	return (
		<div className={layoutCont}>
			<Paper className={addCont}>
				<h2 className={heading}>
					Add new Note
					<ClearIcon className={icon} />
				</h2>
				<form noValildate className={form}>
					<TextField
						label="Title"
						className={input}
						placeholder="enter the title"
					/>
					<Button className={button} variant="contained" color="primary">
						ADD
					</Button>
				</form>
			</Paper>
		</div>
	);
}

export default AddNote;
