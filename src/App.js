import "./App.css";
import React, { useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Help from "./Help";
import Pizza from "./Pizza";
import axios from "axios";
import * as yup from 'yup';
import schema from "./validation/Schema"

const App = () => {
  const initialFormValues = {
    name: "",
    "size-dropdown": "",
    sauce: '',
    pepperoni: false,
    sausage: false,
    canadianBacon: false,
    spicyItalian: false,
    grilledChicken: false,
    onions: false,
    greenPepper: false,
    dicedTomatoes: false,
    blackOlives: false,
    roastedGarlic: false,
    artichoke: false,
    threeCheese: false,
    pineapple: false,
    extraCheese: false,
    specialInstructions: ""
  };

  const initialFormErrors ={
    "size-dropdown": "",
    sauce: "",
    name: ""
  }

  const [order, setOrder] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(true);

  const handleSubmit = () => {
    alert("hi")
    axios.post("https://reqres.in/api/users", formValues)
      .then(res => {
        setOrder([res.data, ...order]);
      })
      .catch(err => console.error(err))
      .finally(() => setFormValues( initialFormValues ));
  };


  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({...formValues, [name]: value})
  }
  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
    // schema.validate(formValues)
    // .then(()=> {
    //   setDisabled(false)
    // })
    // .catch((err) => {
    //   setDisabled(true)
    // })
  }, [formValues])

  return (
    <>
      <div>
        <Link className="link2" to="/Help">Help</Link>
        <Link className="link1" to="/">Home</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Help" element={<Help />} />
          <Route path="/pizza" element={<Pizza formValues ={formValues} inputChange = {inputChange} handleSubmit = {handleSubmit} disabled = {disabled} errors = {formErrors}/>} />
        </Routes>
        {JSON.stringify(order)}
      </div>
    </>
  );
};
export default App;
