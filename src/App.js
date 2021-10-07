import React, { useRef } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { makeStyles, useTheme } from '@material-ui/core/styles';

// page imports
import Home from './pages/Home';
import About from './pages/About';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Extended from './pages/Extended';
import Artificial from './pages/Artificial';

// component imports
import Navbar from './components/Navbar';

//material ui imports
import { Container, CssBaseline } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {},
	content: {
		// padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
	},
	footer: {
		margin: '50px 0px 0px 0px',
		background: theme.palette.primary.main,
		color: 'white',
		// backgroundColor:
		// 	theme.palette.type === 'light'
		// 		? theme.palette.grey[200]
		// 		: theme.palette.grey[800],
	},
	footer_content: {
		padding: '30px 0px 0px 0px',
	},
}));

const App = (props) => {
	const classes = useStyles();
	const theme = useTheme();
	const navRef = useRef();
	return (
		<BrowserRouter>
			<CssBaseline />

			<div className={classes.root}>
				<Navbar ref={navRef} />
				<main onClick={() => navRef.current.handleDrawerClose()}>
					<div className={classes.content} />
					{/* <nav>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/about">About</Link>
							</li>
							<li>
								<Link to="/services">Services</Link>
							</li>
							<li>
								<Link to="/careers">Careers</Link>
							</li>
							<li>
								<Link to="/contact">Contact</Link>
							</li>
						</ul>
					</nav> */}

					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/about" component={About} />
						<Route path="/services" component={Services} />
						<Route path="/careers" component={Careers} />
						<Route path="/contact" component={Contact} />
						<Route path="/xr" component={Extended} />
						<Route path="/ai" component={Artificial} />
					</Switch>
				</main>
				<footer className={classes.footer}>
					<div>
						<div className={classes.footer_content}>
							<Container>
							<p>
								What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
								printing and typesetting industry. Lorem Ipsum has been the
								industry's standard dummy text ever since the 1500s, when an
								unknown printer took a galley of type and scrambled it to make a
								type specimen book. It has survived not only five centuries, but
								also the leap into electronic typesetting, remaining essentially
								unchanged. It was popularised in the 1960s with the release of
								Letraset sheets containing Lorem Ipsum passages, and more
								recently with desktop publishing software like Aldus PageMaker
								including versions of Lorem Ipsum. Why do we use it? It is a
								long established fact that a reader will be distracted by the
								readable content of a page when looking at its layout. The point
								of using Lorem Ipsum is that it has a more-or-less normal
								distribution of letters, as opposed to using 'Content here,
								content here', making it look like readable English. Many
								desktop publishing packages and web page editors now use Lorem
								Ipsum as their default model text, and a search for 'lorem
								ipsum' will uncover many web sites still in their infancy.
								Various versions have evolved over the years, sometimes by
								accident, sometimes on purpose (injected humour and the like).
							</p>
							</Container>
						</div>
						<svg
							className="waves"
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink"
							viewBox="0 24 150 28"
							preserveAspectRatio="none"
							shapeRendering="auto"
						>
							<defs>
								<path
									id="gentle-wave"
									d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
								/>
							</defs>
							<g className="parallax">
								<use
									xlinkHref="#gentle-wave"
									x={48}
									y={0}
									fill="rgba(255,255,255,0.7"
								/>
								<use
									xlinkHref="#gentle-wave"
									x={48}
									y={3}
									fill="rgba(255,255,255,0.5)"
								/>
								<use
									xlinkHref="#gentle-wave"
									x={48}
									y={5}
									fill="rgba(255,255,255,0.3)"
								/>
								<use xlinkHref="#gentle-wave" x={48} y={7} fill="#fff" />
							</g>
						</svg>
					</div>
				</footer>
			</div>
		</BrowserRouter>
	);
};

export default App;
