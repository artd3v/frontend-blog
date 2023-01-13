import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LoginTwoToneIcon from '@mui/icons-material/LoginTwoTone';
import PostAddIcon from '@mui/icons-material/PostAdd';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';


import styles from './Header.module.scss';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import { logout, selectIsAuth } from "../../redux/slices/auth";
import { useDispatch, useSelector } from 'react-redux';

export const Header = () => {
	const dispatch = useDispatch();
	const isAuth = useSelector(selectIsAuth);

	const theme = useTheme();

	const onClickLogout = () => {
		if (window.confirm('Вы действительно хотите выйти ?')) {
			dispatch(logout());
			window.localStorage.removeItem('token');
		}
	};

	return (
		<div className={styles.root}>
			<Container maxWidth="lg">
				<div className={styles.inner}>
					<Link className={styles.buttons} to="/">
						<IconButton color="inerhit">
							<HomeIcon />
						</IconButton>
					</Link>
					<div className={styles.buttons}>
						{isAuth ? (
							<>
								<Link to="/add-post">
									<IconButton color="inerhit">
										<PostAddIcon />
									</IconButton>
								</Link>
								<IconButton onClick={onClickLogout} variant="contained" >
									<LogoutIcon />
								</IconButton>
								<IconButton color="inherit">
									{theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
								</IconButton>
							</>
						) : (
							<>
								<Link to="/login">
									<IconButton color="inerhit">
										<LoginTwoToneIcon />
									</IconButton>
								</Link>
								<Link to="/register">
									<IconButton color="inerhit">
										<PersonAddIcon />
									</IconButton>
								</Link>
								<IconButton color="inherit">
									{theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
								</IconButton>
							</>
						)}
					</div>
				</div>
			</Container>
		</div>
	);
};
