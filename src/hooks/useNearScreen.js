import { useEffect, useRef, useState } from "react";

const useNearScreen = ({ distance = "100px" } = {}) => {
  const [isNearScreen, setShow] = useState(false);
  const fromRef = useRef();
  useEffect(() => {
    let observer;
    const element = fromRef.current;

    const onChange = (entries) => {
      const el = entries[0];
      if (el.isIntersecting) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    Promise.resolve(
      typeof IntersectionObserver != "undefined"
        ? IntersectionObserver
        : import("intersection-observer")
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: distance,
      });
      if (element) observer.observe(element);
    });

    return () => observer && observer.disconnect();
  });

  return { isNearScreen, fromRef };
};

export default useNearScreen;
