import { Component } from "react";
import { toast, ToastContainer } from "react-toastify";
import "../node_modules/react-toastify/dist/ReactToastify.css";

toast.configure();

class Todos extends Component {
  state = { userInput: "", todos: [] };

  handleSubmit = (e) => {
      const { userInput } = this.state;
    e.preventDefault();
    this.setState((prevState) => ({
       todos: [...prevState.todos, userInput]
    }))
    toast(`New todo added: ${userInput} `);
  };

  handleChange = (e) => {
    this.setState({userInput: e.target.value});
  };

  handleClick = (e) => {
    const { userInput } = this.state;
    const ul = document.getElementById("todos");
    ul.removeChild(e.currentTarget.parentElement);
    toast(`Todo deleted: ${userInput} `);
  };

  componentDidMount() {
      
  }
  
  componentWillUnmount() {

  }

  render() {
      const { todos } = this.state;
    return (
      <section>
        <ToastContainer />
        <h1>Todos and Toast</h1>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} placeholder="Enter a Todo" />
          <button>Submit</button>
        </form>
        <ul id="todos">
          {todos.map((todo) => {
            return (
              <li key={todo}>
                {todo}
                <button onClick={this.handleClick}>x</button>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default Todos;

//*** using useState Hook ***//
// import { useState } from "react";
// import { toast, ToastContainer } from "react-toastify";
// import "../node_modules/react-toastify/dist/ReactToastify.css";

// toast.configure();

// const Todos = () => {
//   const [userInput, setUserInput] = useState("");
//   const [todos, setTodos] = useState([]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setTodos((prevTodos) => [...prevTodos, userInput]);
//     toast(`New todo added: ${userInput} `);
//   };

//   const handleChange = (e) => {
//     setUserInput(e.target.value);
// };

// const handleClick = (e) => {
//     const ul = document.getElementById("todos");
//     ul.removeChild(e.currentTarget.parentElement);
//     toast(`Todo deleted: ${userInput} `);
//   };

//   return (
//     <section>
//       <ToastContainer />
//       <h1>Todos and Toast</h1>
//       <form onSubmit={handleSubmit}>
//         <input onChange={handleChange} placeholder="Enter a Todo"/>
//         <button>Submit</button>
//       </form>
//       <ul id="todos">
//         {todos.map((todo) => {
//           return (
//             <li key={todo}>
//               {todo}
//               <button onClick={handleClick}>x</button>
//             </li>
//           );
//         })}
//       </ul>
//     </section>
//   );
// };

// export default Todos;
