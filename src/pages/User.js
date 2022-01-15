import { useParams } from "react-router-dom";

function User() {
  let {username} = useParams();
 
  return (
    <>
      <h2>User Profile 👥</h2>
      <p>
        User name: <b>{username}</b>
      </p>
    </>
  );
}

export { User };
