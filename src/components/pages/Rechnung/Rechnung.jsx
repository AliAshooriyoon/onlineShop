import "./Rechnung.css";
import { useRef } from "react";

export const Rechnung = () => {
  const currentElm = useRef();
  // console.log(currentElm.current.parentElement.parentElement.parentElement);
  // currentElm.current.parentElement.style.filter = "blur(10px)";
  // if (currentElm.current) {
  //   currentElm.current.parentElement.parentElement.parentElement.style.filter =
  //     "blur(3px)";
  //   currentElm.current.parentElement.parentElement.parentElement.style.zIndex =
  //     "-1";
  //   currentElm.current.style.filter = "blur(0) !important";
  // }
  return (
    <>
      <div
        ref={currentElm}
        className="rechnung w-[60rem] border-4 rounded-2xl h-[40rem] bg-stone-900 absolute top-32 left-0 right-0 mx-auto text-center blur-none"
      >
        Rechnung
      </div>
      <div className="blurBox w-[100vw] h-[100%] blur-2xl z-[-1] absolute right-0 top-0"></div>
    </>
  );
};
