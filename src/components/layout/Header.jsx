import { useState } from "react";
import TopHeader from "./TopHeader";
import DesktopMenubar from "./DesktopMenubar";
import MobileMenubar from "./MobileMenubar";

export default function Header() {
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!isMobileMenuVisible);
  };

  return (
    <div className="shadow-md">
      <div className="container mx-auto">
        <div className="relative max-lg:mb-24">
        <TopHeader toggleMobileMenu={toggleMobileMenu} />
        </div>
        <DesktopMenubar />
        <MobileMenubar
          closeMenu={toggleMobileMenu}
          menuShow={isMobileMenuVisible}
        />
      </div>
    </div>
  );
}