
'use client'
import { setSourceMapsEnabled } from "process";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function ExerciseAdder() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [submit, setSubmit] = useState(false);
  const formData = watch();

  const formSubmit = () => {
    setSubmit(true);
  };

  const InputItem = ({id,description,required}) =>(
    <div>
        <input
            className="input-style-1"
            {...register(id, { required: required })}
            placeholder={description}
        />
        {errors[id] && <p className="error">{description} is required.</p>}

    </div>
  )

  return (
    <form onSubmit={handleSubmit(formSubmit)} >
    <div className="form-container flex flex-col">
        <InputItem id = "Exercise_Name"  description = "Exercise name" required={true}/>
        <InputItem id = "Target_Area"  description = "Target Area" required={true}/>
        <InputItem id = "Primary_Muscle"  description = "Primary Muscle" required={true}/>
        <InputItem id = "Secondary_Muscle"  description = "Secondary Muscle" required={true}/>
        <InputItem id = "Exhaustion"  description = "Percieved Exhaustion per Muscle" required={true}/>
        
      </div>

      <div className="">
        <input className="" type="submit" value="Save" />
        {submit ? (
          <div className="formValues">
            <p className="values">{formData.Ex_Name}</p>
          </div>
        ) : ""}
      </div>
    </form>
  );
};

