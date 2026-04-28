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
        active:true
  },
  { title: "Pages", url: "/", subMenu: [] },

  { title: "Products", url: "/", subMenu: [] },
  { title: "Blog", url: "/", subMenu: [] },
  { title: "Shop", url: "/", subMenu: [] },
  { title: "Contact", url: "/", subMenu: [] },
];

export default function HeaderMenu() {
  return (
    <div className="py-3">
      <div className="container mx-auto grid grid-cols-2 ">
        <div className="col-span-1 flex items-end">
          <img src={Logo} alt="main-logo" className="mr-10" />
          <Menu menuOptions={menuOptions} />
        </div>
        <div className="col-span-1 flex justify-end">
          <input
            type="text"
            id="search"
            name="search"
            autoComplete="off"
            placeholder=""
            className="h-11 border border-gray-400/20 focus:border focus:border-mainPink px-3 placeholder:text-sm text-sm placeholder:text-gray-500 w-2/5"
          />
          <span className="bg-mainPink px-3 flex justify-center items-center">
            <i className="icon-search text-white text-xl"></i>
          </span>
        </div>
      </div>
    </div>
  );
}
