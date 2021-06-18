import React, { forwardRef, useImperativeHandle } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
	CssBaseline,
	Drawer,
	AppBar,
	Toolbar,
	List,
	Hidden,
	Button,
	Typography,
	IconButton,
	ListItem,
	ListItemText,
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import { Link } from 'react-router-dom';

const drawerWidth = '100vw';

const useStyles = makeStyles((theme) => ({
	root: {},
	appBar: {
		display: 'flex',
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		overflow: 'hidden',
		// glassmorphism
		background: 'white',
		// background: 'rgba( 0, 0, 0, 0.0 )',
		// backdropFilter: 'blur( 10px )',
	},

	title: {
		flexGrow: 1,
		textDecoration: 'none',
		color: 'grey',
		'&:hover': {
			textFillColor: 'black',
		},
	},
	navLink: {
		clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)',
		padding: '0 20px',
		// fontSize:'11px',
		textTransform: 'capitalize',
		fontWeight: '100',
		color: 'grey',
		'&:hover': {
			textFillColor: 'black',
		},
	},
	hide: {
		display: 'none',
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
		padding: theme.spacing(4),
	},
	drawerButton: {
		textAlign: 'center',
		clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)',
	},
	drawerFooter: {
		display: 'flex',
		justifyContent: 'center',
	},
}));

const Navbar = forwardRef((props, ref) => {
	useImperativeHandle(ref, () => ({
		handleDrawerClose,
	}));
	const classes = useStyles();
	const theme = useTheme();

	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar position="fixed" className={classes.appBar} color="transparent">
				<Toolbar>
					<Typography
						variant="h6"
						noWrap
						className={classes.title}
						component={Link}
						to="/"
					>
						ModulusPI
					</Typography>
					<Hidden smDown>
						<Button
							className={classes.navLink}
							href="#text-buttons"
							color="inherit"
							size="small"
							component={Link}
							to="/about"
						>
							About
						</Button>
						<Button
							className={classes.navLink}
							href="#text-buttons"
							color="inherit"
							size="small"
							component={Link}
							to="/services"
						>
							Services
						</Button>
						<Button
							className={classes.navLink}
							href="#text-buttons"
							color="inherit"
							size="small"
							component={Link}
							to="/careers"
						>
							Careers
						</Button>
						<Button
							className={classes.navLink}
							href="#text-buttons"
							color="inherit"
							size="small"
							component={Link}
							to="/contact"
						>
							Contact
						</Button>
					</Hidden>
					<Hidden mdUp>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							edge="end"
							onClick={handleDrawerOpen}
							className={clsx(open && classes.hide)}
						>
							<MenuIcon />
						</IconButton>
					</Hidden>
				</Toolbar>
			</AppBar>

			<Drawer
				className={classes.drawer}
				variant="persistent"
				anchor="top"
				open={open}
				classes={{
					paper: classes.drawerPaper,
				}}
			>
				<List>
					<ListItem
						button
						onClick={handleDrawerClose}
						className={classes.drawerButton}
						component={Link}
						to="/about"
					>
						<ListItemText primary={'About'} />
					</ListItem>
					<ListItem
						button
						onClick={handleDrawerClose}
						className={classes.drawerButton}
						component={Link}
						to="/services"
					>
						<ListItemText primary={'Services'} />
					</ListItem>
					<ListItem
						button
						onClick={handleDrawerClose}
						className={classes.drawerButton}
						component={Link}
						to="/careers"
					>
						<ListItemText primary={'Career'} />
					</ListItem>
					<ListItem
						button
						onClick={handleDrawerClose}
						className={classes.drawerButton}
						component={Link}
						to="/contact"
					>
						<ListItemText primary={'Contact'} />
					</ListItem>
				</List>
				<div className={classes.drawerFooter}>
					<IconButton onClick={handleDrawerClose}>
						<CloseIcon />
					</IconButton>
				</div>
			</Drawer>
		</div>
	);
});
export default Navbar;
