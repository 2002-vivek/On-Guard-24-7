
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../styles/requestGuards.module.css";
import CustomHead from "@/components/CustomHead";
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import RequestTable from "@/components/requestGuards/RequestTable";
import CartForm from "@/components/requestGuards/CartForm";
import Link from "next/link";
import cookie from 'cookie';
import router from "next/router";



interface Service {
  service: string;
  count_of_guards: number;
  cost: number;
  _id: string;
}

// Type for the editData object
interface EditData {
  _id: string;
  services: Service[];
  total_cost: number;
  userId: string;
}



const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const apiUrl = `${BASE_URL}/requestGuards`;


export async function getServerSideProps(context: any) {
  // Retrieve token from cookies
  const token = context.req.cookies.authToken || null;
  const userId = context.req.cookies.userId || null;


  if (!token || !userId) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  // Fetch guard requests
  const isAdmin = context.req.cookies.userRoles?.includes("admin");
  const url = isAdmin ? `${apiUrl}/admin` : `${apiUrl}/user`;

  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
  });

  const requests = response.ok ? await response.json() : [];
  return {
    props: {
      requests,
      token,
      userId,
    },
  };
}


const RequestGuards = ({ requests: initialRequests, token, userId }: { requests: any[]; token: string; userId: string  }) => {

  const [requests, setRequests] = useState(initialRequests);
  const [editData, setEditData] = useState<EditData | null>(null);
  
  const handleEdit = async (id: string, data: any) => {
    const url = `${apiUrl}/${id}`;
    try {
      const response = await fetch(url, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, userId }),
      });
      if (!response.ok) throw new Error("Failed to update request");
      const updatedRequests = requests.map((request) =>
        request._id === id ? { ...request, ...data } : request
      );
      setRequests(updatedRequests);
      setEditData(null); // Clear edit state
      console.log("Request updated successfully");
    } catch (error) {
      console.error("Error updating request:", error);
    }
  };

  const handleDelete = async (id: string) => {
    const url = `${apiUrl}/${id}`;
    try {
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) throw new Error("Failed to delete request");
      const updatedRequests = requests.filter((request) => request._id !== id);
      setRequests(updatedRequests);
      console.log("Request deleted successfully");
    } catch (error) {
      console.error("Error deleting request:", error);
    }
  };
  
  const handleSubmit = async (data: any) => {
    if(editData) {
      handleEdit(editData._id, data);
      setEditData(null);
    }
    else{
      try {
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...data, userId }),
        });
        if (!response.ok) throw new Error("Failed to submit request");
        
        console.log("Request submitted successfully");
      } catch (error) {
        console.error("Error submitting request:", error);
      }
    }
    window.location.reload();
  };

  const handleSelectForEdit = (data: any) => {
    setEditData(data);
  };

  
  return(
    <div className={styles.body}>
      <CustomHead title="Service Booking | ON GUARD 24/7" />
      <Header />
      <div className="container mt-4">
        <h2 className={styles.h2}>
          Manage <span className="text-primary">Guard Requests</span>
        </h2>
        <RequestTable requests={requests} onDelete={handleDelete} onSelectForEdit={handleSelectForEdit} />
      </div>
      <CartForm token={token} userId={userId} onSubmit={handleSubmit} editData={editData}/>
      <Footer />
      <Link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />

    </div>
  );
}

export default RequestGuards;