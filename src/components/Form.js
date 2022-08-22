const Form = ({ value, setValue, handleSubmit }) => {
  const onChange = (event) => {
    setValue(event.currentTarget.value);
  };

  return (
    <div>
      <form style={{ display: "flex" }} onSubmit={handleSubmit}>
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
    </div>
  );
};

export default Form;
