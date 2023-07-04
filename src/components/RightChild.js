import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { Data } from "./Data";

const RightChild = ({ selectedId }) => {
  const selectedItem = Data.find((item) => item.id === selectedId);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        margin: "50px"
      }}
    >
      <h1 style={{ fontSize: "40px", color: "grey", marginBottom: "20px" }}>
        Card
      </h1>
      <Card style={{ height: "250px", width: "300px", marginBottom: "20px" }}>
        <CardContent>
          <Typography variant="h5" component="div">
            <h2>{selectedItem.Name}</h2>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price: {selectedItem.Price}
          </Typography>
          <h3>Item Id: {selectedItem.id}</h3>
        </CardContent>
      </Card>
    </div>
  );
};

export default RightChild;
