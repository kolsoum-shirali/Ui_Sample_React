import Logo from "../../assets/img/logo.png";
import Menu from "./Menu";
const menuOptions = [
  {
    title: "Home",
    url: "",
    subMenu: [
      { title: "blog", url: "/" },
      { title: "contact_us", url: "/" },
      { title: "about_us", url: "/" },
    ],
    active: true,
  },
  { title: "Pages", url: "/", subMenu: [] },

  { title: "Products", url: "/", subMenu: [] },
  { title: "Blog", url: "/", subMenu: [] },
  { title: "Shop", url: "/", subMenu: [] },
  { title: "Contact", url: "/", subMenu: [] },
];

export default function HeaderMenu({ toggleMobileMenu }) {
  return (
    <div className="py-3">
      <div className="w-11/12 xl:w-8/12 mx-auto grid grid-cols-4 ">
        <div className="col-span-1 lg:col-span-2 flex items-center lg:items-end">
          <img src={Logo} alt="main-logo" className="mr-2 xl:mr-10" />
          <div className="hidden lg:block">
            <Menu menuOptions={menuOptions} />
          </div>
        </div>
        <div className="col-span-3 lg:col-span-2 flex items-center justify-end">
          <div className="flex justify-end w-full">
            <input
              type="text"
              id="search-head"
              name="search-head"
              autoComplete="off"
              placeholder=""
              className="h-11 border border-gray-400/20 focus:border focus:border-mainPink px-3 placeholder:text-sm text-sm placeholder:text-gray-500 w-3/5 lg:w-2/5"
            />
            <span className="bg-mainPink px-3 flex justify-center items-center">
              <i className="icon-search text-white text-xl"></i>
            </span>
          </div>
          <i
            className="icon-menu text-2xl lg:hidden text-liberty"
            onClick={toggleMobileMenu}
          ></i>
        </div>
      </div>
    </div>
  );
}
