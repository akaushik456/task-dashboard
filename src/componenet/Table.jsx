import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./table.css";

export default function AccessibleTable() {
  const [data, setUsers] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await fetch("https://fakestoreapi.in/api/products?page=2");
      const result = await res.json();

      if (result && result.products) {
        setUsers(result.products); 
      }else {
        console.warn("Unexpected API Response Format:", result);
      }
    } catch (e) {
      console.error("Error fetching products:", e);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell>Brand</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Color</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Discount</TableCell>
            <TableCell>Model</TableCell>
            <TableCell>OnSale</TableCell>
            <TableCell>Image</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.brand || "N/A"}</TableCell>
              <TableCell>{row.category || "N/A"}</TableCell>
              <TableCell>{row.color || "N/A"}</TableCell>
              <TableCell>{row.description || "No description"}</TableCell>
              <TableCell>{row.discount || "No Discount"}</TableCell>
              <TableCell>{row.model || "N/A"}</TableCell>
              <TableCell>{Boolean(row.onSale || row.boolean).toString()}</TableCell>
              <TableCell>{row.image ? (<img src={row.image} alt="product" width="50" height="50" /> ) : ("No Image")}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
