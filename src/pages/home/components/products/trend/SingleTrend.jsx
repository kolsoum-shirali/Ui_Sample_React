export default function SingleTrend({ product }) {
  return (
    <div className="col-span-4 md:col-span-2 lg:col-span-1 shadow-md px-3 pb-3">
      <div className="bg-gray-100/60 h-60 overflow-hidden flex justify-center items-center rounded-md">
        <img
          src={product.img}
          alt="{product.img}"
          className="max-w-full h-auto rounded-md object-contain
"
        />
      </div>
      <div className="font-medium py-5">
        <h3 className="text-sm text-liberty text-center">{product.title}</h3>
        <div className="flex justify-center gap-3">
          <h3 className="text-sm text-liberty">
            <span>$</span>
            {product?.new_price}
          </h3>
          <h3 className="text-xs line-through text-gray-400 mt-1">
            <span>$</span>
            {product?.old_price}
          </h3>
        </div>
      </div>
    </div>
  );
}
