const options = [
  { icon: "icon-at", desc: "support@greeny.com" },
  { icon: "icon-phone", desc: "09000000000" },
  { icon: "icon-location-outline", desc: "اصفهان" },
];

export default function ContactWays() {
  return (
    <div className="col-span-12 md:col-span-4 lg:col-span-3 max-sm:px-5">
      <h3 className="text-lg lg:text-xl mb-2 md:mb-5">راه های ارتباطی</h3>
      <div className="space-y-1">
        {options.map((option, index) => {
          return (
            <div key={index}>
              <i className={`${option.icon} text-green-800 text-lg`}></i>
              <span className="text-sm lg:text-base text-gray-500">
                {option.desc}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
