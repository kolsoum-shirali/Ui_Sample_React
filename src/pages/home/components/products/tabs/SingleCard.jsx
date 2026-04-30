const actions = [
  { icon: "icon-shopping-bag" },
  { icon: "icon-heart" },
  { icon: "icon-search" },
];
export default function SingleCard({ product }) {
  return (
    <div className="col-span-3 lg:col-span-1 group">
      <div className="relative bg-gray-100/60 group-hover:bg-gray-100 h-60 overflow-hidden flex justify-center items-center rounded p-5 ">
        <img
          src={product.img}
          alt="{product.img}"
          className="max-w-full h-auto rounded-md bg-contain
"
        />
        <div className="absolute inset-x-0 bottom-0 transition-transform  transform translate-y-full group-hover:translate-y-0 duration-300 flex flex-col justify-end items-center h-full z-1  rounded">
          <div className="flex flex-col items-start w-full p-3">
            {actions.map((action, inx) => (
              <div
                key={inx}
                className={`p-1 ${inx === 0 ? "bg-purple-300/20 rounded-full " : ""}`}
              >
                <i className={`text-base text-liberty ${action.icon}`}></i>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-between font-medium py-3">
        <h3 className="text-sm text-liberty text-center text-shadow-lg ">{product.title}</h3>
        <div className="flex justify-center items-center gap-3">
          <h3 className="text-xs text-liberty mt-1">
            <span>$</span>
            {product?.new_price}
          </h3>
          <h3 className="text-xs line-through text-red-500 mt-1">
            <span>$</span>
            {product?.old_price}
          </h3>
        </div>
      </div>
    </div>
  );
}
