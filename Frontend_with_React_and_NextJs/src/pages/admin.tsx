import React, { useState } from 'react'
import styles from '../styles/admin.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import CustomHead from '@/components/CustomHead';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import UserTable from '@/components/admin/UserTable';
import UserForm from '@/components/admin/UserForm';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const API_URL = `${BASE_URL}/admin`;


export async function getServerSideProps(context: any) {
  const token = context.req.cookies.authToken || null;

  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  try {
    const response = await fetch(`${API_URL}/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const users = response.ok ? await response.json() : [];

    return {
      props: {
        token,
        users,
      },
    };
  } catch (error) {
    console.error("Error fetching users:", error);
    return {
      props: {
        token,
        users: [],
      },
    };
  }
}




const admin = ({ token, users: initialUsers }: { token: string; users: any[] }) => {

    const [users, setUsers] = useState(initialUsers);
    const [editUser, setEditUser] = useState<any | null>(null);

    const handleDelete = async (id: string) => {
        try {
          const response = await fetch(`${API_URL}/users/${id}`, {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
    
          if (!response.ok) throw new Error("Failed to delete user");
    
          setUsers((prev) => prev.filter((user) => user._id !== id));
          console.log("User deleted successfully");
        } catch (error) {
          console.error("Error deleting user:", error);
        }
    };

    const handleSubmit = async (user: any) => {
        const url = user._id ? `${API_URL}/users/${user._id}` : `${API_URL}/signup`;
        const method = user._id ? "PATCH" : "POST";
        console.log(user);
        try {
          const response = await fetch(url, {
            method,
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          });
    
          if (!response.ok) throw new Error("Failed to submit user");
          const updatedUser = await response.json();

            if (user._id) {
                setUsers((prev) =>
                prev.map((u) => (u._id === updatedUser._id ? updatedUser : u))
                );
            } else {
                console.log(updatedUser);
                setUsers((prev) => [...prev, updatedUser.user]);
            }

            setEditUser(null); // Clear edit state
            console.log(user._id ? "User updated successfully" : "User created successfully");

        } catch (error) {
          console.error("Error submitting user:", error);
        }
    };










  return (
    <div className={styles.body}>
        <CustomHead title='Users | ON GUARD 24/7'/>
        <Header/>

        <div className="container mt-4 p-4">
            <h2 className={styles.h2}>Manage <span className="text-primary">User Requests</span></h2>

            <UserTable users={users} onDelete={handleDelete} onEdit={setEditUser} />

            <UserForm onSubmit={handleSubmit} editUser={editUser} />
    

        </div>

        
        <Footer/>
        <Link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
            rel="stylesheet"
        />
    </div>
  )
}

export default admin
