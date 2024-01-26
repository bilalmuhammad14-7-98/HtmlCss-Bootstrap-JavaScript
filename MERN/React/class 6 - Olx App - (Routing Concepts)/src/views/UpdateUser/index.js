import { useParams } from "react-router-dom";
import { getUsers } from "../../config/firebase";
import { useEffect, useState } from "react";
import { updateUserData } from "../../config/firebase";

function UpdateUser() {
  let { id } = useParams();
  console.log("Userid-------------", id);

  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    getCurrentUser();
  }, []);

  const getCurrentUser = async () => {
    const userData = await getUsers();
    const user = userData.find((user) => user.email === id);

    console.log(user, "found uers-------");
    setCurrentUser(user);
    return user || null; // Return null if no user is found
  };

  const updateUser = async () => {
    const res = await updateUserData();
    console.log(res, "updated user");
  };

  return (
    <>
      <h1>Update User Screen</h1>
      <button onClick={updateUser}>Update</button>
    </>
  );
}

export default UpdateUser;
