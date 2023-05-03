import React from "react";
import AnimateRouters from "components/AnimateRouters";
import { BrowserRouter ,Routes,Route} from "react-router-dom";



function App() {


  return (
    <div className="app">
     
      <BrowserRouter> 
 
       <AnimateRouters /> 
 
      
      </BrowserRouter>
    </div>
  );
}

export default App;
