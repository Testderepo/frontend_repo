"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, fetchUserById, updateUser } from "../store/actions";
import { RootState } from "../store/store";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { toast, ToastContainer } from "react-toastify";

const User = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.user.users);
  const [selectedUser, setSelectedUser] = useState<any>(null); // State for selected user
  const [userData, setUserData] = useState<any>({
    name: "",
    email: "",
    age: "",
  }); 
  const [open, setOpen] = useState(false); 

  useEffect(() => {
    dispatch(fetchUsers() as any); 
  }, [dispatch]);

  const handleEdit = (user: any) => {
    dispatch(fetchUserById(user.id) as any); 
    setSelectedUser(user);
    setUserData({
      name: user.name,
      email: user.email,
      age: user.age,
      id: user.id,
    }); 
    setOpen(true); 
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedUser(null); 
  };

  const handleSave = async () => {
    if (selectedUser) {
     
      await dispatch(updateUser(selectedUser.id, userData) as any);

   
      dispatch(fetchUsers() as any);

  
      handleClose();
    }
  };

  if (!users || users.length === 0) {
    return <Typography>No data available</Typography>;
  }

  return (
    <div>
      <div className="w-full flex items-start justify-center text-center mb-4 mt-32">
        <h1 className="text-4xl">List User</h1>
      </div>
      <div className="ml-32 mr-32 mt-24">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="text-white">Name</TableCell>
              <TableCell className="text-white">Email</TableCell>
              <TableCell className="text-white">Age</TableCell>
              <TableCell className="text-white">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={`${user.email}-${user.name}`}>
                <TableCell className="text-white">{user.name}</TableCell>
                <TableCell className="text-white">{user.email}</TableCell>
                <TableCell className="text-white">{user.age}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleEdit(user)}>
                    <EditIcon className="text-white" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

   
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit User</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            fullWidth
            margin="normal"
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          />
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
          <TextField
            label="Age"
            type="number"
            fullWidth
            margin="normal"
            value={userData.age}
            onChange={(e) => setUserData({ ...userData, age: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>

      <ToastContainer />
    </div>
  );
};

export default User;
