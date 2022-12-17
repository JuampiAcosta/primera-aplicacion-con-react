import React, { Component } from "react";
import Pelicula from "./Pelicula";
class TiraPelicula extends Component {


  lanzarAlerta(){
    alert("Me clickeaste!")
  }
  
  cambiarAmarillo(){
    document.querySelector("body").style.backgroundColor="yellow"
  }
  cambiarRosa(){
    document.querySelector("body").style.backgroundColor="pink"
  }
  render() {
    return (
      <div onClick={this.lanzarAlerta} onMouseOver={this.cambiarAmarillo} onMouseOut={this.cambiarRosa}>
        <Pelicula
          generos={["Fantasia", "Aventuras"]}
          rating="8.0"
          titulo="Harry Potter"
        />
        <Pelicula
          generos={["Fantasia", "Aventuras"]}
          rating="6.0"
          titulo="Toy story"
        />
        <Pelicula rating="6.0" titulo="Ben 10" />
      </div>
    );
  }
}
export default TiraPelicula;
