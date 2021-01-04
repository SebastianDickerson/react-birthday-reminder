import './App.css';
import { useState } from 'react';

import List from './Components/List';
import data from './data';

function App(  ) {

  const [people, setPeople] = useState(data);

  return (
    <main className="App">
      <h1>Birthday Reminder</h1>
      <section className="container">  
        <h2 className="container__heading">There are {people.length} Birthdays</h2>   
        <List people={people} />
        <button className="container__btn" onClick={()=>{setPeople([])}}>Clear all</button>
      </section>
    </main>
  );
}

export default App;
