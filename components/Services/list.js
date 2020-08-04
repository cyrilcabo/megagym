//Material components
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

//SVG image
import ServiceDesign from '../../public/images/service_design.svg';

//Router
import Router from 'next/router';

//Styles
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyle = makeStyles(theme => ({
	root: {
		minHeight: 1000,
		margin: '20px 0px 100px 0px',
		[theme.breakpoints.down('md')]: {
			margin: 0,
		},
		[theme.breakpoints.down('sm')]: {
			minHeight: 900,
		}
	},
	inverted: {
		backgroundColor: '#fef4f4',
		'& svg.svg-design': {
			transform: 'scaleX(-1)'
		},
		'& > div.service-container': {
			flexDirection: 'row-reverse',
			textAlign: 'right',
			'& > div.service-details': {
				alignItems: 'flex-end',
			}
		}
	},
	container: {
		margin: '0px 0px 50px 0px',
		padding: '15px 0px',
		[theme.breakpoints.down('xs')]: {
			alignItems: 'center',
			margin: '0px 0px 50px 0px',
			'& > div.service-container': {
				flexDirection: 'row',
				textAlign: 'center',
				'& > div.service-details': {
					alignItems: 'center'
				}
			}
		}
	},
	serviceTitle: {
		fontSize: '2.5rem',
		margin: '0px 0px 30px 0px',
		[theme.breakpoints.down('sm')]: {
			fontSize: '2rem',
		},
		[theme.breakpoints.down('xs')]: {
			margin: '15px 0px',
		}
	},
	serviceDetails: {
		fontSize: '1.3rem',
		margin: '0px 0px 30px 0px',
		[theme.breakpoints.down('sm')]: {
			fontSize: '1.1rem',
		},
		[theme.breakpoints.down('xs')]: {
			marginBottom: 15,
		}
	},
	serviceBtn: {
		backgroundColor: '#dc2222',
		color: 'white',
		fontWeight: 600,
		fontFamily: 'agencyFB',
		padding: '5px 25px',
		borderRadius: '30px',
		fontSize: '1.5rem',
		[theme.breakpoints.down('sm')]: {
			fontSize: '1.2rem',
		}
	},
	svgDesign: {
		[theme.breakpoints.down('md')]: {
			height: 200,
		},
		[theme.breakpoints.down('xs')]: {
			height: 150,
		}
	}
}));

const ServicesList = (props) => {
	const classes = useStyle();
	const programs = props.programs.map((item, key) => {
		const pattern = /\b(?:(Full-body)|(28 day)|(Mega)|(Fitness))\b/gi;
		return <Grid item id={item.target} key={key} xs={12} container justify="center" className={[classes.container, key%2===0 ?"" :classes.inverted].join(' ')}>
			<Grid item xs={11} md={10} container className='service-container' alignItems="center">
				<Grid item xs={12} sm={4} md={3} container justify="center">
					<ServiceDesign className={["svg-design", classes.svgDesign].join(' ')} viewBox="0 0 226.699 251.752" />
				</Grid>
				<Grid item xs={12} sm={8} md={7} container direction="column" className="service-details">
					<Grid item>
						<h2 className={classes.serviceTitle} dangerouslySetInnerHTML={{__html: item.title.replace(pattern, (x) => `<span style="color: #dc2222"> ${x} </span>`)}} />
					</Grid>
					<Grid item> 
						<p className={classes.serviceDetails}> {item.details} </p>
					</Grid>
					<Grid item>
						<Button className={classes.serviceBtn} onClick={() => Router.push(`/services/checkout?id=${item.target}`)}> ENROLL NOW </Button>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	})
	return (
		<Grid item xs={12} className={classes.root}>
			{programs}
		</Grid>
	);
}

export default ServicesList;