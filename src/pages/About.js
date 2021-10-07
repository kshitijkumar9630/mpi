import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	Fade,
	Typography,
	Grid,
	Container,
	Card,
	CardContent,
} from '@material-ui/core';

import Animated from '../Animated.svg';

// image imports
import quality from '../assets/images/quality.png';
import values from '../assets/images/values.png';
import vision from '../assets/images/vision.png';

const useStyles = makeStyles((theme) => ({
	root: {},
	wrapper: {},
	section_one: {
		paddingTop: '50px',
	},
	section_two: {
		padding: '50px 0px',
		background: theme.palette.primary.main,
		color: 'white',
	},
	section_three: {
		padding: '50px 0px',
	},
	card: {
		borderRadius: '0px',
		'&:hover': {
			transform: 'scale(1.05)',
		},
		transition: 'all .2s ease-in-out',
		background: theme.palette.primary.main,
		color: 'white',
		height: '420px',
		width: 'auto',
		maxWidth: '320px',
	},
	card_body: {
		padding: theme.spacing(4),
	},
	svg: {
		marginTop: '-100px',
		[theme.breakpoints.up('sm')]: {
			marginTop: '-250px',
		},
	},
}));

const About = () => {
	const classes = useStyles();
	const [mount, setMount] = React.useState(false);

	useEffect(() => {
		handleMount();

		return () => {};
	}, []);

	const handleMount = () => {
		setMount(true);
	};

	return (
		<div className={classes.root}>
			<Fade direction="up" in={mount} timeout={1000} mountOnEnter unmountOnExit>
				<div className={classes.wrapper}>
					<div className={classes.section_one}>
						<Grid container align="center">
							<Container>
								<Grid item xs={10} sm={10} md={10} lg={8}>
									<h1>Who are we</h1>

									<h3>
										ModulusPI is catering end-to-end information technology
										services to several global organizations from the domains
										such as Financial Services, Insurance, Health Care Services,
										Manufacturing, Retail, Energy, and Utilities. 
									</h3>
									<object
										type="image/svg+xml"
										data={Animated}
										className={classes.svg}
									>
										svg-animation
									</object>
								</Grid>
							</Container>
						</Grid>
					</div>

					<div className={classes.section_two}>
						<Grid container align="center">
							<Container>
								<Grid item xs={10} sm={10} md={10} lg={8}>
									<h1>What we do</h1>
									<h3>
										We deliver highly responsive and innovative solutions that
										help clients to align their strategy with their business
										goals. We provide a full portfolio of services so that it
										could be a one-stop information technology provider.   
									</h3>
									<h3>
										As you know, the technology industry places humans at the
										center. Our goal is to harmonize business with digital
										technology. 
									</h3>
								</Grid>
							</Container>
						</Grid>
					</div>

					<div className={classes.section_three}>
						<Container align="center">
							<h1 style={{ marginBottom: '30px' }}>What we belive</h1>
							<Grid container spacing={2}>
								<Grid item xs={12} sm={6} md={4} lg={4}>
									<Card className={classes.card}>
										<CardContent className={classes.card_body}>
											<img src={vision} />
											<h2>Vision</h2>
											<p>
												To become one-stop-destination for all IT needs of our
												customers Strategize IT needs, provide creative IT
												solutions, custom-made deliveries, project consulting,
												application support, or staffing. To become the go-to IT
												expert by delivering the best quality at affordable
												prices.
											</p>
										</CardContent>
									</Card>
								</Grid>
								<Grid item xs={12} sm={6} md={4} lg={4}>
									<Card className={classes.card}>
										<CardContent className={classes.card_body}>
											<img src={values} />
											<h2>Core values</h2>
											<p>
												Our core values define our culture and the way in which
												we conduct business. They form the basis of our conduct
												and govern our decisions. At ModulusPI, how we behave is
												as important as the results we achieve. An underlying
												principle of our conduct is our commitment to upholding
												the highest ethical standards in ourselves and those
												around us.
											</p>
										</CardContent>
									</Card>
								</Grid>
								<Grid item xs={12} sm={6} md={4} lg={4}>
									<Card className={classes.card}>
										<CardContent className={classes.card_body}>
											<img src={quality} />
											<h2>Quality</h2>
											<p>
												We are committed to providing services with
												near-zero-defect quality at all times and on time every
												time. We are committed to benchmark our services and
												processes against globally recognized quality standards.
											</p>
										</CardContent>
									</Card>
								</Grid>
							</Grid>
						</Container>
					</div>
				</div>
			</Fade>
		</div>
	);
};
export default About;
