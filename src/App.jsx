import React from 'react';
import { Component } from 'react';
import './App.css';
import axios from 'axios';
import SearchForm from './Components/Filter/Filter';
import MusicTable from './Components/MusicTable/MusicTable';



// JJ's TODOS
// 1. Refactor MusicTable to use the .map method to render the table
// 2. For the filter: (the job of the Filter component is to take user input and pass it up to the App parent component)
// 2a. We need to define a form with handleChange and handleSubmit in the Filter component
// 2b. Then, define the filter method on the App component and pass it down as a prop to the Filter component
// 2c. Call the filter method that was passed down in the handleSubmit method on the Filter component


// class App extends Component {
//   constructor(props) {

//       super(props);
//       this.state = {
//           info: [],

//       }


//     }


class App extends Component {
  constructor (props){
      super(props);
      this.info = [

      ];

      this.state = {
          
          filter : {title: '', album: '', artist: ''},
          genre: '', releaseDate: ''
      };
  }

componentDidMount() {
this.getSongs();
}

async getSongs() {
  try{
    let response = await axios.get("http://www.devcodecampmusiclibrary.com/api/music/");
    // console.log(response.data)
    this.setState({
      info: response.data 
    })
  }
  catch (error) {
    console.log("API request error");
  }
} 


  // Paramater - search term from the Filter component
  // In order to filter the songs, we need to use the .filter() array method

  // filter = (searchCriteria) => {
  //     let titleList = info.title;
  //     let titleResult = title.filter()
  //   }
  
  filter(event) {
    event.preventDefault();
    this.setState({filter: {title: this.state.info.title, album: this.state.info.album, artist: this.state.info.artist, genre: this.state.info.genre, releaseDate: this.state.info.releaseDate }})
}



render(){


  return (
      <div className="App">
          <MusicTable info={this.state.info} />

          
          
          {/* <input type="text" value={this.state.info} onChange={e =>this.titleChanged(e) } placeholder="search" /> 
          <button onClick={e => this.filter(e) }>Search</button> */}


          <p>{}</p>

          <SearchForm filter={this.state.info} />
          {/* <button onClick={e => this.filter(e) }>Filter</button> */}
          

          <p>{}</p>

      </div>
  );
  }
}

export default App;





