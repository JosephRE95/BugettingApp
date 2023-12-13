import React from "react";
import { fetchData } from "../helpers";
import { useLoaderData } from "react-router-dom";
import Intro from "../components/Intro";
// export function dashBoardLoader(){
//     const userName = fetchData("userName")
//     return { userName }
// }

export function dashBoardLoader() {
  const userName = fetchData("userName");
  return { userName };
}
const Dashboard = () => {
  const { userName } = useLoaderData();

  return <>{userName ? <p>{userName}</p> : <Intro />}</>;
};
export default Dashboard;
