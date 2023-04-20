import React, { useRef, useEffect } from "react";

function useOutsideCloser(props, ref) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        props.onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, props]);
}

export default function OutsideCloser(props) {
  const wrapperRef = useRef(null);
  useOutsideCloser(props, wrapperRef);

  return <div ref={wrapperRef}>{props.children}</div>;
}
