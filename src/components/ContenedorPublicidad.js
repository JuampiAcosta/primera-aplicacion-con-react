import React from "react";
function ContenedorPublicidad(props) {
    return (
         <div>
             <p>--inicio de espacio publicitario--</p>
             {props.children}
             <p>--fin de espacio publicitario--</p>
      </div>
    );
   }
   export default ContenedorPublicidad;