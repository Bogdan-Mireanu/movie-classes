import React from 'react';

export default class Movie extends React.Component {
    onClickFavorites = () => {
     const { addToFavorites, id } = this.props;
     addToFavorites(id); 
    }
    onClickComparator = () => {
        const { addToComparator, id } = this.props;
        addToComparator(id);  
    }
    
    render(){
        const {id, title, year, budget, price, existsInFavorites, existsInComparator} = this.props;
        return (
            <div className="movieContainer" id={id}>
                <div className="title">{title}</div>
                <div className="">Year: {year}</div>
                <div className="price">Price: {price}</div>
                <div className="budget">Budget: {budget}</div>
                <div className="actions">
                    <button onClick={this.onClickFavorites}>{!existsInFavorites(id) ? 'Add To Favorites' : 'Exists on Favorites'}</button>
                    <button onClick={this.onClickComparator}>{!existsInComparator(id) ? 'Compare' : 'Allready on Comparator'}</button>
                </div>
          </div>
        )
    }
}