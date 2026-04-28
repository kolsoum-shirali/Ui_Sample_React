import TopHeader from "./TopHeader";
import HeaderMenu from "./HeaderMenu";
export default function Header() {
  return (
    <div className="">
      <div className="">
        <div className="relative max-lg:mb-24">
          <TopHeader />
          <HeaderMenu />
        </div>
      </div>
    </div>
  );
}
