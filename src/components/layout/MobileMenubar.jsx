import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import { useEffect } from "react";

const Menus = [
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

export default function MobileMenubar({ closeMenu, menuShow }) {
  const [visibleSubMenu, setVisibleSubMenu] = useState(null);

  const toggleSubMenu = (index) => {
    setVisibleSubMenu((prev) => (prev === index ? null : index));
  };
  // Effect to lock body scroll when the menu is shown
  useEffect(() => {
    if (menuShow) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = "unset"; // Re-enable scrolling
    }
    return () => {
      document.body.style.overflow = "unset"; // Re-enable scrolling
    };
  }, [menuShow]);
  return (
    <div
      className={`overflow-y-auto min-h-screen absolute inset-0 z-50 py-4 px-5 bg-white transition-transform duration-300 ${
        menuShow ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <button
        onClick={closeMenu}
        className="flex justify-center items-center mx-auto shadow-lg rounded-full aspect-square w-10 h-10 border border-gray-400/20"
      >
        <span className="text-xl">X</span>
      </button>
      <img src={Logo} alt="Logo" className="w-44 mx-auto mt-5" />

      <div className="mt-10 space-y-2">
        {Menus.map((menu, index) => (
          <div key={index}>
            {menu.url ? (
              <Link to={menu.url} onClick={closeMenu}>
                <p className="hover:bg-slate-100 hover:text-liberty p-2 transition-colors cursor-pointer">
                  {menu.title}
                </p>
              </Link>
            ) : (
              <p
                onClick={() => toggleSubMenu(index)}
                className="p-2 cursor-pointer hover:bg-slate-100 hover:text-liberty"
              >
                {" "}
                {menu.title}
                {menu.subMenu.length > 0 && (
                  <i
                    className={`text-xs ${
                      visibleSubMenu === index
                        ? "icon-down-open"
                        : "icon-right-open"
                    }`}
                  ></i>
                )}
              </p>
            )}
            {menu.subMenu.length > 0 && visibleSubMenu === index && (
              <div
                className="px-3 transition-all duration-300 ease-in-out"
                style={{
                  maxHeight: visibleSubMenu === index ? "200px" : "0",
                  overflow: "hidden",
                }}
              >
                {menu.subMenu.map((item, inx) => (
                  <Link
                    key={inx}
                    to={item.url}
                    className="text-sm"
                    onClick={closeMenu}
                  >
                    <h6 className="text-gray-500 hover:bg-slate-100 p-2 hover:text-liberty transition-colors cursor-pointer ">
                      <i className="icon-ok"></i>
                      {item.title}
                    </h6>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
