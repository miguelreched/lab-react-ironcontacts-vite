import { useState } from "react";
import allContacts from "./contacts.json";
console.log(allContacts);
import "./App.css";

function App() {
  const [contacts, setToContacts] = useState(allContacts.slice(0, 5));

  console.log(contacts);

  const handleRandom = () => {
    console.log("adding")

    const randomIndx = (Math.floor(Math.random()* (allContacts.length))) // Primero calcula el índice aleatorio y guárdalo en una variable

    const clone = JSON.parse(JSON.stringify(contacts)) //Clonas el array anterior del estado
    
    clone.push(allContacts[randomIndx]) // Le haces el push al clon para agregar un elemento del array del JSON usando el indice random que calculaste al principio
    setToContacts(clone) // Y haces el setToContacts como lo tienes

    // setToContacts([...contacts, randomIndx]) problemas de key

  }

  const handleSortByName = () => {
    console.log("probando name")
    const cloneName = Array.from(contacts)
    const sortByName = cloneName.sort((a,b)=> {
      if (a.name > b.name) return 1; 
      if (a.name < b.name) return -1;
      return 0
    })
    setToContacts(sortByName)
  }

  const handleSortByPopularity = () => {
    console.log("probando popularity")
    const clonePop = Array.from(contacts)
    const sortByPopularity = clonePop.sort((a, b) => b.popularity - a.popularity);
    setToContacts(sortByPopularity);
  }

  const handleDelete = (indexToDelete) => {
    console.log("probando delete", indexToDelete)
    const clone = JSON.parse(JSON.stringify(contacts))
    clone.splice(indexToDelete, 1)
    setToContacts(clone)


  }


    return (
      <div>
        <button onClick={ () => handleRandom()}>Add Random Contacts</button>
        <button onClick={handleSortByName}>Sort By Name</button>
        <button onClick={handleSortByPopularity}>Sort By Popularity</button>
          <h1>LAB | React IronContacts</h1>
          <div>
            <table>
              <thead>
                <tr>
                  <th>picture</th> 
                  <th>name</th> 
                  <th>popularity</th> 
                  <th>won Emmy</th> 
                  <th>won Oscar</th>
                  
                </tr>
              </thead>
              <tbody>
          {contacts.map((eachContact, index) => {
            return(
              <tr key={eachContact.id}>
                  <td>
                    <img src={eachContact.pictureUrl} alt="" width={150} />
                  </td>
                  <td>{eachContact.name}</td>
                  <td>{eachContact.popularity}</td>
                  <td>{eachContact.wonEmmy === true ? "🌟": undefined}</td>
                  <td>{eachContact.wonOscar === true ? "🏆": undefined}</td>
                  <button onClick={() =>handleDelete(index)}>Delete</button>
                </tr>
            )
            })}
              </tbody>
            </table>
          </div>
        </div>
      );
    };


export default App;
