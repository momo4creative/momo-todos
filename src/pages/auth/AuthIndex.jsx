import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthIndex() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/auth/login");
  }, []);
  return <div>index</div>;
}
