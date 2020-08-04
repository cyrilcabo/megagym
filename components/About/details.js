//Material components
import Grid from '@material-ui/core/Grid';

//Styles
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyle = makeStyles(theme => ({
	root: {
		minHeight: 435,
		backgroundColor: '#e6e3e3',
		marginBottom: 90,
		textAlign: 'center',
		[theme.breakpoints.down('xs')]: {
			paddingBottom: 60,
		},
		'& h2': {
			fontSize: '3.5rem',
			margin: '70px 0px 40px 0px',
			[theme.breakpoints.down('md')]: {
				fontSize: '3rem',
			},
			[theme.breakpoints.down('sm')]: {
				fontSize: '2.5rem',
				marginBottom: 30,
			},
			[theme.breakpoints.down('xs')]: {
				fontSize: '2rem',
				marginBottom: 25,
			}
		},
		'& p': {
			fontSize: '1.4rem',
			letterSpacing: '1px',
			margin: '0px 0px 20px 0px',
			[theme.breakpoints.down('md')]: {
				fontSize: '1.2rem',
			},
			[theme.breakpoints.down('xs')]: {
				fontSize: '1rem'
			}
		}
	},	
}));

const AboutDetails = () => {
	const classes = useStyle();
	return (
		<Grid item xs={12} container justify="center" className={classes.root}>
			<Grid item container direction="column" xs={11} md={8} alignItems="center" className={classes.details}>
				<Grid item>
					<h2> About mega<span style={{color: '#dc2222'}}>GYM</span> </h2>
				</Grid>
				<Grid item>
					<p> 
						mega<span style={{color: '#dc2222'}}>GYM</span> began in 2007. After years in the body building industry, we realized that it was near
						impossible for the average Jane or Joe to be his own <span style={{color: '#dc2222'}}>Johnny Bravo</span>. Traditional gym programs were
						simplt too complicated, time consuming, and expensive to manage.
					</p>
					<p>
						Today, we're proud to empower individuals and healthy-aspiring teens around the world. Everyone has a <span style={{color: '#dc2222'}}>Johnny
						Bravo</span> inside them, and we're excited to see you break out of your shells!
					</p>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default AboutDetails;
