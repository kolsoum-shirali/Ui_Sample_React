import CustomerCare from "./CustomerCare";
import Categories from "./Categories";
import FooterDesc from "./FooterDesc";
import PagesItems from "./PagesItems";
import Socials from "../common/Socials";
export default function Footer() {
  return (
    <div className="bg-ghostWhite mt-10 lg:mt-20">
      <div className="container mx-auto py-20">
        <div className="grid grid-cols-6 gap-y-7 lg:gap-10">
          <FooterDesc />
          <Categories />
          <CustomerCare />
          <PagesItems />
        </div>
      </div>
      <div className="bg-lavender py-5">
        <div className="w-9/12 mx-auto">
          <div className="grid grid-cols-6">
            <div className="col-span-4 flex items-center">
              <p className="text-sm md:text-base text-gray-400">
                <i className="icon-copyright"></i>
                Webecy - All Rights Reserved
              </p>
            </div>
            <div className="col-span-2">
              <Socials />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
