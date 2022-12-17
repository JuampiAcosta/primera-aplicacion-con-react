import React,{component} from "react";
import { render } from 'react-dom'
import{BrowserRouter, Link,Route,Switch} from 'react-router-dom'
class Gif extends component{
constructor(props){super(props); this.state={gif:""}}
componentDidMount(){
fetch("https://api.giphy.com/v1/gifs/random?api_key=FSHnaiOlYd2NXPdn06Qdh64qxmGRVM69&tag=&rating=g")
.then(results=>results.json())
.then(data=>data.image_url)
.catch(error=>console.log(error)
  )
}    
render(){
  let contenido
      if (this.state.gif=="") {
        contenido=<h3>Cargando...</h3>
      } else {
        contenido=<img src={this.state.gif}></img>
      }
      <div>
   
       {contenido}
          <button>Hace click acá para ver un Gid!</button>
   
             
      </div>
   
    
   
   }
}
   
   
    
   
   export default Gif;