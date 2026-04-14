import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "./Form.css";

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
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Person>({ resolver: zodResolver(schema), mode: "onChange" });

  const onSubmit = (data: Person) => console.log(data);

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>

        <input
          id="name"
          {...register("name")}
          type="text"
          className="form-control"
        />

        {errors.name && (
          <p className="text-danger">{errors.name.message}</p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>

        <input
          id="age"
          {...register("age", {
            setValueAs: (v) => (v === "" ? undefined : Number(v)),
          })}
          type="number"
          className="form-control"
        />

        {errors.age && (
          <p className="text-danger">{errors.age.message}</p>
        )}
      </div>

      <button disabled={!isValid} className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;