import { useParams } from "react-router-dom";
function User() {
  const params = useParams();
  const { id } = params;
  return (
    <>
      <h1>User component {id}</h1>
    </>
  );
}

export default User;
