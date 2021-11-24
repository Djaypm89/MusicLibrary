import React from 'react';
import { Component } from 'react';
import './App.css';
import axios from 'axios';
import MusicTable from './Components/MusicTable/MusicTable';


class App extends Component {
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
    // console.log(response.data)
    this.setState({
      info: response.data 
    })
  }
  catch (error) {
    console.log("API request error");
  }
} 

render(){
  console.log(this.state);

  return (
      <div className="App">
          <MusicTable info={this.state.info} />
      </div>
  );
  }
}

export default App;




// render(){
//   console.log(this.state);
//   return (
//       <div className="App">
//           <h1>Music Library</h1>
//           {this.state.info.map(info => {
//             return <p key={info.id}>{info.title} {info.album} </p>
//           })}
//       </div>
//   );
//   }
// }



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