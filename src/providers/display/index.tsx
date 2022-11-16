import { createContext, useContext, useEffect, useState } from "react";

interface IDisplayContext {
  display: string;
  setDisplay: React.Dispatch<React.SetStateAction<string>>;
}

// criar o context
export const DisplayContext = createContext<IDisplayContext>({
  display: "0",
  setDisplay: () => "",
});

// criar o provider
export const DisplayProvider = ({ children }: any) => {
  const [display, setDisplay] = useState("0");

  return (
    <DisplayContext.Provider value={{ display, setDisplay }}>
      {children}
    </DisplayContext.Provider>
  );
};

export const useDisplay = () => useContext(DisplayContext);
