import React, { useState } from "react";
import {useForm} from "react-hook-form"

function TaskFormPage() {
  const{register, handleSubmit} = useForm()

  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await fetch("http://localhost:8080/api/tasks/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Specify content type
        },
        body: JSON.stringify(data), // Convert data to JSON format
      });
      
      if (response.ok) {
        const responseData = await response.json();
        console.log("Task created successfully:", responseData);
        // Redirect to the specified URL
        window.location.href = `/tasks/${responseData._id}`;
      } else {
        // Handle error response
        const errorData = await response.json();
        console.error("Error:", errorData.message);
        // Handle error scenario
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle network or other errors
    }
  });
    
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
