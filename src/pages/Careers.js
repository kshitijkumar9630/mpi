import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	Fade,
	Grid,
	Container,
	Card,
	CardContent,
	Typography,
	Button,
} from '@material-ui/core';

import RightIcon from '../assets/images/right_icon.png';
import Animated from '../Animated.svg';

const useStyles = makeStyles((theme) => ({
	root: {},
	wrapper: {},
	section_one: {
		paddingTop: '50px',
		// paddingBottom: '50px',
	},
	section_two: {
		paddingTop: '50px',
		paddingBottom: '50px',
		background: theme.palette.primary.main,
		color: 'white',
	},
	section_three: {
		paddingTop: '50px',
		paddingBottom: '50px',
	},

	card: {
		margin: theme.spacing(2),
		borderRadius: '0px',
		'&:hover': {
			transform: 'scale(1.05)',
		},
		transition: 'all .2s ease-in-out',
		background: theme.palette.primary.main,
		color: 'white',
	},
	card_content: {},
	svg: {
		marginTop: '-100px',
		[theme.breakpoints.up('sm')]: {
			marginTop: '-250px',
		},
	},
}));

const Careers = () => {
	const classes = useStyles();
	const [mount, setMount] = React.useState(false);

	useEffect(() => {
		handleMount();

		return () => {};
	}, []);

	const handleMount = () => {
		setMount(true);
	};

	const cardData = [
		{
			designation: 'Backend Developer',
			tech: 'ORACLE DBA',
			experience: '3-7 years',
			location: 'Hyderabad',
			info: '',
		},
		{
			designation: 'UI developer / UX Designer',
			tech: 'Adobe XD/ Figma',
			experience: '0-1 years',
			location: 'Hyderabad',
			info: '',
		},
		{
			designation: 'Developer',
			tech: 'Informatica',
			experience: '3-7 years',
			location: 'Hyderabad',
			info: '',
		},
	];

	return (
		<div className={classes.root}>
			<Fade in={mount} timeout={1000} mountOnEnter unmountOnExit>
				<div className={classes.wrapper}>
					<div className={classes.section_one}>
						<Grid container align="center">
							<Container>
								<Grid item xs={10} sm={10} md={10} lg={8}>
									<h1>Opportunities are infinite</h1>
									<Button
										style={{
											textTransform: 'lowercase',
											background: '#651FFF',
											color: 'white',
											fontWeight: '100',
											borderRadius: '0px',
										}}
										href="#section_three"
									>
										find yours &nbsp;
										<img src={RightIcon} style={{ height: '18px' }} />
									</Button>
									<h3>
										Start your future now, Whether you're just beginning your
										career or taking it to the next level, we have the right job
										for you. Apply today and join our team of experts!
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
						<Container maxWidth="sm" align="center">
							<h1>
								why<span> ModulusPi? </span>
							</h1>
							<h3>
								simply because, ModulusPi is the nucleus of all great minds at
								work. to elaborate more on the why, here’s a thought experiment
								for you:
							</h3>
							<br />
							<br />
							<h1
								style={{
									border: '2px solid white',
									borderRadius: '50px',
									width: '40px',
									height: '40px',
								}}
								gutterBottom
							>
								1
							</h1>

							<h3>
								put a group of incredibly passionate, driven individuals
								together.
							</h3>
							<br />
							<h1
								style={{
									border: '2px solid white',
									borderRadius: '50px',
									width: '40px',
									height: '40px',
								}}
							>
								2
							</h1>
							<h3>
								give them the complete freedom to chase down their goals in a
								complete uninhibited manner.
							</h3>
							<br />
							<h1
								style={{
									border: '2px solid white',
									borderRadius: '50px',
									width: '40px',
									height: '40px',
								}}
							>
								3
							</h1>
							<h3>you will have ModulusPi.</h3>
							<br />
							<br />
							<h3>
								the ModulusPi manifesto is crowd sourced from these very people,
								all rooted in different backgrounds but sharing the same ethos;
								to continuously push oneself and in the process, the community.
							</h3>
						</Container>
					</div>

					<div id="section_three" className={classes.section_three}>
						<Container>
							<Grid container spacing={4}>
								<Grid item xl={6} lg={16} md={6} sm={12} xs={12}>
									<p>
										What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
										printing and typesetting industry. Lorem Ipsum has been the
										industry's standard dummy text ever since the 1500s, when an
										unknown printer took a galley of type and scrambled it to
										make a type specimen book. It has survived not only five
										centuries, but also the leap into electronic typesetting,
										remaining essentially unchanged. It was popularised in the
										1960s with the release of Letraset sheets containing Lorem
										Ipsum passages, and more recently with desktop publishing
										software like Aldus PageMaker including versions of Lorem
										Ipsum. Why do we use it? It is a long established fact that
										a reader will be distracted by the readable content of a
										page when looking at its layout. The point of using Lorem
										Ipsum is that it has a more-or-less normal distribution of
										letters, as opposed to using 'Content here, content here',
										making it look like readable English. Many desktop
										publishing packages and web page editors now use Lorem Ipsum
										as their default model text, and a search for 'lorem ipsum'
										will uncover many web sites still in their infancy. Various
										versions have evolved over the years, sometimes by accident,
										sometimes on purpose (injected humour and the like).
									</p>
									<p>
										What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
										printing and typesetting industry. Lorem Ipsum has been the
										industry's standard dummy text ever since the 1500s, when an
										unknown printer took a galley of type and scrambled it to
										make a type specimen book. It has survived not only five
										centuries, but also the leap into electronic typesetting,
										remaining essentially unchanged. It was popularised in the
										1960s with the release of Letraset sheets containing Lorem
										Ipsum passages, and more recently with desktop publishing
										software like Aldus PageMaker including versions of Lorem
										Ipsum. Why do we use it? It is a long established fact that
										a reader will be distracted by the readable content of a
										page when looking at its layout. The point of using Lorem
										Ipsum is that it has a more-or-less normal distribution of
										letters, as opposed to using 'Content here, content here',
										making it look like readable English. Many desktop
										publishing packages and web page editors now use Lorem Ipsum
										as their default model text, and a search for 'lorem ipsum'
										will uncover many web sites still in their infancy. Various
										versions have evolved over the years, sometimes by accident,
										sometimes on purpose (injected humour and the like).
									</p>
								</Grid>
								<Grid item xl={6} lg={16} md={6} sm={12} xs={12}>
									{cardData.map((card) => (
										<Card className={classes.card}>
											<CardContent className={classes.card_content}>
												<h3>{card.designation}</h3>
												<p gutterBottom>
													{card.tech} &nbsp;&nbsp;
													{card.experience}
												</p>
												<p gutterBottom>{card.location}</p>
											</CardContent>
										</Card>
									))}
								</Grid>
							</Grid>
						</Container>
					</div>
				</div>
			</Fade>
		</div>
	);
};
export default Careers;
