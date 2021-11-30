import React from 'react';
import { Component } from 'react';
import App from '../../App';


const MusicTable = (props) => {

console.log(props)
        


        return (
            <div className="MusicTable">
                <h1>Music Library</h1>
                {/* NavBar */}
                {props.info.map(info => {
                  return (
                  <table> 
                      <tr key={info.id}>
                      <td> { info.title } </td>
                      <td> { info.album } </td>
                      <td> { info.artist } </td>
                      <td> { info.genre } </td>
                      <td> { info.releaseDate } </td>
                  </tr>
                  </table>
                            
                );
                })}
            </div>
        );
    
}
      
export default MusicTable;

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
        







// const NamesList = (props) => {
//     return (
//       <div>
//         {props.names.map((name) => {
//         return (
//             <li>{name}</li>
//         )
//         })}
//         </div>
//     );
// }



    

// componentDidMount() {
//   this.getSongs();
// }

//   async getSongs() {
//     try{
//       let response = await axios.get("http://www.devcodecampmusiclibrary.com/");
//       console.log(response)
//     }
//     catch (error) {
//       console.log("API request error");
//     }
//   }

//   render(){
//     console.log(this.state);
//     return (
//         <div className="Display">
//             <h1>Music Library</h1>
//         </div>
//     );
//     }
// }

// export default MusicTable;