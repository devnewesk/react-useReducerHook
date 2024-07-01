import { useReducer, useState } from "react";
import "./App.css";

function App() {
  const initialState = { username: "newesk", password: "123456" };
  const reducer = (state, action) => {
    switch (action.type) {
      case "logout":
        return { username: "not logged in" };
      case "login":
        return { username: action.payload };
      default:
        break;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loggedUser, setLoggedUser] = useState("");
  return (
    <>
      <p> USERNAME: {state.username} </p>
      {state.username !== "not logged in" ? (
        <button onClick={() => dispatch({ type: "logout" })}>logout</button>
      ) : (
        <button
          onClick={() => dispatch({ type: "login", payload: loggedUser })}
        >
          {" "}
          login{" "}
        </button>
      )}
      {state.username == "not logged in" && (
        <input
          type="text"
          value={loggedUser}
          onChange={(e) => setLoggedUser(e.target.value)}
        />
      )}
    </>
  );
}

export default App;
