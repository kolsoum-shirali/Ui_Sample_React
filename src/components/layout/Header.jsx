import TopHeader from "./TopHeader";
import DesktopMenubar from "./DesktopMenubar";
export default function Header() {
  return (
    <div className="shadow-md">
      <div className="container mx-auto">
        <TopHeader />
        <DesktopMenubar />
      </div>
    </div>
  );
}
