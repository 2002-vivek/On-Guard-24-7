"use client";

import React, { useState, useEffect } from "react";
import styles from "../../styles/requestGuards.module.css";
import CartItem from "@/components/requestGuards/CartItem";

interface CartFormProps {
  token: string;
  userId: string;
  onSubmit: (data: any) => void; 
  editData?: any;
}

const CartForm: React.FC<CartFormProps> = ({ userId, onSubmit, editData }) => {
  const [quantities, setQuantities] = useState({
    event: 0,
    residential: 0,
    site: 0,
  });
  const [totalCost, setTotalCost] = useState(0);
  useEffect(() => {
    if (editData) {
      setQuantities({
        event: editData.services.find((s: any) => s.service === "Event Security Guard")?.count_of_guards || 0,
        residential: editData.services.find((s: any) => s.service === "Residential Security Guard")?.count_of_guards || 0,
        site: editData.services.find((s: any) => s.service === "Site Security Guard")?.count_of_guards || 0,
      });
    }
  }, [editData]);
  
  const [message, setMessage] = useState<string | null>(null);

  // Calculate total cost
  useEffect(() => {
    const total =
      quantities.event * 10 +
      quantities.residential * 10 +
      quantities.site * 10;
    setTotalCost(total);
  }, [quantities]);

  const handleSubmit = async () => {
    const payload = {
      services: [
        {
          service: "Event Security Guard",
          count_of_guards: quantities.event,
          cost: quantities.event * 10,
        },
        {
          service: "Residential Security Guard",
          count_of_guards: quantities.residential,
          cost: quantities.residential * 10,
        },
        {
          service: "Site Security Guard",
          count_of_guards: quantities.site,
          cost: quantities.site * 10,
        },
      ],
      total_cost: totalCost,
      userId: userId,
    };

    onSubmit(payload);
    setMessage("Request submitted successfully!");
    clearForm();
  };

  const clearForm = () => {
    setQuantities({ event: 0, residential: 0, site: 0 });
  };

  return (
    <div className={styles.cart_container}>
      <div className={styles.cart_header}>
            <div>Services</div>
            <div>Count</div>
            <div>Total</div>
        </div>

      <CartItem
        title="Event Security Guard"
        price={10}
        count={quantities.event}
        setCount={(value: number) => setQuantities((prev) => ({ ...prev, event: value }))}
        ImageSrc="/event-security.jpg"
      />
      <CartItem
        title="Residential Security Guard"
        price={10}
        count={quantities.residential}
        setCount={(value: number) => setQuantities((prev) => ({ ...prev, residential: value }))}
        ImageSrc="/Residential-Security-Services.jpg"
      />
      <CartItem
        title="Site Security Guard"
        price={10}
        count={quantities.site}
        setCount={(value: number) => setQuantities((prev) => ({ ...prev, site: value }))}
        ImageSrc="/site-security.jpg"

      />
      <div className={styles.subtotal}>
        <p>Total: ${totalCost.toFixed(2)}</p>
      </div>
      <button className={styles.submit_btn} onClick={handleSubmit}>
        {editData ? "Update Request" : "Submit Request"}
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CartForm;
