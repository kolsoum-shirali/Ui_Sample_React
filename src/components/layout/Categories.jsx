const options = [
  { title: "Laptops & Computers" },
  { title: "Cameras & photography" },
  { title: "Smart Phones & Tablets" },
  { title: "Video Games & Consoles" },
  { title: "Waterproof Headphones" },
];

export default function Categories() {
  return (
    <div className="lg:col-span-1">
      <h3 className="text-lg lg:text-xl mb-2 md:mb-7">Categories</h3>
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
