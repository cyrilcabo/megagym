//Material components
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

//Styles
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyle = makeStyles(theme => ({
	root: {
		minHeight: 466,
		marginBottom: 20,
		[theme.breakpoints.down('sm')]: {
			padding: '20px 0px 50px 0px',
		}
	},
	title: {
		fontSize: '3rem',
		margin: '70px 0px 80px 0px',
		[theme.breakpoints.down('sm')]: {
			fontSize: '2.5rem',
			textAlign: 'center',
		},
		[theme.breakpoints.down('xs')]: {
			fontSize: '2rem',
			margin: '30px 0px',
		}
	},
	testimony: {
		justifyContent: 'space-between',
		[theme.breakpoints.down('sm')]: {
			justifyContent: 'center',
			textAlign: 'center'
		}
	},
	testContainer: {
		justifyContent: 'space-between',
		[theme.breakpoints.down('xs')]: {
			justifyContent: 'center',
			textAlign: 'center'
		}
	},
	testImg: {
		backgroundColor: 'black',
		color: '#dc2222',
		height: 80,
		width: 80,
		fontSize: '2rem',
		fontWeight: 600,
	},
	testContent: {
		fontSize: '1.5rem',
		margin: '0px 0px 20px 0px',
		[theme.breakpoints.down('sm')]: {
			fontSize: '1.3rem',
			margin: '10px 0px'
		}
	},
	testName: {
		fontSize: '1.2rem',
		margin: '0px 0px 10px 0px',
		color: '#dc2222',
		[theme.breakpoints.down('sm')]: {
			fontSize: '1rem',
			marginBottom: 15,
		}
	}
}));

const HomeTestimonies = () => {
	const classes = useStyle();
	const testimonies = [
		{
			name: 'Jane Doe',
			test: 'The Mega Physical Fitness plan made me lose 20 kg in just two months!',
		},
		{
			name: 'Johnny Doe',
			test: 'Wow! I never thought I would be able to acheive a Johnny Bravo bud! Thanks megaGYM!',
		}
	];
	const mappedTest = testimonies.map((item, key) => {
		const pattern = /\b(?:(Mega)|(Fitness)|(Johnny Bravo))\b|(GYM)/g;
		return <Grid item xs={11} sm={5} md={6} key={key} container className={classes.testimony}>
			<Grid item xs={12} md={3} container justify="center">
				<Avatar className={classes.testImg}>
					{item.name[0]}
				</Avatar>
			</Grid>
			<Grid item xs={12} md={9} container direction="column" className={classes.testDetails}>
				<Grid item>
					<p className={classes.testContent} dangerouslySetInnerHTML={{__html: item.test.replace(pattern, (x) => `<span style="color: #dc2222;">${x}</span>`)}} />
				</Grid>
				<Grid item>
					<p className={classes.testName}> -{item.name} </p>
				</Grid>
			</Grid>
		</Grid>
	})
	return (
		<Grid item xs={12} container justify="center" className={classes.root}>
			<Grid item container xs={11} md={10} direction="column">
				<Grid item>
					<h2 className={classes.title}> Customer <span style={{color: '#dc2222'}}>Testimonies</span> </h2>
				</Grid>
				<Grid item container className={classes.testContainer}>
					{mappedTest}
				</Grid>
			</Grid>
		</Grid>
	);
}

export default HomeTestimonies;