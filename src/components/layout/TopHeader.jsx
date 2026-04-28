import { Link } from "react-router-dom";
const options = [
  { title: "mhhasanul@gmail.com", icon: "icon-mail" },
  { title: "(12345)67890", icon: "icon-phone" },
];
const Menus = [
  {
    title: "English",
    url: "",
    subMenu: [
      { title: "Germany", url: "/" },
      { title: "Persian", url: "/" },
      { title: "Arabic", url: "/" },
    ],
  },
  {
    title: "USD",
    url: "",
    subMenu: [
      { title: "USD_1", url: "/" },
      { title: "USD_1", url: "/" },
      { title: "USD_1", url: "/" },
    ],
  },
  { title: "Login", url: "/", subMenu: [], icon: "icon-user-o" },

  { title: "Wishlist", url: "/", subMenu: [], icon: "icon-heart" },
  { title: "", url: "/", subMenu: [], icon: "icon-shopping-bag" },
];

export default function TopHeader() {
  return (
    <div className="bg-mainPurple text-white py-3">
      <div className="container mx-auto grid grid-cols-2 ">
        <div className="col-span-1 flex">
          {options.map((opt, index) => {
            return (
              <div key={index} className={index == 1 ? "ml-10" : ""}>
                <i className={opt.icon}></i>
                <span>{opt.title}</span>
              </div>
            );
          })}
        </div>
        <div className="col-span-1 ml-auto">
          <ul className="flex gap-x-8">
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
                    <span>{menu.title}</span>
                  )}
                  {menu.subMenu.length > 0 && (
                    <i className="icon-down-open"></i>
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
      </div>
    </div>
  );
}
