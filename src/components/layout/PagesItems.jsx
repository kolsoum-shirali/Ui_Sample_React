const options = [
  { title: "Blog" },
  { title: "Browse the Shop" },
  { title: "Category" },
  { title: "Pre-Built Pages" },
  { title: "Visual Composer Elements" },
  { title: "WooCommerce Pages" },
];

export default function PagesItems() {
  return (
    <div className="col-span-6 md:col-span-1">
      <h3 className="text-lg lg:text-xl mb-2 md:mb-7">Pages</h3>
      <div className="space-y-4">
        {options.map((option, index) => {
          return (
            <div key={index}>
              <span className="text-sm lg:text-base text-gray-400">{option.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
