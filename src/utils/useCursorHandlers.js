import { useContext, useCallback } from "react";
import { CursorContext } from "../context/CursorContext";

const useCursorHandlers = (options = {}) => {
  const [, setCursor] = useContext(CursorContext);

  const toggleCursor = () => {
    setCursor(({ active }) => ({ active: !active }));
  };

  const onMouseEnter = useCallback((event) => {
    if (options.onMouseEnter) {
      options.onMouseEnter(event);
    }
    console.log("on enter");
    toggleCursor();
  });

  const onMouseLeave = useCallback((event) => {
    if (options.onMouseLeave) {
      options.onMouseLeave(event);
    }
    toggleCursor();
  });

  return { onMouseEnter, onMouseLeave };
};

export default useCursorHandlers;
