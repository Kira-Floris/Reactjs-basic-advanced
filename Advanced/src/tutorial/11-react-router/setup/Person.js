import React, { useEffect, useState } from "react";
import { data } from "../../../data";
import { Link, useParams } from "react-router-dom";

const Person = () => {
  const [name, setName] = useState("default name");
  const { id } = useParams();
  useEffect(() => {
    const newPerson = data.find((person) => person.id === parseInt(id));
    console.log(newPerson);
    setName(newPerson.name);
  }, []);

  return (
    <>
      <h2>Person</h2>
      <h3>{name}</h3>
      <Link to="/people" className="btn">
        Back to people
      </Link>
    </>
  );
};

export default Person;
