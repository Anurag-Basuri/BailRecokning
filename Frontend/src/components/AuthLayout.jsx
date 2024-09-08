import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Protected({ children, authhentication = true }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    if (authhentication && authStatus !== authhentication) {
      navigate("/login");
    } else if (!authhentication && authStatus !== authhentication) {
      navigate("/");
    }
    setLoader(false);
  }, [authStatus, navigate, authhentication]);

  return loader ? <h1>Loading..</h1> : <>{children}</>;
}

export default Protected;