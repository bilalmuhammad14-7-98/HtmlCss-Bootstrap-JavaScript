import { useParams } from "react-router-dom";
import { getUsers } from "../../config/firebase";
import { useEffect } from "react";

function UpdateUser() {
  let { id } = useParams();
  console.log("Userid-------------", id);

  useEffect(() => {
    getCurrentUser();
  }, []);

  const getCurrentUser = async () => {
    const userData = await getUsers();
    const user = userData.find((user) => user.email === id);

    console.log(user, "found uers-------");
    return user || null; // Return null if no user is found
  };
  return (
    <>
      <h1>Update User Screen</h1>
    </>
  );
}

export default UpdateUser;
