import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    return newPeople;
    // setPeople((oldPeople) => {
    //   let newPeople = oldPeople.filter((person) => person.id !== id);
    //   return newPeople;
    // });
  };
  return (
    <React.Fragment>
      {people.map((person) => {
        console.log(person);
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h1>{name}</h1>
            <button onClick={() => removeItem(id)}>Remove Item</button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        Clear Items
      </button>
    </React.Fragment>
  );
};

export default UseStateArray;
