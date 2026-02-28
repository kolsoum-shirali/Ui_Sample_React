const categories = [
  { title: "خرید محصولات کشاورزی" },
  { title: "فروش محصولات کشاورزی" },
  { title: "کار و خدمات کشاورزی" },
  { title: "تجهیزات و ادوات کشاورزی" },
  { title: "ملک و زمین کشاورزی" },
];

export default function AdsInfo() {
  return (
    <div>
      <div className="shadow-md rounded-md border border-gray-400/20 p-5 space-y-7">
        <h3 className="text-lg lg:text-xl text-green-800 font-semibold text-center">
          گرینی | سامانه آگهی های خرید و فروش عمده محصولات کشاورزی
        </h3>
        <div>
          <p className="text-justify text-sm lg:text-base">
            ما وب سایت گرینی را برای شما آماده کرده ایم، شما می توانید آگهی های
            نیازمندی خرید و هم چنین فروش خود را در ثبت آگهی انجام دهید. آگهی ها
            در دسته بندی های زیر موجود می باشد :
          </p>
          <ul className="space-y-2 mt-5">
            {categories.map((category, index) => {
              return (
                <li key={index} className="text-sm lg:text-base">
                  <i className="icon-ok"></i>
                  {category.title}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
