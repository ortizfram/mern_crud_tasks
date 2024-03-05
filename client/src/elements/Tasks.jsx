import React, { useState } from "react";
import {useForm} from "react-hook-form"

function Tasks() {


  const getTasks = (async () => {
    try {
      const response = await fetch("http://localhost:8080/api/tasks", {
        method: "GET",
        headers: {
          "Content-Type": "application/json", // Specify content type
        },
        body: JSON.stringify(), // Convert data to JSON format
      });
      
      if (response.ok) {
        const responseData = await response.json();
        console.log("Tasks:", responseData);
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
   Tasks
    </div>
  );
}

export default Tasks;
