import React, { useState } from "react";

const DynamicStep = ({ stepName }) => {
  const [tasks, setTasks] = useState([
    { taskName: "", taskDescription: "" },
  ]);

  const handleAddTask = () => {
    setTasks([...tasks, { taskName: "", taskDescription: "" }]);
  };

  const handleChangeTask = (index, field, value) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, [field]: value } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="dynamic-step">
      <h4>{stepName}</h4>
      <div className="mb-3">
        <label className="form-label">Step Description</label>
        <textarea
          className="form-control"
          placeholder="Enter step description"
        />
      </div>

      {tasks.map((task, index) => (
        <div key={index} className="mb-3 border p-3 rounded">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Task Name"
            value={task.taskName}
            onChange={(e) =>
              handleChangeTask(index, "taskName", e.target.value)
            }
          />
          <textarea
            className="form-control"
            placeholder="Task Description"
            value={task.taskDescription}
            onChange={(e) =>
              handleChangeTask(index, "taskDescription", e.target.value)
            }
          />
        </div>
      ))}

      <button className="btn btn-secondary mt-2" onClick={handleAddTask}>
        Add Task
      </button>
    </div>
  );
};

export default DynamicStep;
