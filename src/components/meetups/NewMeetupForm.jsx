import { useRef } from 'react'
import React from 'react'
import Card from '../ui/Card'
import classes from "./NewMeetupForm.module.css"
const NewMeetupForm = (props) => {

    const titleInputRef = useRef();
    const ImageInputtRef = useRef();
    const descriptionInputRef = useRef();
    const addressInputRef = useRef();

    const submitHnadler = (event)=>{
        event.preventDefault();
        const enteredTitle =titleInputRef.current.value;
        const enteredImage =ImageInputtRef.current.value;
        const enteredAddress =addressInputRef.current.value;
        const enteredDescription =descriptionInputRef.current.value;

        const meetupData ={
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription
        };
        // console.log(meetupData);
        props.onAddMeetup(meetupData);
    }

  return (
    <Card>
        <form className={classes.form} onSubmit={submitHnadler}>
            <div className={classes.control}>
                <label htmlFor="title">Meetup Title</label>
                <input type="text" required id='title' ref={titleInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor="image">Meetup Imgae</label>
                <input type="url" required id='image' ref={ImageInputtRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="address">Meetup Address</label>
                <input type="text" required id='address' ref={addressInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="description">Meetup Address</label>
                <textarea id='description' required rows='5' ref={descriptionInputRef}></textarea>
            </div>

            <div className={classes.actions}>
                <button>Add Meetup</button>
            </div>
        </form>
    </Card>
  )
}

export default NewMeetupForm