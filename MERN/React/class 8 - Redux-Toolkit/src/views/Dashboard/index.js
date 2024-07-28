import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTheme } from "../../store/themeSlice";

const Dashboard = () => {
  // const ticketCategories = useSelector((state) => {
  //   return state.ticketCategories;
  // });
  const dispatch = useDispatch();

  const theme = useSelector((state) => {
    console.log(state, "state data---");
    return state.theme;
  });

  const handleColorChange = () => {
    dispatch(updateTheme("blue"));
    console.log("bilal");
  };

  return (
    <>
      <div style={{ backgroundColor: theme }}>Dashboard Page</div>

      <button onClick={handleColorChange}>Change color</button>
    </>
  );
};

export default Dashboard;
