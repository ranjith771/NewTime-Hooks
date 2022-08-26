import React, { useState } from 'react';



const App= () => {

let newTime=new Date().toLocaleTimeString();

const [count,updTime]=useState(newTime);

  const Press= () => {
    newTime=new Date().toLocaleTimeString();
    updTime(newTime);
    }

    setInterval(Press,1000);
  return(
    <>
    <h1>{count}</h1>
   
    </>

  );
}

export default App;