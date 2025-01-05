"use client";

import React, { useState } from "react";

interface User {
    _id: string;
    name: string;
    email: string;
    password: string;
    roles: string[];
}

interface UserTableProps {
    users: User[];
    onDelete: (id: string) => void;
    onEdit: (user: User) => void;
}

const UserTable: React.FC<UserTableProps> = ({users, onDelete, onEdit}) => {
    

    return(
        <table className="table table-striped mt-3">
            <thead className="table-dark">
                <tr>
                    <th scope="col">No</th>
                    <th scope="col">UserName</th>
                    <th scope="col">Email</th>
                    <th scope="col">Password</th>
                    <th scope="col">Roles</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody id="requestTableBody">
                {users.map((user, index) => (
                <tr key={user._id}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td>{Array.isArray(user.roles) ? user.roles.join(", ") : "No roles assigned"}</td>
                    <td>
                    <button
                        className="btn btn-warning btn-sm"
                        onClick={() => onEdit(user)}
                    >
                        Edit
                    </button>
                    <button
                        className="btn btn-danger btn-sm"
                        onClick={() => onDelete(user._id)}
                    >
                        Delete
                    </button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>

    );

};

export default UserTable;