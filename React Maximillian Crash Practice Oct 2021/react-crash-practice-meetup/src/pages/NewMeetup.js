import NewMeetupForm from '../components/meetups/NewMeetupForm'
import { useHistory } from 'react-router-dom'
function NewMeetupPage() {
  const history = useHistory();

  function AddMeetupHandler(meetupData) {
    fetch(
      'https://react-crash-max-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application.json'
        }
      }
    ).then(()=>{
      history.replace('/');
    })
    //console.log(meetupData);
  }

  return <section>
    <h1>New Meetup Page</h1>
    <NewMeetupForm onAddMeetup={AddMeetupHandler}/>
  </section>
}

export default NewMeetupPage;