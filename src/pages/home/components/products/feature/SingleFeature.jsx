const lines = [
  { color: "bg-green-500" },
  { color: "bg-mainPink" },
  { color: "bg-liberty group-hover:bg-yellow-300" },
];
const actions = [
  { icon: "icon-shopping-bag text-liberty " },
  { icon: "icon-heart text-blue-500" },
  { icon: "icon-search text-blue-500" },
];
export default function SingleFeature({ product }) {
  return (
    <div className="shadow-lg group ">
      <div className="relative bg-gray-100/60 group-hover:bg-gray-100 h-60 overflow-hidden flex justify-center items-center rounded-md">
        <img
          src={product.img}
          alt="{product.img}"
          className="max-w-full h-auto rounded-md object-contain
"
        />
        <div className="absolute inset-x-0 bottom-0 transition-transform  transform translate-y-full group-hover:translate-y-0 duration-300 flex flex-col justify-between items-center h-full z-1 border border-gray-300/50 rounded-t-md">
          <div className="flex w-full p-3">
            {actions.map((action, inx) => (
              <div
                key={inx}
                className={`p-1 ${inx === 0 ? "bg-purple-300/20 rounded-full " : ""}`}
              >
                <i className={`text-base ${action.icon}`}></i>
              </div>
            ))}
          </div>
          <button className="bg-green-600 text-white rounded-sm px-4 py-2 text-sm  hover:bg-white hover:transition-colors hover:text-green-800 border-2 border-green-600 mb-3">
            View Details
          </button>
        </div>
      </div>
      <div
        className="py-5 flex flex-col justify-center items-center gap-2 group-hover:bg-mediumBlue group-hover:text-white transition-colors 
"
      >
        <h3 className="text-lg text-mainPink text-center group-hover:text-white font-bold">
          {product.title}
        </h3>
        <div className="flex justify-center gap-1">
          {lines.map((line, index) => (
            <div
              key={index}
              className={`${line.color} h-[5px] w-4 rounded-full`}
            ></div>
          ))}
        </div>
        <h3 className="text-liberty group-hover:text-white text-sm font-medium">
          {product.code}
        </h3>
        <h3 className="text-base text-liberty group-hover:text-white">
          <span>$</span>
          {product?.price}
        </h3>
      </div>
    </div>
  );
}
