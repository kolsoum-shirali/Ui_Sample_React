import Menu from "./Menu";
const options = [
  { title: "mhhasanul@gmail.com", icon: "icon-mail" },
  { title: "(12345)67890", icon: "icon-phone" },
];
const menuOptions = [
  {
    title: "English",
    url: "",
    subMenu: [
      { title: "Germany", url: "/" },
      { title: "Persian", url: "/" },
      { title: "Arabic", url: "/" },
    ],
    active: false,
  },
  {
    title: "USD",
    url: "",
    subMenu: [
      { title: "USD_1", url: "/" },
      { title: "USD_1", url: "/" },
      { title: "USD_1", url: "/" },
    ],
    active: false,
  },
  { title: "Login", url: "/", subMenu: [], icon: "icon-user-o" },
  { title: "Wishlist", url: "/", subMenu: [], icon: "icon-heart" },
  { title: "", url: "/", subMenu: [], icon: "icon-shopping-bag" },
];

export default function TopHeader() {
  return (
    <div className="bg-mainPurple text-white py-3">
      <div className="w-11/12 xl:w-8/12 mx-auto grid grid-cols-2 ">
        <div className="col-span-2 md:col-span-1 flex gap-2 flex-wrap">
          {options.map((opt, index) => {
            return (
              <div key={index} className={`flex ${index === 1 ? "lg:ml-10" : ""}`}>
                <i className={opt.icon}></i>
                <span>{opt.title}</span>
              </div>
            );
          })}
        </div>
        <div className="col-span-1 ml-auto hidden md:block">
          <Menu menuOptions={menuOptions} />
        </div>
      </div>
    </div>
  );
}
