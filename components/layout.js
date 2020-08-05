//Material components
import Grid from '@material-ui/core/Grid';

//Custom components
import Navbar from './Navigation/navbar';
import NavDrawer from './Navigation/navdrawer';
import Footer from './Footer/footer';

//Utils
import React from 'react';
import Head from 'next/head';

const Layout = (props) => {
	const [active, handleActive] = React.useState(false);
	React.useEffect(() => {
		const handleScroll = (e) => {
			handleActive(false);
			window.removeEventListener('scroll', handleScroll);
		}
		if (active) window.addEventListener('scroll', handleScroll);
	}, [active]);
	const setActive = () => handleActive(active ?false :true);
	const navs = [{name: 'HOME', link: '/'}, {name: 'SERVICES', link: '/services'}, {name: 'ABOUT', link: '/about'}];
	return (
		<Grid item xs={12}>
			<Head>
				<title> megaGYM </title>
			    <meta name="viewport" content="width=device-width, user-scalable=no" />
			</Head>
			<Navbar navs={navs} setActive={setActive} active={props.active} />
			<NavDrawer active={active} setActive={setActive} navs={navs} />
			{props.children}
			<Footer navs={navs} />
			<style jsx global>{`
				@font-face {
					font-family: agencyFB;
					src: url(/fonts/agency.ttf);
				}
				html {
					font-family: agencyFB !important;
					scroll-behavior: smooth;
				}
				body {
					margin: 0;
				}
			`}</style>
		</Grid>
	);
}

export default Layout;