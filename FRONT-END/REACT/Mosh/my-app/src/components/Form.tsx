import React, { useRef, useState } from "react";
import type { FormEvent } from "react";
import { useForm, type FieldValue } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "./Form.css";

// type Person = {
//   name: string;
//   age: number;
// };

const schema = z.object({
  name: z.string().min(1, "The name field is required!")
    .min(3, "Name must be at least 3 characters"),
  age: z.number({ required_error: "Age is Required!"}).min(18,{message: "Age must be at least 18"}),
});

type Person = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  // } = useForm<Person>();
   } = useForm<Person>( { resolver: zodResolver(schema)});

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
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          id="name"
          // onChange={(event) => setPerson({...person,name: event.target.value})} value={person.name}
          // {...register("name", { required: true, minLength: 3 })}
          { ...register("name")}
          type="text"
          className="form-control"
        />

        {/* {errors.name?.type === "required" && (
          <p className="text-danger">The name field is required!</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">Name must be at least 3 characters</p>
        )} */}
        { errors.name && (<p className="text-danger">{errors.name.message}</p>)}


      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          id="age"
          // value={person.age} onChange={(event) => setPerson({...person, age: parseInt(event.target.value)})}
          {...register("age", {valueAsNumber: true})}
        
          type="number"
          className="form-control"
        />
         { errors.age && (<p className="text-danger">{errors.age.message}</p>)}
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Form;
