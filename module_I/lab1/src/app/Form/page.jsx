"use client";

import { useEffect, useState } from "react";

export default function Form() {
  const [data, setData] = useState(null);
  const [name, setNames] = useState("");
  const [lastNames, setLastNames] = useState("");
  const [email, setEmail] = useState("");
  const [nickName, setNickName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const dataUser = {
      names: name,
      lastNames: lastNames,
      email: email,
      password: password,
      nickName: nickName,
    };

    localStorage.setItem("dataUser", JSON.stringify(dataUser));
    setData(dataUser);
  };

  useEffect(() => {
    const storedData = localStorage.getItem("dataUser");

    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    if (data) {
      alert(`Éxito!, tu eres ${data.names} \n
        Tus apellidos son: ${data.lastNames} \n
        Tu email es: ${data.email} \n
        Tu nickName es: ${data.nickName} \n
        Tu contraseña es: ${data.password} \n
        ✅ Gracias por completar el formulario! ✅`);

        localStorage.setItem('dataUser', null);
    }
  }, [data]);

  const onChange = (event, setValue) => setValue(event.target.value);

  return (
    <div style={{ margin: "auto", width: "600px", padding: "20px" }}>
      <h1>Hola, bienvenido a mi formulario</h1>
      <p>Por favor ingresa tus datos para continuar</p>
      <form onSubmit={handleSubmit} style={{ margin: "20px" }}>
        <label>Nombres:</label>
        <input
          name="names"
          type="text"
          value={name}
          onChange={(event) => onChange(event, setNames)}
        />
        <br />

        <label>Apellidos:</label>
        <input
          name="lastNames"
          type="text"
          value={lastNames}
          onChange={(event) => onChange(event, setLastNames)}
        />
        <br />

        <label>Email:</label>
        <input
          name="email"
          type="email"
          value={email}
          onChange={(event) => onChange(event, setEmail)}
        />
        <br />

        <label>Password:</label>
        <input
          name="password"
          type="password"
          value={password}
          onChange={(event) => onChange(event, setPassword)}
        />
        <br />

        <label>Username (Tu NickName):</label>
        <input
          name="nickName"
          type="text"
          value={nickName}
          onChange={(event) => onChange(event, setNickName)}
        />
        <br />

        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}
