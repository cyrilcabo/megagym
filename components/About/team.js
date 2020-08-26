//Material components
import Grid from '@material-ui/core/Grid';

//Styles
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyle = makeStyles(theme => ({
	root: {
		minHeight: 836,
		[theme.breakpoints.down('sm')]: {
			paddingBottom: 80,
		}
	},
	title: {
		fontSize: '3.5rem',
		margin: '100px 0px 80px 0px',
		[theme.breakpoints.down('md')]: {
			fontSize: '3rem',
		},
		[theme.breakpoints.down('sm')]: {
			fontSize: '2.5rem',
			textAlign: 'center',
		},
		[theme.breakpoints.down('xs')]: {
			fontSize: '2rem',
		}
	},
	teamContainer: {
		justifyContent: 'space-between',
		[theme.breakpoints.down('sm')]: {
			justifyContent: 'center',
		}
	},
	member: {
		textAlign: 'center',
		'& > div.MuiGrid-item': {
			marginBottom: 20,
		},
		[theme.breakpoints.down('sm')]: {
			margin: '0px 30px 20px 30px',
		}
	},
	memberImg: {
		[theme.breakpoints.down('md')]: {
			width: 250, 
		},
		[theme.breakpoints.down('sm')]: {
			width: 200,
		},
		[theme.breakpoints.down('xs')]: {
			width: 150,
		}
	},
	memberName: {
		fontSize: '2rem',
		margin: 0,
		color: '#dc2222',
		[theme.breakpoints.down('sm')]: {
			fontSize: '1.8rem',
		},
		[theme.breakpoints.down('xs')]: {
			fontSize: '1.5rem',
		}
	},
	memberDetails: {
		fontSize: '1rem',
		fontFamily: 'serif',
		margin: 0,
		lineHeight: '25px',
		[theme.breakpoints.down('md')]: {
			fontSize: '0.95rem',
			lineHeight: '30px'
		},
		[theme.breakpoints.down('xs')]: {
			fontSize: '0.9rem',
		}
	}
}));

const AboutTeam = () => {
	const classes = useStyle();
	const team = [
		{
			name: 'Johnny Bravo',
			details: 'The owner and found of megaGYM. He is a master of building muscles. He also loves coffee and art. Everybody just loves him, and he is always ready to lend a helping hand to anyone in the gym.',
			img: 'trainer1.png',
		},
		{
			name: 'Arnold Swagger',
			details: 'The owner and found of megaGYM. He is a master of building muscles. He also loves coffee and art. Everybody just loves him, and he is always ready to lend a helping hand to anyone in the gym.',
			img: 'trainer2.png',
		},
		{
			name: 'Kevin Bucks',
			details: 'The owner and found of megaGYM. He is a master of building muscles. He also loves coffee and art. Everybody just loves him, and he is always ready to lend a helping hand to anyone in the gym.',
			img: 'trainer3.png'
		}
	];
	const mappedTeam = team.map((item, key) => {
		return <Grid item key={key} xs={11} sm={5} md={3} container direction="column" alignItems="center" className={classes.member}>
			<Grid item>
				<img className={classes.memberImg} src={`/images/${item.img}`} />
			</Grid>
			<Grid item>
				<h3 className={classes.memberName}> {item.name} </h3>
			</Grid>
			<Grid item>
				<p className={classes.memberDetails}> {item.details} </p>
			</Grid>
		</Grid>
	})
	return (
		<Grid item xs={12} container className={classes.root} justify="center">
			<Grid item container xs={11} md={10} direction="column">
				<Grid item>
					<h2 className={classes.title}> Our mega<span style={{color: '#dc2222'}}>TEAM</span> </h2>
				</Grid>
				<Grid item container className={classes.teamContainer}>
					{mappedTeam}
				</Grid>
			</Grid>
		</Grid>
	);
}

export default AboutTeam;
