//Material components
import Grid from '@material-ui/core/Grid';

//Custom components
import ServicesList from '../components/Services/list';
import ServicesNewsletter from '../components/Services/newsletter';

//Utils
import Router from 'next/router';

//Styles
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyle = makeStyles(theme => ({
	titleContainer: {
		minHeight: 250,
		[theme.breakpoints.down('sm')]: {
			minHeight: 180,
		},
		[theme.breakpoints.down('xs')]: {
			minHeight: 150,
		}
	},
	title: {
		fontSize: '4rem',
		margin: 0,
		[theme.breakpoints.down('sm')]: {
			fontSize: '3rem',
		},
		[theme.breakpoints.down('xs')]: {
			fontSize: '2.5rem'
		}
	}
}));

const Services = (props) => {
	const classes = useStyle();
	return (
		<Grid item xs={12}>
			<Grid item xs={12} container justify="center" alignItems="center" className={classes.titleContainer}>
				<Grid item>
					<h1 className={classes.title}> mega<span style={{color: '#dc2222'}}>SERVICES</span> </h1>
				</Grid>
			</Grid>
			<ServicesList programs={props.store.programs} />
			<ServicesNewsletter />
		</Grid>
	);
}

export default Services;