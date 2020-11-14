//Material components
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

//Utils
import Router from 'next/router';

//Styles
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyle = makeStyles(theme => ({
	root: {
		minHeight: 590,
		backgroundColor: '#212121',
		position: 'relative',
		[theme.breakpoints.down('md')]: {
			minHeight: 570,
		},
		[theme.breakpoints.down('sm')]: {
			paddingBottom: 40,
		}
	},
	title: {
		color: 'white',
		fontSize: '3rem',
		margin: '80px 0px',
		[theme.breakpoints.down('sm')]: {
			fontSize: '2.5rem',
			margin: '60 0px',
			textAlign: 'center',
		},
		[theme.breakpoints.down('xs')]: {
			fontSize: '2rem',
			margin: '45px 0px',
		}
	},
	servicesContainer: {
		justifyContent: 'space-between',
		[theme.breakpoints.down('sm')]: {
			justifyContent: 'center',
			marginBottom: 50,
		}
	},
	programContainer: {
		backgroundColor: 'white',
		borderRadius: 10,
		border: '3px solid #dc2222',
		boxShadow: '0px 0px 2px black',
		padding: '20px 10px',
		minHeight: 250,
		maxWidth: 300,
		justifyContent: 'space-between',
		textAlign: 'center',
		'& > div.MuiGrid-item': {
			margin: '15px 0px',
			[theme.breakpoints.down('md')]: {
				margin: '5px 0px',
			},
			[theme.breakpoints.down('xs')]: {
				margin: '10px 0px',
			}
		},
		[theme.breakpoints.only('md')]: {
			flexBasis: '28%',
			width: '28%'
		},
		[theme.breakpoints.down('sm')]: {
			margin: '0px 20px 20px 20px',
			minHeight: 220,
		},
		[theme.breakpoints.down('xs')]: {
			margin: '0px 0px 20px 0px',
			justifyContent: 'center',
			minHeight: 200,
			padding: '0px 5px',
		}
	},
	programTitle: {
		fontSize: '2rem',
		margin: 0,
		[theme.breakpoints.down('sm')]: {
			fontSize: '1.8rem',
		},
		[theme.breakpoints.down('xs')]: {
			fontSize: '1.5rem',
		}
	},
	programDetails: {
		fontSize: '1.1rem',
		fontFamily: 'serif',
		margin: "0px 5px",
		[theme.breakpoints.down('sm')]: {
			fontSize: '1rem'
		}
	},
	programBtn: {
		fontSize: '1.2rem',
		fontFamily: 'agencyFB',
		fontWeight: 600,
		backgroundColor: '#f53f3f',
		color: 'white',
		padding: '5px 20px',
		borderRadius: '30px',
		'&:hover': {
			color: 'gray',
		}
	},
	bottomDesign: {
		position: 'absolute',
		height: 10,
		width: '100%',
		'&#d-top': {
			bottom: 10,
			backgroundColor: '#7a1b1b',
		},
		'&#d-bottom': {
			bottom: 0,
			backgroundColor: '#dc2222',
		}
	}
}));

const HomeServices = () => {
	const classes = useStyle();
	const programs = [
		{
			title: "Full-body workout",
			details: "Get those muscles flexed and bent. Be a Johnny Bravo.",
			target: "fullbody",
		},
		{
			title: "28 day challenge",
			details: "In a rush for a mouth-dripping body?",
			target: "28day",
		},
		{
			title: "Mega Physical Fitness",
			details: "Do you just want to do chores without getting tired?",
			target: "megafitness",
		}
	];
	const services = programs.map((item, key) => {
		const pattern = /\b(?:(Full-body)|(28 day)|(Mega)|(Fitness))\b/gi;
		return <Grid item key={key} xs={10} sm={5} md={3} container justify="center" alignItems="center" direction="column" className={classes.programContainer}>
			<Grid item>
				<h3 className={classes.programTitle} dangerouslySetInnerHTML={{__html: item.title.replace(pattern, (x) => `<span style='color: #dc2222;'> ${x} </span>`)}} />
			</Grid>
			<Grid item>
				<p className={classes.programDetails}> {item.details} </p>
			</Grid>
			<Grid item>
				<Button className={classes.programBtn} onClick={() => Router.push('/services')}> Learn more </Button>
			</Grid>
		</Grid>
	});
	return (
		<Grid item xs={12} container justify="center" className={classes.root}>
			<Grid item xs={11} md={10} container direction="column">
				<Grid item>
					<h2 className={classes.title}> Check out our <span style={{color: '#dc2222'}}>awesome</span> programs! </h2>
				</Grid>
				<Grid item container className={classes.servicesContainer}>
					{services}
				</Grid>
			</Grid>
			<Grid item className={classes.bottomDesign} id="d-top"/>
			<Grid item className={classes.bottomDesign} id="d-bottom"/>
		</Grid>
	);
}

export default HomeServices;