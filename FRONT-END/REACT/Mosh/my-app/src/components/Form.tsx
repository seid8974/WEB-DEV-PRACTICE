// import React,{ useRef,useState } from "react";
// import type { FormEvent } from "react";
import { useForm } from "react-hook-form";
import "./Form.css";

interface Person  {
  name: string;
  age: number;
};


const Form = () => {
const { register,handleSubmit,formState: { errors } } = useForm<Person>(); 

// const nameRef = useRef<HTMLInputElement>(null);
// const ageRef = useRef<HTMLInputElement>(null);
// const person = { name : '' , age : 0}

// const [person,setPerson ] = useState({ name: "", age: 0})

// const handleSubmit = (event: FormEvent) =>  {
//   event.preventDefault();
// console.log("Submitted!");

  //  if(nameRef.current !== null)
  //   person.name = nameRef.current.value;

  //  if(ageRef.current !== null)
  //   person.age = parseInt(ageRef.current.value);

//    console.log(person);
// }

const onSubmit = (data: Person) => console.log(data);

  return (
    <form className="form" onSubmit={ handleSubmit(onSubmit) }>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input id="name" 
        // onChange={(event) => setPerson({...person,name: event.target.value})} value={person.name}
        { ...register("name", { required: true, minLength: 3 }) }
         type="text" className="form-control" />
      </div>
      { errors.name?.type === 'required' && <p className="text-danger"> The Name field is Required. </p> }
      { errors.name?.type === 'minLength' && <p className="text-danger">The Name must be at least 3 character. </p> }
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input id="age" 
        // value={person.age} onChange={(event) => setPerson({...person, age: parseInt(event.target.value)})}  
        { ...register("age")}
        type="number" className="form-control" />
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Form;
