import React, { useState } from "react";
import {useForm} from "react-hook-form"

function TaskFormPage() {
  const{register, handleSubmit} = useForm()

  const onSubmit = handleSubmit((data)=> {
    console.log(data)
  })

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.target);

  //   const response = await fetch("http://localhost:8080/api/tasks/create", {
  //     method: "POST",
  //     body: formData,
  //   });
  //   if (response.ok) {
  //     const data = await response.json();
  //     console.log(data)
  //     // Redirect to the specified URL
  //     window.location.href = `/tasks/${data._id}`;
  //   } else {
  //     // Handle error response
  //     const errorData = await response.json();
  //     setErrorMessage(errorData.message);
  //   }
  // };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Title"
          autoFocus
          {...register("title")}
        />
        <input
          type="text"
          {...register("description")}
          placeholder="Description"
        />
        <button>Save</button>
      </form>
    </div>
  );
}

export default TaskFormPage;
