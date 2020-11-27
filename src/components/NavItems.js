import React, { useEffect, useState } from "react";
import { useTrail, animated as a } from "react-spring";
import content from "../content/content.json";
import { Box } from "@material-ui/core";
import useCursorHandlers from "../utils/useCursorHandlers";

const items = content["nav-items"];
const config = { mass: 5, tension: 1000, friction: 200 };

const NavItems = () => {
  const cursorHandlers = useCursorHandlers();

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1500);
  }, []);

  return (
    <Box>
      {items.map((x) => (
        <p {...cursorHandlers}>{x}</p>
      ))}
    </Box>
  );
};

export default NavItems;
