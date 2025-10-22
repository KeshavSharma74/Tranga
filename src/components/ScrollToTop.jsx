import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Always scroll to top when path changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null; // This component doesn't render anything
};

export default ScrollToTop;
