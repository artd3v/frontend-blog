import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LoginTwoToneIcon from '@mui/icons-material/LoginTwoTone';
import PostAddIcon from '@mui/icons-material/PostAdd';


import styles from './Header.module.scss';
import Container from '@mui/material/Container';
import { logout, selectIsAuth } from "../../redux/slices/auth";
import { useDispatch, useSelector } from 'react-redux';

export const Header = () => {
	const dispatch = useDispatch();
	const isAuth = useSelector(selectIsAuth);

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
				<Link className={styles.logo} to="/">
					<Button variant="contained">
						<HomeIcon />
					</Button>
				</Link>
				<div className={styles.buttons}>
					{isAuth ? (
						<>
							<Link to="/add-post">
								<Button variant="contained">
									<PostAddIcon />
								</Button>
							</Link>
							<Button onClick={onClickLogout} variant="contained" >
								<LogoutIcon />
							</Button>
						</>
					) : (
						<>
							<Link to="/login">
								<Button variant="contained" >
									<LoginTwoToneIcon />
									Вход
								</Button>
							</Link>
							<Link to="/register">
								<Button variant="contained">
									<PersonAddIcon />
									Регистрация
								</Button>
							</Link>
						</>
					)}
				</div>
			</div>
		</Container>
		</div>
	);
};
