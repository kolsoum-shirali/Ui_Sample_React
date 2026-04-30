import TopHeader from "./TopHeader";
import HeaderMenu from "./HeaderMenu";
import MobileMenubar from "./MobileMenubar";
import { useState } from "react";

export default function Header() {
    const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuVisible(!isMobileMenuVisible);
  };

  return (
    <div className="">
      <div className="">
        <div className="relative">
          <TopHeader />
          <HeaderMenu toggleMobileMenu={toggleMobileMenu} />
          <MobileMenubar
            closeMenu={toggleMobileMenu}
            menuShow={isMobileMenuVisible}
          />
        </div>
      </div>
    </div>
  );
}
