import React, { useState } from "react";

function TaskFormPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const response = await fetch("http://localhost:8080/api/tasks/create", {
      method: "POST",
      body: formData,
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data)
      // Redirect to the specified URL
      window.location.href = `/tasks/${data._id}`;
    } else {
      // Handle error response
      const errorData = await response.json();
      setErrorMessage(errorData.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Title"
          autoFocus
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          id="description"
          placeholder="Description"
          onChange={handleChange}
        />
        <button>Save</button>
      </form>
    </div>
  );
}

export default TaskFormPage;
