// Importing Axios library for making HTTP requests
import axios from "axios";

// Base URL for the RESTful API related to students
const REST_API_BASE_URL = "http://localhost:8080/api/students"; 

// Function to fetch details of a specific student by ID
export const getStudent = (studentId) => axios.get(REST_API_BASE_URL + '/' + studentId);

// Function to update details of a specific student by ID
export const updateStudent = (studentId, student) => axios.put(REST_API_BASE_URL + '/' + studentId, student);

// Function to fetch a list of all students
export const listStudents = () => axios.get(REST_API_BASE_URL);

// Function to create a new student
export const createStudent = (student) => axios.post(REST_API_BASE_URL, student);

// Function to delete a specific student by ID
export const deleteStudent = (studentId) => axios.delete(REST_API_BASE_URL + '/' + studentId);
