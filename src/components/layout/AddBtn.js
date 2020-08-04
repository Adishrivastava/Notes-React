import React, { useContext } from 'react';
import NotesContext from '../../contexts/NotesContext';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	icon: {
		position: 'absolute',
		bottom: '20px',
		right: '20px',
		display: 'flex',
		justifyContent: 'center',
		alignContent: 'center',
	},
	icons: {
		background: theme.palette.primary.dark,
		color: 'white',
		'&:hover,&:focus': {
			background: theme.palette.primary.main,
		},
	},
}));

function AddBtn() {
	const { addNote, changePage } = useContext(NotesContext);

	const { icons, icon } = useStyles();
	return (
		<div className={icon}>
			<Fab
				className={icons}
				onClick={(e) => {
					addNote();
					changePage(true);
				}}
			>
				<AddIcon />
			</Fab>
		</div>
	);
}

export default AddBtn;
