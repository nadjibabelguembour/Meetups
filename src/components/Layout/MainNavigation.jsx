import React from 'react'
import { Link , BrowserRouter} from 'react-router-dom'
import classes from "./MainNavigation.module.css"
const MainNavigation = () => {
  return (
    <header className={classes.header}>
        <div className={classes.logo}>
            React Meetups
        </div>
        <nav>
            <ul>
              <BrowserRouter>
                              
                <li><Link to="/">All Meetups</Link></li>
                <li><Link to="/NewMeetup">Add New Meetup</Link></li>
                <li><Link to="/Favorites">My favorits</Link></li>
              </BrowserRouter>
            </ul>
        </nav>
    </header>
  )
}

export default MainNavigation