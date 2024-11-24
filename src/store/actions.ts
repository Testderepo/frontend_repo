import axios from "axios";
import { AppDispatch } from "./store"; // Ensure AppDispatch is imported
import { setUsers } from "./reducers";

// src/store/actions/userActions.ts
import { fetchUsersApi, fetchUserByIdApi, updateUserApi } from "../apis/userApi";

// Fetch all users
export const fetchUsers = () => async (dispatch: AppDispatch) => {
  try {
    const users = await fetchUsersApi(); // Call API
    dispatch(setUsers(users)); // Dispatch users to Redux state
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};


export const fetchUserById = (id: string) => async () => {
  try {
    const user = await fetchUserByIdApi(id); 
    console.log("Fetched user data:", user); 
  } catch (error) {
    console.error("Error fetching user by ID:", error);
  }
};


export const updateUser =
  (id: string, updatedData: any) => async (dispatch: AppDispatch) => {
    try {
      const updatedUser = await updateUserApi(id, updatedData); 
      console.log("User updated:", updatedUser);
  
      dispatch(fetchUsers());
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };
