//Material components
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

//SVG images
import Background from '../../public/images/lower_design.svg';

//Utils
import React from 'react';

//Styles
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyle = makeStyles(theme => ({
	root: {
		minHeight: 386,
		position: 'relative',
		color: 'white',
		textAlign: 'center',
		marginBottom: 50,
		[theme.breakpoints.down('sm')]: {
			backgroundColor: 'black',
			minHeight: 326,
		}
	},
	background: {
		position: 'absolute',
		height: '100%',
		width: '100%',
		top: 0,
		zIndex: -1,
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		}
	},
	title: {
		fontSize: '2rem',
		margin: '0px 0px 30px 0px',
		[theme.breakpoints.down('sm')]: {
			fontSize: '1.8rem',
		},
		[theme.breakpoints.down('xs')]: {
			fontSize: '1.5rem',
		}
	},
	details: {
		fontSize: '1.2rem',
		margin: '0px 0px  30px 0px',
		[theme.breakpoints.down('sm')]: {
			fontSize: '1rem',
		}
	},
	textfield: {
		backgroundColor: 'white',
		color: 'black',
		height: '100%',
		display: 'flex',
		alignItems: 'center',
		'& > div.MuiInputBase-root': {
			height: '100%',
			'&:after': {
				borderBottom: 0,
			},
			'&:before': {
				borderBottom: 0,
			},
			'& > input': {
				fontSize: '1.2rem',
				padding: "0px 15px",
				[theme.breakpoints.down('xs')]: {
					fontSize: '1rem'
				}
			}
		},
		[theme.breakpoints.down('xs')]: {
			height: 40,
		}
	},
	btn: {
		backgroundColor: '#dc2222',
		color: 'white',
		fontWeight: 600,
		fontSize: '1.5rem',
		fontFamily: 'agencyFB',
		padding: '0px 30px',
		[theme.breakpoints.down('xs')]: {
			width: '100%',
			fontSize: '1.2rem',
		}
	},
	msg: {
		fontSize: '1.2rem',
		color: '#dc2222',
	}
}));

const ServicesNewsletter = () => {
	const classes = useStyle();
	const [email, setEmail] = React.useState("");
	const [msg, setMsg] = React.useState({status: false, msg: ""});
	const handleEmail = (e) => setEmail(e.target.value);
	const handleSubmit = () => {
		if (email.length < 5) {
			setMsg({status: true, msg: "Email must be atleast 5 characters."});
		} else {
			setMsg({status: true, msg: `Email "${email}" subscribed!`});
			setEmail("");
		}
	}
	return (
		<Grid item xs={12} className={classes.root} container justify="center" alignItems="center">
			<Background className={classes.background} viewBox="0 0 1365.069 445.995" preserveAspectRatio="none" />
			<Grid item container xs={11} md={8} direction="column" alignItems="center" justify="center">
				<Grid item>
					<h3 className={classes.title}> SUBSCRIBE TO NEWSLETTER </h3>
				</Grid>
				<Grid item>
					<p className={classes.details}> 
						mega<span style={{color: '#dc2222'}}>GYM</span> ensures that you get the best possible service. To know
						more about our latest deals and offers, subscribe to our newsletter!
					</p> 
				</Grid>
				<Grid item container justify="center">
					<Grid item xs={11} sm={6} md={5}>
						<form onSubmit={((e) => {e.preventDefault(); handleSubmit();})} style={{height: '100%'}}>	
							<TextField 
								fullWidth 
								variant="filled" 
								className={classes.textfield} 
								placeholder={"Email address"}
								value={email}
								onChange={handleEmail}
							/>
							<input type="submit" style={{display: 'none'}} />
						</form>
					</Grid>
					<Grid item xs={11} sm={3} md={2} container justify="flex-start">
						<Button className={classes.btn} onClick={handleSubmit}> SUBSCRIBE </Button>
					</Grid>
				</Grid>
				{msg.status
					?<Grid item>
						<p className={classes.msg}> {msg.msg} </p>
					</Grid>
					:""
				}
			</Grid>
		</Grid>
	);
}

export default ServicesNewsletter;