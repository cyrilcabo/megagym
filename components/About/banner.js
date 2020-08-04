//Material components
import Grid from '@material-ui/core/Grid';

//Styles
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyle = makeStyles(theme => ({
	root: {
		minHeight: 530,
		backgroundColor: '#111111',
		color: 'white',
		textAlign: 'center',
		[theme.breakpoints.down('sm')]: {
			minHeight: 400,
		},
		[theme.breakpoints.down('xs')]: {
			minHeight: 300,
		}
	},
	backgroundDesign: {
		fontSize: '15rem',
		margin: 0,
		opacity: 0.04,
		position: 'absolute',
		[theme.breakpoints.down('md')]: {
			fontSize: '12rem',
		},
		[theme.breakpoints.down('sm')]: {
			fontSize: '8rem',
		},
		[theme.breakpoints.down('xs')]: {
			fontSize: '6rem',
			letterSpacing: 2,
		}
	},
	title: {
		fontSize: '4rem',
		margin: 0,
		[theme.breakpoints.down('md')]: {
			fontSize: '3.5rem'
		},
		[theme.breakpoints.down('sm')]: {
			fontSize: '2.5rem',
		},
		[theme.breakpoints.down('xs')]: {
			fontSize: '2rem',
		}
	},
}));

const AboutBanner = () => {
	const classes = useStyle();
	return (
		<Grid item xs={12} container justify="center" alignItems="center" className={classes.root}>
			<h1 className={classes.backgroundDesign}> m e g a <span style={{color: '#dc2222'}}>G Y M</span> </h1>
			<Grid item>
				<h1 className={classes.title}> Your number one producer of <span style={{color: '#dc2222'}}>Johnny Bravos</span>. </h1>
			</Grid>
		</Grid>
	);
}

export default AboutBanner;