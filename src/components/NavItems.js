import { Box } from "@material-ui/core";
import React from "react";
import content from "../content/content.json";

const items = content["nav-items"];

const NavItems = () => {
  return (
    <Box>
      {items.map((x) => (
        <p>{x}</p>
      ))}
    </Box>
  );
};

export default NavItems;
