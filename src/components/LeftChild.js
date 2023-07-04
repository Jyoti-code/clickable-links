import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";

const LeftChild = ({ data, onItemClick }) => {
  return (
    <>
      <List component="nav">
        {data.map((item) => (
          <ListItem
            key={item.id}
            button
            onClick={() => onItemClick(item.id)}
            selected={item.id === 3}
          >
            <ListItemText primary={item.Name} />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default LeftChild;
