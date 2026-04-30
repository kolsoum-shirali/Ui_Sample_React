const options = [
  { title: "MyAccount" },
  { title: "Discount" },
  { title: "Returns" },
  { title: "Orders History" },
  { title: "Orders Tracking" },
];

export default function CustomerCare() {
  return (
    <div className="col-span-6  md:col-span-1">
      <h3 className="text-lg lg:text-xl mb-2 md:mb-7">Customer Care</h3>
      <div className="space-y-2 lg:space-y-4">
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
