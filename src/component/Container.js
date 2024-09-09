import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import Emojis from "./Emojis";

const Container = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? <Loader /> : <Emojis />}
    </>
  );
};

export default Container;
