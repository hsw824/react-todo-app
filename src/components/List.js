const List = ({ todoData, setTodoData }) => {
  const getStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px dotted #ccc",
      textDecoration: completed ? "line-through" : "none",
    };
  };

  const handleClick = (id) => {
    const newData = todoData.filter((data) => data.id !== id);
    setTodoData(newData);
  };

  const handleCompleChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    setTodoData(newTodoData);
  };
  return (
    <div>
      {todoData.map((data) => {
        return (
          <div style={getStyle(data.completed)} key={data.id}>
            <input
              type="checkbox"
              defaultChecked={data.completed}
              onChange={() => handleCompleChange(data.id)}
            />
            {data.title}
            <button onClick={() => handleClick(data.id)} className="btnStyle">
              x
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default List;
