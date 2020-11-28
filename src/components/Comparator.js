import React from 'react';


export default class Comparator extends React.Component{
    renderMovies = () => (
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Year</th>
                    <th>Price</th>
                    <th>Budget</th>
                </tr>
            </thead>
            <tbody>
                {this.renderRows()}
            </tbody>
        </table>
    )

  
    
    renderRows = () => {
        const { items, addToComparator } = this.props;
        return items.map( item => (
            <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.year}</td>
                <td>{item.price}</td>
                <td>{item.budget}</td>
                <td><button onClick={() => addToComparator(item.id)}>X</button></td>
            </tr>
        ));
    }

    render(){
        return (
            <div className="comparatorContainer">
                {this.renderMovies()}
            </div>
        )
    }
}