import { useContext } from "react";
import FavoriteContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavouritePage() {

  const favCtx = useContext(FavoriteContext);

  if (favCtx.totalFavorites === 0) {
    return <p>No Favorites Yet</p>
  }

  return (
    <section>
      <MeetupList meetups={favCtx.favorites}>
      </MeetupList>
    </section>
  )
}

export default FavouritePage;