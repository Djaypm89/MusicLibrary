import React from 'react';
import { Component } from 'react';
import './App.css';
import axios from 'axios';


class MusicTable extends Component {
  constructor(props) {

      super(props);
      this.state = {
          info: [],

      }
  }


  

componentDidMount() {
this.getSongs();
}

async getSongs() {
  try{
    let response = await axios.get("http://www.devcodecampmusiclibrary.com/api/music/");
    console.log(response)
  }
  catch (error) {
    console.log("API request error");
  }
}

render(){
  console.log(this.state);
  return (
      <div className="App">
          <h1>Music Library</h1>
      </div>
  );
  }
}

export default MusicTable;



// import MusicTable from './Components/MusicTable/MusicTable';

// class App extends Component {
//   constructor (props){
//     super(props);
//     this.info = [];
  
// //     this.state = {
// //       statNumber: 0,
// //       filter : {city: '', state: '', country: ''},
// //       city: '', country: '', state: ''
// //   };
// // }
  
  
//   }

//   render (){
//     return (
//       <div className="container-fluid">
//         <MusicTable />
//       </div>
//     )
//   }

// }

// export default App;