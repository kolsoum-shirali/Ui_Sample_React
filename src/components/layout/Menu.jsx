import { Link } from "react-router-dom";

export default function HeaderMenu({ menuOptions }) {
  return (
    <ul className="flex items-end h-full gap-x-2 xl:gap-x-6">
      {menuOptions.map((menu, index) => {
        return (
          <li
            key={index}
            className="relative flex hover:text-purple-900 transition-colors bg cursor-pointer group"
          >
            {menu.url ? (
              <Link to={menu.url} className="flex">
                {menu.title} <i className={menu.icon}></i>
              </Link>
            ) : (
              <span className={menu.active ? "text-mainPink" : ""}>
                {menu.title}
              </span>
            )}
            {menu.subMenu.length > 0 && (
              <i
                className={`icon-down-open ${menu.active ? "text-mainPink" : ""}`}
              ></i>
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
  );
}
