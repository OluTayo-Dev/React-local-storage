import { useContext } from "react";
import { Context } from "./Context";


export default function MyComponent() {
    const value = useContext(Context);
  return  <span>{value}</span>;
    
  
};
