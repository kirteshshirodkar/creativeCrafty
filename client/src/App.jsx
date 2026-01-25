import React, { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <AppRoutes />
    </div>
  );
}
