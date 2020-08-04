//Material components
import Grid from '@material-ui/core/Grid';

//Custom components
import AboutBanner from '../components/About/banner';
import AboutTeam from '../components/About/team';
import AboutDetails from '../components/About/details';

const About = () => {
	return (
		<Grid item xs={12}>
			<AboutBanner />
			<AboutTeam />
			<AboutDetails />
		</Grid>
	);
}

export default About;