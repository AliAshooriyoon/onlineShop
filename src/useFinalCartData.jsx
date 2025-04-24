import { createContext, useState, useContext } from "react";

const finalData = createContext([]);
const ChangerOpacity = ({ children }) => {
  const [status, setStatus] = useState([]);
  const changeStatus = (stat) => {
    setStatus(stat);
  };
  const submitChangeStat = (val) => {
    val(status);
  };
  return (
    <finalData.Provider value={{ changeStatus, submitChangeStat, status }}>
      {/* <div className={`${status && "opacity-40"}`}>{children}</div> */}
      {children}
    </finalData.Provider>
  );
};
export const useStatusOpacity = () => useContext(finalData);
export default ChangerOpacity;
