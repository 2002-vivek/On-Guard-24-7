"use client";

import React, { useState, useEffect } from "react";

interface User {
    _id?: string;
    name: string;
    email: string;
    password: string;
    roles: string[];
}

  interface UserFormProps {
    onSubmit: (user: User) => void; 
    editUser?: User;
}



const UserForm: React.FC<UserFormProps> = ({ onSubmit, editUser }) => {

    const [formData, setFormData] = useState<User>({
        name: "",
        email: "",
        password: "",
        roles: [],
      });

    useEffect(() => {
        if (editUser) {
          setFormData(editUser);
        }else {
            // Reset form if no editUser is provided
            setFormData({
              name: "",
              email: "",
              password: "",
              roles: [],
            });
        }
      }, [editUser]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: name === "roles" ? value.split(",").map((role) => role.trim()) : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({ name: "", email: "", password: "", roles: [] });
    };

  return (
    <div className="container mt-4">
      <h3 className="fw-bold">{editUser ? "Edit User" : "Add New User"}</h3>
      <form onSubmit={handleSubmit} className="needs-validation" >
        <div className="mb-3">
          <label htmlFor="userName" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="userName"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter name"
            required
          />
          <div className="invalid-feedback">Please enter a name.</div>
        </div>

        <div className="mb-3">
          <label htmlFor="userEmail" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="userEmail"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
            required
          />
          <div className="invalid-feedback">Please enter a valid email.</div>
        </div>

        <div className="mb-3">
          <label htmlFor="userPassword" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="userPassword"
            name="password"
            className="form-control"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
            required={!editUser} // Password is required only when adding a new user
          />
          {!editUser && (
            <div className="invalid-feedback">Please enter a password.</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="userRoles" className="form-label">
            Roles
          </label>
          <input
            type="text"
            id="userRoles"
            name="roles"
            className="form-control"
            value={formData.roles.join(", ")}
            onChange={handleChange}
            placeholder="Enter roles (comma-separated)"
            required
          />
          <div className="invalid-feedback">Please enter at least one role.</div>
        </div>

        <button type="submit" className="btn btn-primary">
          {editUser ? "Update User" : "Create User"}
        </button>
        {editUser && (
          <button
            type="button"
            className="btn btn-secondary ms-2"
            onClick={() => setFormData({ name: "", email: "", password: "", roles: [] })}
          >
            Cancel
          </button>
        )}
      </form>
    </div>
  );
};

export default UserForm;
