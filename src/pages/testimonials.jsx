import React, { useState } from "react";
import { FiEdit2, FiTrash2, FiPlus } from "react-icons/fi";
import CardHeader from "@/components/shared/CardHeader";
import useCardTitleActions from "@/hooks/useCardTitleActions";
import CardLoader from "@/components/shared/CardLoader";

const Testimonials = () => {
  const { refreshKey, isRemoved, isExpanded, handleRefresh, handleExpand, handledDelete } =
    useCardTitleActions();

  const [testimonials, setTestimonials] = useState([
    { id: 1, name: "Alice Johnson", role: "Student", message: "This platform helped me practice real-world coding problems before interviews!" },
    { id: 2, name: "Bob Lee", role: "Mentor", message: "A fantastic place to guide students and track their progress." },
  ]);

  const [formData, setFormData] = useState({ name: "", role: "", message: "" });
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  if (isRemoved) return null;

  const handleSave = () => {
    if (editingId) {
      setTestimonials(testimonials.map(t => (t.id === editingId ? { ...formData, id: editingId } : t)));
    } else {
      setTestimonials([...testimonials, { ...formData, id: Date.now() }]);
    }
    setFormData({ name: "", role: "", message: "" });
    setEditingId(null);
    setShowForm(false);
  };

  const handleEdit = (t) => {
    setFormData(t);
    setEditingId(t.id);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    setTestimonials(testimonials.filter((t) => t.id !== id));
  };

  return (
    <div className="col-xxl-12 p-4">
      <div className={`card stretch stretch-full ${isExpanded ? "card-expand" : ""} ${refreshKey ? "card-loading" : ""}`}>
        <CardHeader
          title={"Testimonials"}
          refresh={handleRefresh}
          remove={handleDelete}
          expanded={handleExpand}
        />

        <div className="card-body custom-card-action">
          {/* Add Testimonial Button */}
          <div className="d-flex justify-content-end mb-3">
            <button
              className="btn btn-primary d-flex align-items-center"
              onClick={() => setShowForm(true)}
            >
              <FiPlus className="me-2" /> Add Testimonial
            </button>
          </div>

          {/* Testimonial Cards */}
          <div className="row g-3">
            {testimonials.map((t) => (
              <div key={t.id} className="col-md-6 col-xl-4">
                <div className="card stretch stretch-full shadow-sm p-3 h-100">
                  <p className="fs-6">“{t.message}”</p>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <div>
                      <h6 className="mb-0 fw-semibold">{t.name}</h6>
                      <small className="text-muted">{t.role}</small>
                    </div>
                    <div className="d-flex gap-2">
                      <button className="btn btn-sm btn-light" onClick={() => handleEdit(t)}>
                        <FiEdit2 />
                      </button>
                      <button className="btn btn-sm btn-light-danger" onClick={() => handledDelete(t.id)}>
                        <FiTrash2 />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Add/Edit Form */}
          {showForm && (
            <div className="card mt-4 p-3 border-dashed border-gray-5">
              <h6>{editingId ? "Edit Testimonial" : "Add New Testimonial"}</h6>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Role</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  />
                </div>
                <div className="col-12">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    rows="3"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <div className="col-12 d-flex justify-content-end gap-2 mt-3">
                  <button className="btn btn-secondary" onClick={() => setShowForm(false)}>
                    Cancel
                  </button>
                  <button className="btn btn-success" onClick={handleSave}>
                    Save
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <CardLoader refreshKey={refreshKey} />
      </div>
    </div>
  );
};

export default Testimonials;
