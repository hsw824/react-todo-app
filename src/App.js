import { useState } from "react";
import "./App.css";
import List from "./components/List";

function App() {
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.currentTarget.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };
    setTodoData((prev) => [...prev, newTodo]);
    setValue("");
  };

  return (
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>할 일 목록</h1>
        </div>
        <form style={{ display: "flex" }} onSubmit={handleOnSubmit}>
          <input
            style={{ flex: "10", padding: "5px" }}
            type="text"
            value={value}
            onChange={onChange}
            placeholder="해야 할 일을 입력하세요"
          />
          <input
            type="submit"
            value="입력"
            style={{ flex: "1" }}
            className="btn"
          />
        </form>
        <List todoData={todoData} setTodoData={setTodoData} />
      </div>
    </div>
  );
}

export default App;
