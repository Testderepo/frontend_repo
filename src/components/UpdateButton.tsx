'use client';

import React from "react";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useAppDispatch } from "../store/store"; // Import custom hook
import { updateUser } from "../store/actions";
import { ToastContainer, toast } from "react-toastify";

const UpdateButton = ({ user }: any) => {
  const dispatch = useAppDispatch(); // Gunakan custom hook

  const handleUpdate = async () => {
    try {
      const updatedData = { name: "New Name" }; // Ubah data sesuai kebutuhan
      await dispatch(updateUser(user.id, updatedData));
      toast.success("User updated successfully!");
    } catch (error) {
      toast.error("Failed to update user!");
    }
  };

  return (
    <>
      <IconButton onClick={handleUpdate}>
        <EditIcon />
      </IconButton>
      <ToastContainer />
    </>
  );
};

export default UpdateButton;
