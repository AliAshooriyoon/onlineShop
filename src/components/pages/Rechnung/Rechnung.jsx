import "./Rechnung.css";
import { useRef } from "react";

export const Rechnung = ({ calculateFinal }) => {
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
        className="rechnung pt-4  w-[60rem] border-4 rounded-2xl h-[40rem] bg-stone-900 absolute top-32 left-0 right-0 mx-auto text-center blur-none"
      >
        <h2 className="text-5xl pb-8">Rechnung</h2>
        <p className=" indent-4 text-white">Sie bezahlen {calculateFinal} $</p>
        <div className="form flex gap-8 flex-col p-12">
          <label for="nachName">
            Ihr Name
            <input type="text" name="fullName" id="nachName" />
          </label>
          <label for="mail">
            Ihre E-Mail
            <input type="text" name="mail" id="mail" />
          </label>
          <label for="street">
            Ihre Straße
            <input type="text" name="street" id="street" />
          </label>
          <label for="post">
            Ihre Postadresse
            <input type="text" name="post" id="post" />
          </label>
        </div>
        <div className="btnsBox flex gap-12 flex-row justify-center items-center">
          <button
            type="button"
            className=" bg-red-400 text-white w-44 h-14 rounded-2xl cursor-pointer "
          >
            schließen
          </button>
          <button
            type="button"
            className=" bg-cyan-400 text-white w-44 h-14 rounded-2xl cursor-pointer "
          >
            bestellen
          </button>
        </div>
      </div>
      <div className="blurBox w-[100vw] h-[100%] blur-2xl z-[-1] absolute right-0 top-0"></div>
    </>
  );
};
