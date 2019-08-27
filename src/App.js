import React from 'react';
import logo from './logo.svg';
import './App.css';
import Array from './myArray';


function App() {
  function main(){
    Array.SIZE_RATIO = 3;
    let arr = new Array();

    arr.push(3)
    arr.push(5)
    arr.push(15)
    arr.push(19)
    arr.push(45)
    arr.push(10)
    arr.pop()
    arr.pop()
    arr.pop()
    console.log(arr.get(0))
    arr.remove(0)
    arr.remove(0)
    arr.remove(0)
    arr.push('tauhida')
    console.log(arr)
    console.log(arr.get(0))
}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <script src="./myArray">{main()}</script>
      </header>
    </div>
  );
}

export default App;
