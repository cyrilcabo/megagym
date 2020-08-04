//Material components
import Grid from '@material-ui/core/Grid';

//Utils
import React from 'react';
import Link from 'next/link';

//Styles
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyle = makeStyles(theme => ({
	'@keyframes displayTransition': {
		'0%': {
			opacity: 0,
			display: 'none',
		},
		'100%': {
			opacity: 1,
			display: 'flex',
		}
	},
	root: {
		position: 'fixed',
		top: 0,
		marginTop: 60,
		zIndex: 2,
		height: 0,
		backgroundColor: '#212121',
		transition: 'height 0.3s',
		boxShadow: '0 2px 2px black',
	},
	active: {
		height: 180,
		'& div.MuiGrid-item': {
			animation: '$displayTransition 0.3s',
			display: 'flex',
			opacity: 1,
		}
	},
	linkContainer: {
		padding: '15px 0px',
		display: 'none',
		opacity: 0,
	},
	link: {
		transition: 'background-color 0.1s',
		display: 'flex',
		justifyContent: 'center',
		'&:hover': {
			backgroundColor: '#3a3939',
		}
	},
	navLinks: {
		color: 'white',
		margin: '12px 0px',
		fontSize: '1.2rem',
		[theme.breakpoints.down('sm')]: {
			fontSize: '1rem',
		}
	}
}));


const NavDrawer = (props) => {
	const classes = useStyle();
	const navLinks = props.navs.map((item, key) => {
		return <Grid item key={key} className={classes.link} onClick={() => setTimeout(props.setActive, 150)}>
			<Link href={item.link}>
				<Grid item container xs={10}>
					<p className={classes.navLinks}> {item.name} </p>
				</Grid>
			</Link>
		</Grid>;
	})
	return (
		<Grid item xs={12} container justify="center" className={[classes.root, props.active ?classes.active :""].join(' ')}>
			<Grid item container direction="column" className={[classes.linkContainer].join(' ')}>
				{navLinks}
			</Grid>
		</Grid>
	);
}

export default NavDrawer;