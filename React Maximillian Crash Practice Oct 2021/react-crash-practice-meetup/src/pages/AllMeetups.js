import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from 'react';

function AllMeetupsPage() {
const [isLoading, setIsLoading] = useState(true);
const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(()=> {
    setIsLoading(true);
    fetch(
      'https://react-crash-max-default-rtdb.firebaseio.com/meetups.json'
    )
    .then((response) => {
      return response.json(); // return promise
    })
    .then((data)=>{
      data = [{
        id: 1,
        title: 'My Meetup 1',
        description: 'My Meetup Discussion 1',
        image: 'https://cdn.vox-cdn.com/thumbor/E9RM8-qg-iyLEAzP4d7tobqI09o=/0x0:2012x1341/1400x933/filters:focal(0x0:2012x1341):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg'
      },
      {
        id: 2,
        title: 'My Meetup 2',
        description: 'My Meetup Discussion 2',
        image: 'https://cdn.vox-cdn.com/thumbor/E9RM8-qg-iyLEAzP4d7tobqI09o=/0x0:2012x1341/1400x933/filters:focal(0x0:2012x1341):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg'
      },
      {
        id: 3,
        title: 'My Meetup 3',
        description: 'My Meetup Discussion 3',
        image: 'https://cdn.vox-cdn.com/thumbor/E9RM8-qg-iyLEAzP4d7tobqI09o=/0x0:2012x1341/1400x933/filters:focal(0x0:2012x1341):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg'
      }];

      const meetups = [];
      for (const key in data) {
        meetups.push({
          id: key,
          ...data[key]
        })
      }
      setIsLoading(false);
      setLoadedMeetups(meetups);
    })
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading . . . .</p>
      </section>
    )
  }
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
