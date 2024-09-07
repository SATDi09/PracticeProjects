import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    password: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;
    console.log(e.target);
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  }
  function validate (){
    let validated=true;
    const error ={
        name:"",
        password:""
    }
    if(formData.name.length>8){
        validated=false
        error.name="Name should be less than 8 charaters"
    }
    if(formData.password.length<8){
        validated=false
        error.password="Password should be greater than 8 charaters"
    }
    setErrors(error)
    return validated
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if(validate())
    {const res = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(formData)
    })
    console.log('====>res', res.json())}

  }
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div>
        <label>Name:</label>
        <input className={errors.name?"errorinput":""} name="name" type="text" onChange={(e) => handleChange(e)} />
        {errors && errors.name && <span className="errortitle">{errors.name}</span>}
      </div>
      <div>
        <label>Password:</label>
        <input
        className={errors.name?"errorinput":""}
          name="password"
          type="password"
          onChange={(e) => handleChange(e)}
        />
        {errors && errors.password && <span className="errortitle">{errors.password}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
export default Form;
