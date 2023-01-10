const User = (props) => {
  console.log(props.data);
  const data = "user data";
  return (
    <>
      <span
        onClick={() => props.showAlert(data)}
        style={{ padding: "1rem", backgroundColor: "gray", display: "inline-block", border: "1px solid white" }}
      >
        {props.data.name}
      </span>
      <span
        onClick={() => props.showAlert(data)}
        style={{ padding: "1rem", backgroundColor: "gray", display: "inline-block", border: "1px solid white" }}
      >
        {props.data.age}
      </span>
      <span
        onClick={() => props.showAlert(data)}
        style={{ padding: "1rem", backgroundColor: "gray", display: "inline-block", border: "1px solid white" }}
      >
        {props.data.gender}
      </span>
    </>
  );
};

export default User;
