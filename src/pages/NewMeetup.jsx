import React from 'react'
import NewMeetupForm from '../components/meetups/NewMeetupForm';
import { useHistory } from 'react-router-dom';
const NewMeetup = () => {
  // to navigate from page to page in v5 we had 
  // the "useHistory" hook that has 2 function push or replace
  // in V6 it was replaced with "useNavigate" hook which is much easier
  const history = useHistory();


  function addMeetupHandler(meetupData){

    // this fetch is a JS funstion, its default method is get
    // but we need to send data so the method should be POST
    // fetch is a promise
      fetch('https://first-project-nadjiba-default-rtdb.firebaseio.com/kk.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json'
        } 
      }
      ).then(()=>{
          history.push('/')
          // we can import useNavigate and do this:
          // navigate('/')
      }

      );


    //   useEffect(() => {
    //     // POST request using fetch inside useEffect React hook
    //     const requestOptions = {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(meetupData)
    //     };
    //     fetch('https://meetups-ce298-default-rtdb.firebaseio.com/meetups.json', requestOptions)
    //         .then(response => response.json())
    //         .then(data => setPostId(data.id));
    
    // // empty dependency array means this effect will only run once (like componentDidMount in classes)
    // }, []);
  
    }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>
  )
}

export default NewMeetup;