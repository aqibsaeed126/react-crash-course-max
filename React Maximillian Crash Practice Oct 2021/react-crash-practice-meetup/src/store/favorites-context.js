import { createContext, useState } from 'react'

const FavoriteContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favMeetup) => {},
    removeFavorite: (meetupId) => {},
    isFavorite: (meetupId) => {},
});

export function FavoriteContextProvider(props) {
    const [userFavorites, setUserfavorites] = useState([]);

    function addFavoritesHandler(favMeetup) {
        setUserfavorites((prevFavorites)=>{
            return prevFavorites.concat(favMeetup);
        });
    }

    function removeFavoritesHandler(meetupId) {
        setUserfavorites((prevFavorites)=>{
            return prevFavorites.filter(meetup => meetup.id !== meetupId);
        });
    }

    function itemIsFavoritesHandler(meetupId) {
        return userFavorites && userFavorites.some(meetup=> meetup.id === meetupId);
    }



    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites?.length,
        addFavorite: addFavoritesHandler,
        removeFavorite: removeFavoritesHandler,
        isFavorite: itemIsFavoritesHandler,
    }

    return (
        <FavoriteContext.Provider value={context}>
            {props.children}
        </FavoriteContext.Provider>
    )
}

export default FavoriteContext 