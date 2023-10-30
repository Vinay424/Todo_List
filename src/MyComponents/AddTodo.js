import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Todo Title or Description cannot be empty");
    } else {
      addTodo(title, desc);
      settitle("");
      setdesc("");
    }
  };
  return (
    <div className="container my-3">
      <h3>Add a todo</h3>
      <form onSubmit={submit}>
        <div className="text center mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Todo title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => settitle(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Description
          </label>
          <input
            type="text"
            value={desc}
            onChange={(e) => setdesc(e.target.value)}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" className="btn bt-sm btn-success">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
