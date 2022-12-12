import { useEffect, useState } from "react";

const useBodyScrollLock = () => {
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    const bodyStyle = document.body.style;
    bodyStyle.overflowY = isLocked ? "hidden" : "auto";
  }, [isLocked]);

  const toggleLock: () => void = () => setIsLocked(!isLocked);

  return { isLocked, toggleLock };
};

export default useBodyScrollLock;
