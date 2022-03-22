import classes from "./MeetupItem.module.css";
import Card from '../ui/Card'
import FavoriteContext from "../../store/favorites-context";
import { useContext } from "react";

function MeetupItem(props) {

  const favCtx = useContext(FavoriteContext);
  const isFav = favCtx.isFavorite(props.id);

  function toggleFavoriteHandler() {
    if (isFav) {
      favCtx.removeFavorite(props.id);
    } else {
      favCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
      });
    }
  }

  return (
    <Card>
      <li className={classes.item}>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteHandler}> {isFav ? 'Remove from Favourites' : 'Add to Favourites'}</button>
        </div>
      </li>
    </Card>
  );
}

export default MeetupItem;
