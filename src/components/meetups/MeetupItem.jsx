import React from 'react'
import classes from './MeetupsItem.module.css';
import Card from '../ui/Card';

const MeetupItem = (props) => {
  return (
    <Card>
        <li className={classes.items}>
        <div className={classes.image}>
            <img src={props.image} alt={props.title}/>
        </div>
        <div className={classes.content}>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
            <p> {props.description} </p>
        </div>
        <div className={classes.actions}>
            <button>Go to favorites</button>
        </div>
    </li>
    </Card>
  )
}

export default MeetupItem