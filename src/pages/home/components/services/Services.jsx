const options = [
  {
    title: "تحویل درب منزل رایگان",
    des: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.",
    icon: "icon-truck",
  },
  {
    title: "مرجوعی کالا بی قید و شرط",
    des: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.",
    icon: "icon-arrows-cw",
  },
  {
    title: "سیستم پشتیبانی سریع",
    des: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.",
    icon: "icon-headphones",
  },
  {
    title: "راه های پرداخت امن",
    des: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.",
    icon: "icon-lock",
  },
];
const Services = () => {
  return (
    <div className="grid grid-cols-12 gap-2 md:gap-5">
      {options.map((option, index) => {
        return (
          <div
            className="col-span-12 sm:col-span-6 lg:col-span-3 p-3 md:p-5 flex  gap-2 md:gap-4 items-start rounded hover:bg-green-600 group transition-colors delay-100 hover:text-white
 "
          >
            <span className="border-4 md:border-8 border-double flex rounded-full aspect-square">
              <i className={`${option.icon} text-2xl md:text-4xl mt-1`}></i>
            </span>
            <div className="flex flex-col space-y-2 ">
              <h2 className="font-bold md:text-sm lg:text-base">
                {option.title}
              </h2>
              <p
                className="text-gray-500 text-sm lg:text-base group-hover:text-white transition-colors delay-100
"
              >
                {option.des}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
