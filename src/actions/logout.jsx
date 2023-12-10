// rrd imports
import { redirect } from "react-router-dom";

// library
import { toast } from "react-toastify";

// helpers
import { deleteItem } from "../helpers";

export async function logOutAction() {
  // delete the user
  deleteItem({
    key: "userName"
  })
  toast.success("You have deleted your account!")
  // return redirect
  return redirect("/")
}