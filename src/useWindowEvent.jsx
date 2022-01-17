import { useState, useEffect } from "react";

// const onChangeVisiblePopup = () => {
//   setvisiblePopup(true);
// };



export function useWindowEvent(ref) {
  const [setvisiblePopup, setVisiblePopup] = useState(false);
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
  return [setvisiblePopup, setVisiblePopup]
}
