//Material Components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';

//Custom components
import NavDrawer from './navdrawer';

//Utils
import React from 'react';
import Link from 'next/link';

//Material Styles
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyle = makeStyles(theme => ({
	root: {
		backgroundColor: 'black',
		zIndex: 3,
	},
	toolbar: {
		minHeight: 60,
	},
	brandTitle: {
		margin: 0,
		fontSize: '1.6rem',
	},
	navLinks: {
		margin: 0,
	},
	linkContainer: {
		display: 'flex',
		fontSize: '1.1rem',
		'& > div.MuiGrid-item': {
			marginLeft: 30,
			'& > p': {
				cursor: 'pointer',
				'&:hover': {
					color: '#dc2222',
				}
			},
			[theme.breakpoints.down('sm')]: {
				margin: '0px 15px'
			},
		},
	},
	menuIcon: {
		borderRadius: '10px', 
		padding: 5,
		transition: 'background-color 0.1s',
		'&:active': {
			backgroundColor: 'gray'
		}
	},
	menuIconLines: {
		width: 20, 
		height: 2, 
		backgroundColor: 'white', 
		margin: '3px 0px'
	}
}));

const Navbar = (props) => {
	const classes = useStyle();
	const navLinks = props.navs.map((item, index) => {
		return <Grid item key={index}>
			<Link href={item.link}>
				<p className={classes.navLinks}> {item.name} </p>
			</Link>
		</Grid>;
	})
	return ( 
		<React.Fragment>
			<AppBar position="fixed" className={classes.root}>
				<Grid item xs={12} container justify="center">
					<Grid item xs={11} md={10}>	
						<Toolbar className={classes.toolbar}>
							<Grid item xs={12} container justify="space-between" alignItems="center">
								<Grid item style={{display: 'flex', alignItems: 'center'}}>
									<Grid item>
										<Hidden mdUp>
											<IconButton style={{padding: 2}} onClick={props.setActive}>
												<Grid item container direction="column" className={classes.menuIcon}>
													{[1,2,3].map((item, key) => {
														return <Grid item key={key}>
															<div className={classes.menuIconLines} />
														</Grid>	
													})}
												</Grid>
											</IconButton>
										</Hidden>
									</Grid>
									<Grid item>
										<h1 className={classes.brandTitle}> mega<span style={{color: '#dc2222'}}>GYM</span> </h1>
									</Grid>
								</Grid>
								<Grid item className={classes.linkContainer}>
									<Hidden smDown>
										{navLinks}
									</Hidden>
								</Grid>
							</Grid>
						</Toolbar>
					</Grid>
				</Grid>
			</AppBar>
			<Toolbar className={classes.toolbar}/>
		</React.Fragment>
	);
}

export default Navbar;