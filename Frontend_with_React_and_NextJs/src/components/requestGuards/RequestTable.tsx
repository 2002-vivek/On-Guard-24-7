"use client";

import React from "react";


interface RequestTableProps {
  requests: any[];
  onDelete: (id: string) => void; 
  onSelectForEdit: (data: any) => void;
}

const RequestTable: React.FC<RequestTableProps> = ({ requests, onDelete, onSelectForEdit }) => {
  

  return (
    <table className="table table-striped mt-3">
      <thead className="table-dark">
        <tr>
          <th>No</th>
          <th>Event Guards</th>
          <th>Residential Guards</th>
          <th>Site Guards</th>
          <th>Total Cost ($)</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {requests.map((request, index) => (
          <tr key={request._id}>
            <td>{index + 1}</td>
            <td>
              {request.services.find((s: any) => s.service === "Event Security Guard")?.count_of_guards || 0}
            </td>
            <td>
              {request.services.find((s: any) => s.service === "Residential Security Guard")?.count_of_guards || 0}
            </td>
            <td>
              {request.services.find((s: any) => s.service === "Site Security Guard")?.count_of_guards || 0}
            </td>
            <td>${request.total_cost.toFixed(2)}</td>
            <td>
              <button className="btn btn-warning btn-sm" onClick={() => onSelectForEdit(request)}>
                Edit
              </button>
              <button className="btn btn-danger btn-sm" onClick={() => onDelete(request._id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RequestTable;
