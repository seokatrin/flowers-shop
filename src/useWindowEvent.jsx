import { useState, useEffect } from "react";

export function useWindowEvent(ref) {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const handleOutsideClick = (e) => {
    if (!e.path.includes(ref.current)) {
        setVisiblePopup(false)
    }
  };
  useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  return [visiblePopup, setVisiblePopup]
}
