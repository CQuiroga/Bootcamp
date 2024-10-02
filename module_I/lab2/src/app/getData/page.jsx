"use client";
import {useEffect, useState} from "react";

export default function getData() {
    const api = 'https://jsonplaceholder.typicode.com/posts';
    let [users, setUsers] = useState([]);

    useEffect(()=> {
        fetch(api)
          .then(response => response.json())
          .then(data => setUsers(data))
          .catch(error => console.log(error));
      }, []);

      return (
        <div
        style={{ margin: "auto", width: "600px", padding: "20px" }}>
          <h2>Usuarios Actuales</h2>
          <hr />
        <ul>
          {
            users.map((item, index) => 
            <li key={item.id} style={{margin: "20px"}}>
                <h3 style={{color: "green", textTransform: "UPPERCASE"}}>{item.id} - {item.title} </h3>
                <h6 style={{color: "gray"}}>{item.body}</h6>
            </li>
        )
          }
        </ul>
        <hr />
        <p>No hay más usuarios!</p>
        </div>
      )
}