import React, { Component } from 'react';
import Movie from './Movie';
import Favorites from './Favorites';
import Comparator from './Comparator';


export default class Movies extends Component {

    constructor(){
     super()
     this.state= {
         movies : [
            { 
                id : 1,
                title: 'Godfather',
                year : 1982,
                budget : '4 mil$',
                price : '30$' 
            },
            {   id : 2,
                title: 'Superman',
                year : 1998,
                budget: '2 mil$',
                price : '25$'
            },
            {
                id : 3,
                title: 'Dallas',
                year : 1974,
                budget : '6 mil$',
                price : '40$'
            },
            {
                id : 4,
                title: 'Battman',
                year : 2002,
                budget : '20 mil$',
                price : '50$'
            }
            ],
        favorites : [],
        compareList : [],
        isShowingFavorites : false,   
        isShowingComparator: false
        }
    }

    renderMovies = () => this.state.movies.map(item => (
        <Movie 
        existsInFavorites={this.existsInFavorites}
        existsInComparator={this.existsInComparator}
        addToFavorites={this.addToFavorites}
        addToComparator={this.addToComparator}
        key ={item.id}
        id={item.id} 
        title={item.title}
        year={item.year}
        budget={item.budget}
        price={item.price}
        /> 
    ));
      
    addToFavorites = (itemId) => {
       const existsOnFavorites = this.state.favorites.some(el => el.id === itemId);
       console.log(existsOnFavorites);
       if(!existsOnFavorites){
           const item = this.state.movies.find(el => el.id === itemId);
           if(item){
               const updatedList = this.state.favorites.concat(item);
               this.setState({favorites : updatedList})
           }
       } else {
           const filteredList = this.state.favorites.filter(el => el.id !== itemId);
           this.setState({favorites : filteredList});
       }
    }

    addToComparator = (itemId) => {
        const existsOnComparator = this.state.compareList.some(el => el.id === itemId);
        if(existsOnComparator){
            const filteredComparatorList = this.state.compareList.filter(el => el.id !== itemId);
            this.setState({compareList : filteredComparatorList});
            //this.state.compareList = this.state.compareList.filter(el => el.id !== itemId);
        } else {
            console.log("compare")
            const item = this.state.movies.find(el => el.id === itemId);
            if(item){
                const updatedComparedList = this.state.compareList.concat(item);
                this.setState({compareList: updatedComparedList});
            }
        }
    }

    handleFavoritesDisplay = () =>{
        const { isShowingFavorites } = this.state;
        this.setState({
            isShowingFavorites:!isShowingFavorites,
            isShowingComparator: false
        })
    } 
    handleComparatorDisplay = () => {
        const { isShowingComparator } = this.state;
        this.setState({
            isShowingFavorites: false,
            isShowingComparator: !isShowingComparator
        })
    }
    
    existsInFavorites = (id) => (this.state.favorites.some(el => el.id === id));
    existsInComparator = (id) => (this.state.compareList.some(el => el.id === id)); 
        
    render(){
        const { isShowingComparator, isShowingFavorites} = this.state;
        return (
            <>
                <div className="buttons">
                    <button className="btn favorites" onClick={this.handleFavoritesDisplay}>{isShowingFavorites ? 'Hide Favorites' : 'Show Favorites'}</button>
                    <span></span>
                    <button className="btn compare" onClick={this.handleComparatorDisplay}>{isShowingComparator ? 'Hide Comparator' : 'Show Comparator'}</button>
                </div>
                <div className="moviesContainer">
                    {!isShowingFavorites && !isShowingComparator && this.renderMovies()}
                    {isShowingFavorites && <Favorites items={this.state.favorites} addToFavorites={this.addToFavorites} existsInFavorites={this.existsInFavorites}
        existsInComparator={this.existsInComparator}/>}
                    {isShowingComparator && <Comparator items={this.state.compareList} addToComparator={this.addToComparator}/>}
                    
                </div>
            </>
        )
    } 
}