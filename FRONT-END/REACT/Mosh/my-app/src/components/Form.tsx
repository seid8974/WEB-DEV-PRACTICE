<<<<<<< HEAD
// import React,{ useRef,useState } from "react";
// import type { FormEvent } from "react";
import { useForm } from "react-hook-form";
=======
import React, { useRef, useState } from "react";
import type { FormEvent } from "react";
import { useForm, type FieldValue } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
>>>>>>> fc7d30dfe681b0c6196e2971675d842fcfab3df2
import "./Form.css";

interface Person  {
  name: string;
  age: number;
};


const schema = z.object({
  name: z
    .string()
    .min(1, { message: "The name field is required!" })
    .min(3, { message: "Name must be at least 3 characters" }),
  age: z
    .number()
    .refine((val) => !isNaN(val), {
      message: "Age is Required!",
    })
    .min(18, { message: "Age must be at least 18" }),
});

type Person = z.infer<typeof schema>;

const Form = () => {
<<<<<<< HEAD
const { register,handleSubmit,formState: { errors } } = useForm<Person>(); 
=======
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    // } = useForm<Person>();
  } = useForm<Person>({ resolver: zodResolver(schema) });
>>>>>>> fc7d30dfe681b0c6196e2971675d842fcfab3df2

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

<<<<<<< HEAD
const onSubmit = (data: Person) => console.log(data);

  return (
    <form className="form" onSubmit={ handleSubmit(onSubmit) }>
=======
  const onSubmit = (data: Person) => console.log(data);

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
>>>>>>> fc7d30dfe681b0c6196e2971675d842fcfab3df2
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
<<<<<<< HEAD
        <input id="name" 
        // onChange={(event) => setPerson({...person,name: event.target.value})} value={person.name}
        { ...register("name", { required: true, minLength: 3 }) }
         type="text" className="form-control" />
=======
        <input
          id="name"
          // onChange={(event) => setPerson({...person,name: event.target.value})} value={person.name}
          // {...register("name", { required: true, minLength: 3 })}
          {...register("name")}
          type="text"
          className="form-control"
        />

        {/* {errors.name?.type === "required" && (
          <p className="text-danger">The name field is required!</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">Name must be at least 3 characters</p>
        )} */}
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
>>>>>>> fc7d30dfe681b0c6196e2971675d842fcfab3df2
      </div>
      { errors.name?.type === 'required' && <p className="text-danger"> The Name field is Required. </p> }
      { errors.name?.type === 'minLength' && <p className="text-danger">The Name must be at least 3 character. </p> }
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          id="age"
          // value={person.age} onChange={(event) => setPerson({...person, age: parseInt(event.target.value)})}
          // {...register("age", { valueAsNumber: true })}
          {...register("age", {
            setValueAs: (v) => (v === "" ? undefined : Number(v)),
          })}
          type="number"
          className="form-control"
        />
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
      </div>
      <button disabled={ !isValid } className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Form;
