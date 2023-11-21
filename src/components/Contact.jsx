import { useState } from "react";
import allContacts from "../contacts.json";
console.log(allContacts);

function Contact() {
  const [contacts, setToContacts] = useState([]);

  console.log(contacts);
  setToContacts(fiveContacts);
  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      {/* {contacts.map((eachContact)=>{ */}

      <div>
        <table>
          <thead>
            <tr>
              <th>picture</th>
              <th>name</th>
              <th>popularity</th>
            </tr>
          </thead>
          <tbody>
            <tr key={fiveContacts.id}>
              <td>
                <img src={fiveContacts.pictureUrl} alt="" />
              </td>
              <td>{fiveContacts.name}</td>
              <td>{fiveContacts.popularity}</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* })} */}
    </div>
  );
}

export default Contact;
