import React from "react";
import allCategory from "../allCategory";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// const schema = z.object({
//   description: z.string().min(3,{ message: "Description must be at least 3 characters long." }).max(50),
//   amount: z.number({ invalid_type_error: "Amount must be a valid number." }).min(0.01).max(100_000),
//   category: z.enum(allCategory, {
//     errorMap: () => ({ message: "Please select a valid category." })})
// });

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description must be at least 3 characters long." })
    .max(50, { message: "Description must not exceed 50 characters." }),

  amount: z.coerce
    .number({ message: "Amount must be a valid number." })
    .min(0.01, { message: "Amount must be at least 0.01." })
    .max(100_000, { message: "Amount must not exceed 100,000." }),

  category: z.enum(allCategory, {
    message: "Please select a valid category.",
  }),
});

type ExpenseFormData = z.infer<typeof schema>;

interface Props {
    onSubmit: (data: ExpenseFormData) => void
}


// const onSubmit = (data: ExpenseFormData) => {
//   console.log(data);
// };

const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  return (
    <form onSubmit={handleSubmit( data => {
        onSubmit(data),
        reset()
    } )}>
      <div className="bm-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          id="description"
          type="text"
          className="form-control"
          {...register("description")}
        />
        {errors.description && (
          <p className="text-danger"> {errors.description.message} </p>
        )}
      </div>
      <div className="bm-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          id="amount"
          type="number"
          className="form-control"
          {...register("amount")}
        />

        {errors.amount && (
          <p className="text-danger"> {errors.amount.message} </p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select id="category" className="form-select" {...register("category")}>
          <option value="">Select Category</option>
          {allCategory.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-danger"> {errors.category.message} </p>
        )}
      </div>

      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default ExpenseForm;
