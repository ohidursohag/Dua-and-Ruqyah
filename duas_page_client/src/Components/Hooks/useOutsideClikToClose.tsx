"use client";
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";
interface OutsideClickHandler {
  (isOpen: boolean): void; // Function to set the open/closed state
}
const useOutsideClikToClose = (setFalse:OutsideClickHandler) => {
  const refWraper = useRef(null);
  const handleClickOutSide = (event: MouseEvent) => {
    if (refWraper.current && !refWraper.current.contains(event.target)) {
      setFalse(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutSide, true);
    return () => {
      document.removeEventListener("click", handleClickOutSide, true);
    };
  }, []);

  return refWraper;
};

export default useOutsideClikToClose;
