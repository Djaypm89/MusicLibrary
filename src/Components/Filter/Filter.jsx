import React from 'react';
import { Component } from 'react';


// class SearchForm extends Component {
//     state = {

//                 title: '',
//                 album: '',
//                 artist: '',
//                 genre: '',
//                 releaseDate: ''
//             }
        
class SearchForm extends Component {
    constructor(props) {
       
        super(props);
        this.state = { 
            info: []
         
         }
    }



handleChange = (event) => {
    // errors?
    this.setState({
        [event.target.name]: event.target.value
    });
}

handleSubmit = (event) => {
    event.preventDefault();
    alert(`Title: ${this.state.title} Album: ${this.state.album} Artist: ${this.state.artist} Genre: ${this.state.genre} Release Date: ${this.state.releaseDate} `)
};


filteredTable() {
    const result = [];
    const filter = this.props.filter;
    console.log(filter);


    for(let i = 0 ; i < this.state.info.length ; i++) {
        const info = this.state.info[i];
        const record = (<tr key={info.id}><td>
            </td>
                <td>{ info.title }</td>
                <td>{ info.album }</td>
                <td>{ info.artist}</td>
                <td>{ info.genre}</td>
                <td>{ info.releaseDate}</td>
            </tr>)   
                         
        if(this.props.filter.title === '' || this.props.filter.title === info.title) {
            if(this.props.filter.album === '' || this.props.filter.album === info.album) {
                if(this.props.filter.artist === '' || this.props.filter.artist === info.artist) {
                      result.push(record)
                }
            }
        }
    }
    return result;
}



render(){
    return(
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>Title</label>
                <input type="text" name="title" onChange={event =>this.handleChange(event)} value={this.state.info.title}/>
                <label>Album</label>
                <input type="text" name="album" onChange={event =>this.handleChange(event)} value={this.state.info.album}/>
                <label>Artist</label>
                <input type="text" name="artist" onChange={event =>this.handleChange(event)} value={this.state.info.artist}/>
                {/* <label>Genre</label>
                <input type="text" name="genre" onChange={this.handleChange} value={this.state.genre}/>
                <label>Release Date</label>
                <input type="text" name="releaseDate" onChange={this.handleChange} value={this.state.releaseDate}/> */}
                <button onClick={this.filter}>Filter</button>
            </div>
        </form>

        
    );
}
}

export default SearchForm;
