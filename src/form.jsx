import { useState } from "react";

export default function Form() {
  let [formData, setFormData] = useState({
    username: "",
    fullName: "",
    password: "",
  });

  //   function handleNameChange(event) {
  //     setFullName(event.target.value);
  //   }

  //   function handleUsername(event) {
  //     setUsername(event.target.value);
  //   }

  //   function handleInputChange(event) {
  //     let fieldName = event.target.name;
  //     let newVal = event.target.value;
  //     setFormData((currData) => {
  //       currData[fieldName] = newVal;
  //       return { ...currData };
  //     });
  //   }

  function handleInputChange(event) {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({ username: "", fullName: "", password: "" });
      }}>
      <label htmlFor="fullname">FullName</label>
      <input
        type="text"
        id="fullname"
        placeholder="Enter your full name"
        value={formData.fullName}
        onChange={handleInputChange}
        name="fullName"
      />
      <br></br>
      <br></br>
      <label htmlFor="username">username</label>
      <input
        type="text"
        id="username"
        placeholder="Enter your username"
        value={formData.username}
        onChange={handleInputChange}
        name="username"
      />
      <br></br>
      <br></br>
      <label htmlFor="password">username</label>
      <input
        type="password"
        id="password"
        placeholder="Enter your password"
        value={formData.password}
        onChange={handleInputChange}
        name="password"
      />
      <br></br>
      <br></br>
      <button>Submit</button>
    </form>
  );
}
