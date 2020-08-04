import App from 'next/app';

import Layout from '../components/layout';
import ScrollToTop from '../utils/scrolltotop';

const MegaGYM = ({Component, pageProps, store, custom}) => {
	return <ScrollToTop>
		<Layout> 
			<Component {...pageProps} />
		</Layout>
	</ScrollToTop>
}

MegaGYM.getInitialProps = async ({Component, ctx}) => {
	const programs = [
		{
			title: "Full-body workout",
			details: "A complete program for ensuring your Johnny Bravo vibe. This program takes 3-4 months, and costs $200/month.",
			target: "fullbody",
			duration: "4 months",
			cost: 200,
		},
		{
			title: "28 day challenge",
			details: "Best suited for those who have a schedule to beat. It only takes 4 weeks and $150 to achieve that monster body.",
			target: "28day",
			duration: "4 weeks",
			cost: 150,
		},
		{
			title: "Mega Physical Fitness",
			details: "Are you the type who just wishes for a healthy lifestyle? A life where you don't have to worry about stairs and such? For $50/month, worry no more!",
			target: "megafitness",
			duration: "Indefinite",
			cost: 50,
		}
	];
	const pageProps = Component.getInitialProps ? await Component.getInitialProps({...ctx, store: {programs}}) : {store: {programs}};
	return {pageProps: pageProps};
}




export default MegaGYM;