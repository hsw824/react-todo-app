import "./App.css";

function App() {
  const todoData = [
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
  ];
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
              <button className="btnStyle">x</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
