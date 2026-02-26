import Logo from "../../assets/img/logo.png";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
export default function TopHeader() {
  return (
    <div className="flex justify-between items-center p-5">
      <i className="icon-menu text-2xl text-green-800 lg:hidden"></i>
      <img src={Logo} alt={Logo} className="w-44" />
      <div className="gap-2 hidden lg:flex">
        <div className="flex items-center gap-2 shadow-md rounded-sm">
          <Link to="/register" className="p-2">
            <i className="icon-user-circle-o"></i>
            عضویت
          </Link>
          <Divider orientation="vertical" flexItem />
          <Link to="/login" className="p-2">
            <i className="icon-user-circle-o"></i>
            ورود
          </Link>
        </div>
        <Link to="/login" className="shadow-md rounded-sm p-3 relative">
          <i className="icon-shopping-bag"></i>
          <span className="bg-green-600 aspect-square rounded-full absolute right-0 -top-2 min-w-6 max-h:h-6 text-center text-white">
            99
          </span>
        </Link>
      </div>
    </div>
  );
}
