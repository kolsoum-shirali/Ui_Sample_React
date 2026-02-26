const options = [
  { title: "اکانت من" },
  { title: "تاریخچه خرید" },
  { title: "رهگیری سفارش" },
  { title: "ارتباط با ما" },
  { title: "قوانین" },
];

export default function EasyAccess() {
  return (
    <div className="col-span-12 md:col-span-4 lg:col-span-3">
      <h3 className="text-lg lg:text-xl mb-2 md:mb-5">دسترسی سریع</h3>
      <div className="space-y-1">
        {options.map((option, index) => {
          return (
            <div key={index}>
              <span className="text-sm lg:text-base text-gray-500">{option.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
