import { useState } from 'react';
import React from 'react'
import MeetupList from '../components/meetups/MeetupList';
const DUMMY_DATA = [
    {
      id: 'm1',
      title: 'This is a first meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
      id: 'm2',
      title: 'This is a second meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
  ];
const AllMeetups = () => {

  //fetch returns a promise so this AllMeetups compoent
  //cannot return anything until we get a response from the promise
  //so we need to return some temporary JSX code like a loading spinner for exp
  //once we have a response we wanna upadate the  returned js code
  // we do that using state
  const [lisLoading, setIsLoading]=useState(true);
  const [loadedMeetups, setLoadedMeetups]=useState([])
  //once we get the data from fetch we set the seIsLoading back to false=> no longer loading
  
  
  fetch(
    'https://first-project-nadjiba-default-rtdb.firebaseio.com/kk.json'
    ).then(
    response =>{
      return response.json();
    }
  ).then((data)=>{
    setIsLoading(false);
    // we're no longer loading cuz we now have the data we nedd
    setLoadedMeetups(data);
  });

  // check if we are loading :
  if (setIsLoading){
    <section>
      <p>Loading ...</p>
    </section>
  }
  return (
    <section>
      <ul>
      <h1>All meetups</h1>
        {/* we no longer need DUMMY_DATA */}
      {/* <MeetupList meetups={DUMMY_DATA}/> */}
      <MeetupList meetups={loadedMeetups}/>
      </ul>
    </section>
  )
}
// if we save the code before using useEffect hook we get infinite loop
//therfor we have to use with fetch
export default AllMeetups;