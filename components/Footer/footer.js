//Material components
import Grid from '@material-ui/core/Grid';

//Utils
import Link from 'next/link';

//Styles
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyle = makeStyles(theme => ({
	root: {
		minHeight: 200,
		backgroundColor: '#ff5d5d',
	},
	container: {
		justifyContent: 'space-between',
		'& > div#footer-details': {
			alignItems: 'flex-end',
			textAlign: 'right',
		},
		[theme.breakpoints.down('xs')]: {
			justifyContent: 'center',
			'& > div.MuiGrid-item, div#footer-details': {
				alignItems: 'center',
				textAlign: 'center',
				marginBottom: 10,
			}
		}
	},
	title: {
		fontSize: '1.4rem',
		color: 'white',
		margin: 1,
	},
	address: {
		fontSize: '0.9rem',
		margin: 1,
		color: 'white',
	},
	slogan: {
		color: '#2e2d2d',
		fontSize: '1rem',
		margin: '0px 0px 10px 0px',
	},
	navContainer: {
		justifyContent: 'flex-end',
		'& > div.MuiGrid-item': {
			marginLeft: 20,
			[theme.breakpoints.down('xs')]: {
				margin: '0px 10px',
			}
		},
		[theme.breakpoints.down('xs')]: {
			justifyContent: 'center',
		}
	},
	link: {
		margin: 0,
		color: 'white',
		cursor: 'pointer',
		'&:hover': {
			color: 'black',
		}
	}
}));

const Footer = (props) => {
	const classes = useStyle();
	const navLinks = props.navs.map((item, key) => {
		return <Grid item key={key}>
			<Link href={item.link}>
				<p className={classes.link}> {item.name} </p>
			</Link>
		</Grid>
	});
	return (
		<Grid item container justify="center" alignItems="center" xs={12} className={classes.root}>
			<Grid item xs={11} md={10} container alignItems="center" className={classes.container}>
				<Grid item xs={12} sm={6} container direction="column" id="footer-brand">
					<Grid item>
						<h4 className={classes.title}> mega<span style={{color: 'black'}}>GYM</span> </h4>
					</Grid>
					<Grid item>
						<p className={classes.address}> Arellano St., Brgy 69-A, Tacloban City </p>
						<p className={classes.address}> 6500, Philippines. </p>
					</Grid>
				</Grid>
				<Grid item xs={12} sm={6} container direction="column" className={classes.details} id="footer-details">
					<Grid item>
						<h5 className={classes.slogan}> Be a <span style={{color: 'white'}}>Johnny Bravo</span> in this world full of Popeyes. </h5>
					</Grid>
					<Grid item container className={classes.navContainer}>
						{navLinks}
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default Footer;