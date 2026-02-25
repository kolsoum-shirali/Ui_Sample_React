const categories = [
  { title: "خرید محصولات کشاورزی" },
  { title: "فروش محصولات کشاورزی" },
  { title: "کار و خدمات کشاورزی" },
  { title: "تجهیزات و ادوات کشاورزی" },
  { title: "ملک و زمین کشاورزی" },
];

export default function HomeCategories() {
  return (
    <div>
      <h3 className="text-white bg-green-600 text-center p-2 md:text-base lg:text-lg rounded-t-md">
        دسته بندی
      </h3>
      <ul className="md:text-sm lg:text-base px-5 shadow ">
        {categories.map((category, index) => (
          <li
            key={index}
            className="hover:cursor-pointer hover:bg-slate-100 hover:text-green-800 transition-colors p-3 border-b border-b-gray-400/20"
          >
            {category.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
