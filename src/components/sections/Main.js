import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Notes from './Notes';
import Details from './Details';
import { useEffect } from 'react';
import { useContext } from 'react';
import NotesContext from '../../contexts/NotesContext';
import AddBtn from '../layout/AddBtn';

const useStyles = makeStyles({
	root: {
		width: '100%',
		height: '90vh',
		display: 'grid',
		gridTemplateColumns: (props) => (props > 800 ? '6fr 11fr' : '1fr'),
	},
});

function Main() {
	const { page, width, changeWidth } = useContext(NotesContext);

	const updateWidth = () => {
		changeWidth(window.innerWidth);
	};

	const { root } = useStyles(width);

	useEffect(() => {
		window.addEventListener('resize', updateWidth);
		return () => window.removeEventListener('resize', updateWidth);
	});

	return (
		<div className={root}>
			<AddBtn />
			{width > 800 ? (
				<>
					<Notes />
					<Details />
				</>
			) : (
				<>{page ? <Details /> : <Notes />}</>
			)}
		</div>
	);
}

export default Main;
