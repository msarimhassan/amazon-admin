import { useContext } from "react";
import { TogglerContext } from "../context";

export default function useTogglerContext() {
  const { showSidebar, setShowSidebar } = useContext(TogglerContext);

  const setSidebar = (flag) => {
    return setShowSidebar(flag);
  };

  return { showSidebar, setSidebar };
}