export const TabStepsTasks = () => {
  // Example mock data
  const steps = [
    {
      id: 1,
      title: "Step 1: Setup Project",
      tasks: [
        { id: 1, title: "Initialize repo", done: true },
        { id: 2, title: "Install dependencies", done: false }
      ]
    },
    {
      id: 2,
      title: "Step 2: Build UI",
      tasks: [
        { id: 1, title: "Create Navbar", done: true },
        { id: 2, title: "Create Dashboard", done: false },
        { id: 3, title: "Add Charts", done: false }
      ]
    }
  ];

  return (
    <div className="tab-pane fade" id="stepsTasksTab">
      <div className="row">
        {steps.map(step => (
          <div key={step.id} className="col-lg-12 mb-4">
            <div className="card stretch stretch-full">
              <div className="card-header fw-bold">{step.title}</div>
              <div className="card-body">
                <ul className="list-group">
                  {step.tasks.map(task => (
                    <li key={task.id} className="list-group-item d-flex align-items-center">
                      <input type="checkbox" className="form-check-input me-2" checked={task.done} readOnly />
                      {task.title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
