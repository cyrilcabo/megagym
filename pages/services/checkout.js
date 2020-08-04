//Material components
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

//Utils
import Router from 'next/router';

//Styles
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyle = makeStyles(theme => ({
	root: {
		minHeight: 700,
		marginBottom: 30,
		[theme.breakpoints.down('sm')]: {
			marginBottom: 70,
		}
	},
	titleContainer: {
		minHeight: 180,
		[theme.breakpoints.down('md')]: {
			minHeight: 150,
		},
		[theme.breakpoints.down('xs')]: {
			minHeight: 120,
		}
	},
	title: {
		fontSize: '2.5rem',
		margin: 0,
		[theme.breakpoints.down('xs')]: {
			fontSize: '2.2rem'
		}
	},
	checkoutContainer: {
		padding: '50px 0px',
		backgroundColor: '#f6f6f6',
	},
	containerBg: {
		boxShadow: '0px 0px 2px gray',
		marginBottom: 50,
	},
	container: {
		textAlign: 'center',
		borderBottom: '1px solid #f87676',
	},
	detailTitleContainer: {
		backgroundColor: '#f87676',
	},
	detailContainer: {
		minHeight: 200,
		backgroundColor: 'white',
		boxShadow: '0px 0px 1px gray',
		[theme.breakpoints.down('sm')]: {
			minHeight: 80,
		}
	},
	serviceTitle: {
		fontSize: '1.3rem',
		margin: '15px 0px',
		[theme.breakpoints.down('sm')]: {
			fontSize: '1.2rem',
			margin: '5px 0px',
		}
	},
	serviceDetail: {
		fontSize: '1.2rem',
		margin: '10px 2px',
		[theme.breakpoints.down('sm')]: {
			fontSize: '1rem',
		}
	},
	pill: {
		fontSize: '1.3rem',
		fontFamily: 'agencyFB',
		fontWeight: 600,
		padding: '5px 30px',
		borderRadius: '30px',
		color: 'white',
		[theme.breakpoints.down('sm')]: {
			fontSize: '1.2rem',
			padding: '5px 25px',
		},
		[theme.breakpoints.down('xs')]: {
			marginBottom: 10,
		}
	},
	confirm: {
		backgroundColor: '#dc2222',
	},
	cancel: {
		backgroundColor: 'black'
	}
}));

const Checkout = (props) => {
	const classes = useStyle();
	const {service} = props;
	const order = {
		Quantity: 1,
		Title: service.title,
		Description: service.details,
		Duration: service.duration,
		Price: `$${service.cost}`,
	}
	const details = () => {
		const result = [];
		for (let val in order) {
			const isDescription = val==="Description";
			result.push(
				<Grid item container className={classes.container} direction="column" xs={isDescription ?12 :6} md={isDescription ?4 :2}>
					<Grid item container justify="center" className={classes.detailTitleContainer}>
						<h4 className={classes.serviceTitle}> {val} </h4>
					</Grid>
					<Grid item container justify="center" className={classes.detailContainer}>
						<p className={classes.serviceDetail}> {order[val]} </p>
					</Grid>
				</Grid>
			);
		}
		return result;
	}
	return (
		<Grid item xs={12} className={classes.root}>
			<Grid item container justify="center">	
				<Grid item xs={11} md={10} container className={classes.titleContainer} alignItems="center">
					<h1 className={classes.title}> <span style={{color: '#dc2222'}}>Checkout</span> Order </h1>
				</Grid>
				<Grid item xs={12} className={classes.checkoutContainer}>
					<Grid item alignItems={"center"}  container direction="column">
						<Grid item xs={10} container className={classes.containerBg} >
							{details()}
	 					</Grid>
	 					<Grid item xs={11} md={8} container justify="space-around">
	 						<Grid item container justify="center" xs={12} sm={5}>
	 							<Button className={[classes.pill, classes.confirm].join(' ')}> CONFIRM </Button>
	 						</Grid>
	 						<Grid item container justify="center" xs={12} sm={5}>
	 							<Button className={[classes.pill, classes.cancel].join(' ')} onClick={() => Router.push('/services')}> CANCEL </Button>
	 						</Grid>
	 					</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}

Checkout.getInitialProps = ({store, req, res, query}) => {
	const result = store.programs.find((item) => {
		if (item.target===query.id) return item;
	});
	if (!result) {
		if (req) {
			res.writeHead(301, {Location: '/services'});
			res.end();
		} else {
			Router.replace('/services');
		}
	}
	return {service: result};
}

export default Checkout;