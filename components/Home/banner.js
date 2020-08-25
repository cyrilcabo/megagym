//Material components
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

//SVG image
import BGDesign from '../../public/images/Bg_design.svg';

//Utils
import Router from 'next/router';

//Styles
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyle = makeStyles(theme => ({
	root: {
		minHeight: 663,
		position: 'relative',
		[theme.breakpoints.down('sm')]: {
			minHeight: 500,
		},
		[theme.breakpoints.down('xs')]: {
			minHeight: 450,
		}
	},
	bgdesign: {
		position: 'absolute',
		zIndex: -1,
		right: 0,
		height: '100%',
		width: '50%',
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		}
	},
	titleContainer: {
		[theme.breakpoints.down('sm')]: {
			justifyContent: 'center',
		}
	},
	container: {
		[theme.breakpoints.down('sm')]: {
			alignItems: 'center',
			textAlign: 'center',
		}
	},
	title: {
		fontSize: '4.5rem',
		margin: '100px 0px 50px 0px', 
		[theme.breakpoints.down('sm')]: {
			fontSize: '3.5rem',
			margin: '20px 0px 20px 0px',
		},
		[theme.breakpoints.down('xs')]: {
			fontSize: '2.5rem',
			margin: '20px 0px 10px 0px',
		}
	},
	subTitle: {
		fontSize: '1.5rem',
		margin: '0px 0px 100px 0px',
		[theme.breakpoints.down('sm')]: {
			fontSize: '1.2rem',
			marginBottom: 70,
		}
	},
	CTA: {
		fontSize: '2rem',
		backgroundColor: '#dc2222',
		marginBottom: 120,
		color: 'white',
		fontFamily: 'agencyFB',
		fontWeight: 600,
		padding: '5px 30px',
		borderRadius: '40px',
		[theme.breakpoints.down('sm')]: {
			fontSize: '1.5rem',
		},
		[theme.breakpoints.down('xs')]: {
			marginBottom: 80,
		}

	},
	imgHolder: {
		[theme.breakpoints.down('sm')]: {
			justifyContent: 'center',
			marginTop: 50,
		},
	},
	bannerImg: {
		height: 550,
		zIndex: 1,
		[theme.breakpoints.down('md')]: {
			height: 450,
		},
		[theme.breakpoints.down('sm')]: {
			height: 300,
		},
		[theme.breakpoints.down('xs')]: {
			height: 200,
		}
	},
	bannerImgBg: {
		position: 'absolute',
		zIndex: 0,
		display: 'none',
		[theme.breakpoints.down('sm')]: {
			display: 'block'
		}
	}
}));

const HomeBanner = () => {
	const classes = useStyle();
	return (
		<Grid item xs={12} className={classes.root} container justify="center">
			<BGDesign className={classes.bgdesign} viewBox="0 0 581.162 663" preserveAspectRatio="none" />
			<Grid item xs={11} md={10} direction="row-reverse" container className={classes.titleContainer}>
				<Grid item container xs={11} md={6} alignItems="center" justify="flex-end" className={classes.imgHolder}>
					<img className={classes.bannerImg} src={"/images/gymguy-simple.png"} />
					<img className={[classes.bannerImg, classes.bannerImgBg].join(' ')} src={"/images/gymguy-bg.png"} />
				</Grid>
				<Grid item container xs={11} md={6} direction="column" className={classes.container}>
					<Grid item>
						<h1 className={classes.title}> Get your <span style={{color: '#dc2222'}}>Johnny Bravo</span> vibe now. </h1>
					</Grid>
					<Grid item>
						<p className={classes.subTitle}> Is the quarantine making you a bit fat? Are you getting out of shape? </p>
					</Grid>
					<Grid item>
						<Button className={classes.CTA} onClick={() => Router.push('/services')}> Enroll now </Button>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default HomeBanner;