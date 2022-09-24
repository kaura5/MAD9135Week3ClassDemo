import React, { useState, useEffect } from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Main from './components/Main/Main';

function App() {

  const [searchValue, setSearchValue] = useState("");
  const [country, setCountry] = useState([]);
  useEffect(() => {
    if (searchValue) {
      doFetch(searchValue)
    }
  }, [searchValue]);
  async function doFetch(searchValue) {
    const resp = await fetch(`https://api.nationalize.io?name=${searchValue}`)
    if (!resp.ok) throw new Error(resp.statusText);
    let data = await resp.json();
    setCountry(data)
    console.log(data);
  }
  function handleSubmit(ev) {
    ev.preventDefault();
    console.log(ev)
    setSearchValue(ev.target[0].value);
  }

  return (
    <div className="App">
      <Header />
      <form className="inputForm" onSubmit={handleSubmit}>
        <input type="text" />
        <button type="submit">Search</button>
      </form>
      <Main country={country} />
    </div>
  );
}

export default App;
