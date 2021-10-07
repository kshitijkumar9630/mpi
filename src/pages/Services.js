import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	Container,
	Fade,
	Grid,
	Typography,
	Card,
	CardContent,
} from '@material-ui/core';

import Animated from '../Animated.svg';

import Product from '../assets/images/product.png';
import Analytics from '../assets/images/analytics.png';
import Cloud from '../assets/images/cloud.png';
import Database from '../assets/images/database.png';
import DataGov from '../assets/images/datagov.png';
import Management from '../assets/images/management.png';
import Phone from '../assets/images/phone.png';
import Server from '../assets/images/server.png';
import Service from '../assets/images/services.png';
import Virtual from '../assets/images/virtual.png';

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
	paper: {
		zIndex: 1,
		position: 'relative',
		margin: theme.spacing(1),
	},

	card_type_one: {
		borderRadius: '0px',
		'&:hover': {
			transform: 'scale(1.05)',
		},
		transition: 'all .2s ease-in-out',
		background: '#4527A0',
		color: 'white',
		height: '320px',
		width: 'auto',
		maxWidth: '320px',
	},
	card_type_two: {
		borderRadius: '0px',
		'&:hover': {
			transform: 'scale(1.05)',
		},
		transition: 'all .2s ease-in-out',
		background: theme.palette.primary.main,
		color: 'white',
		// height: '160px',
		width: 'auto',
		maxWidth: '300px',
	},
	card_type_two_body: {
		display: 'flex',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	svg: {
		marginTop: '-100px',
		[theme.breakpoints.up('sm')]: {
			marginTop: '-250px',
		},
	},
}));

const cardData = [
	{
		heading: 'Enterprise Application Service',
		content:
			'Hitech solutions designed to help organizations achieve their strategic objectives and run business better and cost effective.',
	},
	{
		heading: 'Product Development',
		content: 'Building products on supply chain and CRM domains.',
	},
	{
		heading: 'Cloud Technologies',
		content: 'Helping enterprises in cloud solutions and SAAS platforms.',
	},
	{
		heading: 'Mobility Platform',
		content:
			'Helps in enabling enterprises with hybrid and native mobile platforms for transactional and analytical apps.',
	},
];

const Services = () => {
	const classes = useStyles();
	const [mount, setMount] = React.useState(false);
	// const [mountTwo, setMountTwo] = React.useState(false);

	useEffect(() => {
		handleMount();
		// handleMountTwo();
		return () => {};
	}, []);

	const handleMount = () => {
		setMount(true);
	};

	// const handleMountTwo = () => {
	// 	setMountTwo(true);
	// };

	return (
		<div className={classes.root}>
			<Fade direction="up" in={mount} timeout={1000} mountOnEnter unmountOnExit>
				<div className={classes.wrapper}>
					<div className={classes.section_one}>
						<Grid container align="center">
							<Container>
								<Grid item xs={10} sm={10} md={10} lg={8}>
									<h1>Tailored for growing businesses</h1>
									<h3>
										Everything you need to run fast and scale faster.
										<br /> Develop, manage, and scale your applications with
										ModulusPI.
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
						<Container align="center">
							<Grid container spacing={2}>
								<Grid item xs={12} sm={6} md={3} lg={3}>
									<Card className={classes.card_type_one}>
										<CardContent className={classes.card_body}>
											<img src={Service} />
											<h2>Enterprise Application Services</h2>
											<p className={classes.card_para}>
												Hitech solutions designed to help organizations achieve
												their strategic objectives and run business better and
												cost effective.
											</p>
										</CardContent>
									</Card>
								</Grid>
								<Grid item xs={12} sm={6} md={3} lg={3}>
									<Card className={classes.card_type_one}>
										<CardContent className={classes.card_body}>
											<img src={Product} />
											<h2>Product Development</h2>
											<p className={classes.card_para}>
												Building products on supply chain and CRM domains.
											</p>
										</CardContent>
									</Card>
								</Grid>
								<Grid item xs={12} sm={6} md={3} lg={3}>
									<Card className={classes.card_type_one}>
										{/* <CardMedia className={classes.card_media} image={quality} /> */}
										<CardContent className={classes.card_body}>
											<img src={Cloud} />
											<h2> Cloud Technologies</h2>
											<p className={classes.card_para}>
												Helping enterprises in cloud solutions and SAAS
												platforms.
											</p>
										</CardContent>
									</Card>
								</Grid>
								<Grid item xs={12} sm={6} md={3} lg={3}>
									<Card className={classes.card_type_one}>
										{/* <CardMedia className={classes.card_media} image={quality} /> */}
										<CardContent className={classes.card_body}>
											<img src={Phone} />
											<h2>Mobility Platform</h2>
											<p className={classes.card_para}>
												Helps in enabling enterprises with hybrid and native
												mobile platforms for transactional and analytical apps.
											</p>
										</CardContent>
									</Card>
								</Grid>
							</Grid>
						</Container>
					</div>
					<div className={classes.section_three}>
						<Container align="center">
							<Grid container>
								<Container>
									<Grid
										item
										xs={10}
										sm={10}
										md={10}
										lg={6}
										style={{ marginBottom: '30px' }}
									>
										<h1> Solutions for industries solving complex problems</h1>
									</Grid>
								</Container>
							</Grid>

							<Grid container spacing={2}>
								<Grid item xs={12} sm={6} md={4} lg={4}>
									<Card className={classes.card_type_two}>
										{/* <CardMedia className={classes.card_media} image={vision} /> */}
										<CardContent className={classes.card_type_two_body}>
											<img src={Database} />
											<h3>
												Database
												<br />
												Administration
											</h3>
										</CardContent>
									</Card>
								</Grid>
								<Grid item xs={12} sm={6} md={4} lg={4}>
									<Card className={classes.card_type_two}>
										{/* <CardMedia className={classes.card_media} image={values} /> */}
										<CardContent className={classes.card_type_two_body}>
											<img src={Server} />
											<h3>
												Server
												<br /> Administration
											</h3>
										</CardContent>
									</Card>
								</Grid>
								<Grid item xs={12} sm={6} md={4} lg={4}>
									<Card className={classes.card_type_two}>
										{/* <CardMedia className={classes.card_media} image={quality} /> */}
										<CardContent className={classes.card_type_two_body}>
											<img src={Management} />
											<h3>
												Application
												<br /> management
											</h3>
										</CardContent>
									</Card>
								</Grid>
								<Grid item xs={12} sm={6} md={4} lg={4}>
									<Card className={classes.card_type_two}>
										{/* <CardMedia className={classes.card_media} image={quality} /> */}
										<CardContent className={classes.card_type_two_body}>
											<img src={Virtual} />
											<h3>
												Virtual and
												<br /> Augmented reality
											</h3>
										</CardContent>
									</Card>
								</Grid>
								<Grid item xs={12} sm={6} md={4} lg={4}>
									<Card className={classes.card_type_two}>
										{/* <CardMedia className={classes.card_media} image={quality} /> */}
										<CardContent className={classes.card_type_two_body}>
											<img src={Analytics} />
											<h3>
												Data
												<br /> Analytics
											</h3>
										</CardContent>
									</Card>
								</Grid>
								<Grid item xs={12} sm={6} md={4} lg={4}>
									<Card className={classes.card_type_two}>
										{/* <CardMedia className={classes.card_media} image={quality} /> */}
										<CardContent className={classes.card_type_two_body}>
											<img src={DataGov} />
											<h3>
												Data
												<br /> Governance
											</h3>
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
export default Services;
