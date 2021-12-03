import { useEffect } from "react";
import { useApiContext } from "../../contexts/ApiContext";

export default function Home() {
  // context
  const { ApiAuth } = useApiContext();

  useEffect(() => {
    ApiAuth.get();
  }, []);

  return <div>home</div>;
}
