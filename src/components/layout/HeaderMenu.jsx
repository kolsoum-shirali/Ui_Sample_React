import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
const Menus = [
  {
    title: "Home",
    url: "",
    subMenu: [
      { title: "blog", url: "/" },
      { title: "contact_us", url: "/" },
      { title: "about_us", url: "/" },
    ],
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
          <ul className="flex gap-x-6">
            {Menus.map((menu, index) => {
              return (
                <li
                  key={index}
                  className="relative hover:text-purple-900 transition-colors bg cursor-pointer group"
                >
                  {menu.url ? (
                    <Link to={menu.url}>
                      {menu.title} <i className={menu.icon}></i>
                    </Link>
                  ) : (
                    <span className="text-mainPink">{menu.title}</span>
                  )}
                  {menu.subMenu.length > 0 && (
                    <i className="icon-down-open text-mainPink"></i>
                  )}
                  {menu.subMenu.length > 0 && (
                    <div className="absolute right-0 w-56 bg-white opacity-0 border border-gray-400/20 shadow-md z-10 p-5 invisible transition-all transform translate-y-16 group-hover:translate-y-0 duration-300 ease-in-out delay-150 group-hover:opacity-100 group-hover:visible">
                      <div>
                        {menu.subMenu.map((item, inx) => {
                          return (
                            <Link key={inx} to={item.url} className="text-sm">
                              <h6 className="text-gray-500 hover:bg-slate-100 p-2 hover:text-purple-900 transition-colors cursor-pointer ">
                                {item.title}
                              </h6>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-span-1 flex justify-end">
          <input
            type="text"
            id="search"
            name="search"
            autoComplete="off"
            placeholder=""
            className="h-11 border border-gray-400/20 focus:border focus:border-mainPurple px-3 placeholder:text-sm text-sm placeholder:text-gray-500 w-2/5"
          />
          <span className="bg-mainPink px-3 flex justify-center items-center">
            <i className="icon-search text-white text-xl"></i>
          </span>
        </div>
      </div>
    </div>
  );
}
