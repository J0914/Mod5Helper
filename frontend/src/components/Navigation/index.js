import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {logout} from '../../store/session'
// import * as sessionActions from '../../store/session'

import styles from './nav.module.css';

const Navigation = ({setAuth}) => {
    const [isActive, setIsActive] = useState(false);
    const user = useSelector((state) => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();
    
    // const logout = (e) => {
    //     e.preventDefault();
    //     dispatch(sessionActions.logout());
    //     setIsActive(false)
    //     history.push('/')
    // }

    return (
        <div className={isActive ? `${styles.sidebar} ${styles.active}` : `${styles.sidebar}`}>
            <div className={styles.logo}>
                <span className={styles.book}>
                    <ion-icon name="help-buoy-outline"></ion-icon>
                </span>
                <div className={styles.header}>
                <p className={styles.text}>&nbsp;ModHelper</p>
                </div>
            </div>
            <div className={styles.btn}>
                <span onClick={() => setIsActive(!isActive)} className={styles.hamburger}>
                    <ion-icon name="menu-outline"></ion-icon>
                </span>
            </div>
            <ul>
                {!user && 
                <>
                <li className={styles.listItem}>
                    <NavLink onClick={() => {
                        setIsActive(false)
                        setAuth('login')
                        }} 
                        className={styles.NavLink} to='/auth'>
                        <span className={styles.icon}>
                            <ion-icon name="log-in-outline"></ion-icon>
                        </span>
                        <div className={styles.text}>Login</div>
                    </NavLink>
                    <span className={styles.tooltip}>Login</span>
                </li>
                <li className={styles.listItem}>
                    <NavLink onClick={() => {
                        setIsActive(false)
                        setAuth('signup')
                        }} className={styles.NavLink} to='/auth'>
                        <span className={styles.icon}>
                            <ion-icon name="create-outline"></ion-icon>
                        </span>
                        <div className={styles.text}>Signup</div>
                    </NavLink>
                    <span className={styles.tooltip}>Signup</span>
                </li>
                </>
                }
                {user && 
                <>
                <li>
                    <span onClick={() => {
                        if (isActive === false) {
                            setIsActive(true);
                        }
                    }} className={styles.searchIcon}>
                        <ion-icon name="search-outline"></ion-icon>
                    </span>
                    <input onClick={() => {
                        if (isActive === false) {
                            setIsActive(true);
                        }
                    }} type='search' placeholder='Search...'></input>
                    <span className={styles.tooltip}>Search</span>
                </li>
                <li className={styles.listItem}>
                    <NavLink onClick={() => setIsActive(false)} className={styles.NavLink} to='/dashboard'>
                        <span className={styles.icon}>
                            <ion-icon alt='go home' name="home-outline"></ion-icon>
                        </span>
                        <div className={styles.text}>Dashboard</div>
                    </NavLink>
                    <span className={styles.tooltip}>Dashboard</span>
                </li>
                <li className={styles.listItem}>
                    <NavLink onClick={() => setIsActive(false)} className={styles.NavLink} to='/mods'>
                        <span className={styles.icon}>
                            <ion-icon name="cube-outline"></ion-icon>
                        </span>
                        <div className={styles.text}>Mods</div>
                    </NavLink>
                    <span className={styles.tooltip}>Mods</span>
                </li>
                <li className={styles.listItem}>
                <NavLink onClick={() => setIsActive(false)} className={styles.NavLink} to='/meetings'>
                    <span className={styles.icon}>
                        <ion-icon name="people-outline"></ion-icon>
                    </span>
                    <div className={styles.text}>Meetings</div>
                </NavLink>
                <span className={styles.tooltip}>Meetings</span>
                </li>
                <li className={styles.listItem}>
                <NavLink onClick={() => dispatch(logout())} className={styles.NavLink} to='/' >
                    <span className={styles.icon}>
                        <ion-icon name="log-out-outline"></ion-icon>
                    </span>
                    <div className={styles.text}>Logout</div>
                </NavLink>
                <span className={styles.tooltip}>Logout</span>
                </li>
                </>}
                <div className={styles.indicator}></div>
            </ul>
        </div>
    );
}

export default Navigation