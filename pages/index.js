//Material components
import Grid from '@material-ui/core/Grid';

//Custom components
import HomeBanner from '../components/Home/banner';
import HomeServices from '../components/Home/services';
import HomeTestimonies from '../components/Home/testimonies';

const Index = () => {
	return (
		<Grid item xs={12}>
			<HomeBanner />
			<HomeServices />
			<HomeTestimonies />
		</Grid>
	);
}

export default Index;