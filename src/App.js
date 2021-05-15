import React from "react";
// import { toast, ToastContainer } from "react-toastify";
import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./App.css";
import Todos from "./Todos";

// toast.configure()

class App extends React.Component {
  render() {

    // const notify = () => {
    //   toast("a new todo has been added")
    // }

    return (
      <div className="app">
        {/* <ToastContainer /> */}
        {/* <button onClick={notify}>Notify!</button> */}
        <Todos />
      </div>
    );
  }
}

export default App;
