import { useState, useEffect } from "react";

const getWidth = () => window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

const useResize = () => {
  const [width, setWidth] = useState(getWidth());

  useEffect(() => {
    const resizeListener = () => {
      setWidth(getWidth());
    };

    window.addEventListener("resize", resizeListener);

    return () => {
      document.removeEventListener("resize", resizeListener);
    };
  }, []);

  return width;
};

export default useResize;
