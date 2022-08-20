import { useState } from "react";
import "./App.css";

function App() {
  const [todoData, setTodoData] = useState([
    {
      id: "1",
      title: "공부하기",
      completed: true,
    },
    {
      id: "2",
      title: "청소하기",
      completed: false,
    },
  ]);

  const handleClick = (id) => {
    const newData = todoData.filter((data) => data.id !== id);
    setTodoData(newData);
  };
  return (
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>할 일 목록</h1>
        </div>
        {todoData.map((data) => {
          return (
            <div className="listStyle" key={data.id}>
              <input type="checkbox" defaultChecked={data.completed} />
              {data.title}
              <button onClick={() => handleClick(data.id)} className="btnStyle">
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
