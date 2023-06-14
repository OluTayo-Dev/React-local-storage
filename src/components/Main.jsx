import React from "react";
import { Context } from "./Context";
import MyComponent from "./MyComponent";

function Main() {
    const value = "My Context Value";
    return(
        <Context.Provider value={value}>
            <MyComponent />
        </Context.Provider>
    );
}
export default Main;