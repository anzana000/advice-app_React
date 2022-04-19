import React,{useState} from "react";
import './App.css';

function App() {
  const [advice, setAdvice] = useState("Compare yourself to only yourself");

  // useEffect(() => {
  //   fetch("	https://api.adviceslip.com/advice")
  //     .then(response => response.json())
  //     .then(data => setAdvice(data.slip.advice));
  // }, []);

  const fetchAdvice = () => {
     fetch("	https://api.adviceslip.com/advice")
      .then(response => response.json())
       .then(data =>  setAdvice(data.slip.advice)
       );
  }
  return (
    <div className="app">
      <div className="card">
        <h1 className = "advice"> {advice}</h1>
        <button className = "button" onClick = {fetchAdvice}>Give me advice</button>
  </div>
    
    </div>
  );
}

export default App;
