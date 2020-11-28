import React from 'react';
import Movie from './Movie';

export default class Favorites extends React.Component {

    renderMovies = () => {
        const { items, addToFavorites,existsInFavorites, existsInComparator } = this.props;
        return items.map(item => (
            <Movie key={item.id} {...item} addToFavorites={addToFavorites} existsInFavorites={existsInFavorites}
            existsInComparator={existsInComparator}/>
        ))
    }

    render() {
        return (
            <>
            {this.renderMovies()}
            </>           
        )
    }
}