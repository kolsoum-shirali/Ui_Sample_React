
export default function SingleDiscount({product}) {
  return (
    <div className="grid grid-cols-2 gap-10 pb-10 pt-5">
      <div className="col-span-2 md:col-span-1 gap-6 flex flex-col justify-center items-start">
        <h1 className="font-bold text-2xl lg:text-3xl text-liberty">
        {product.title}
        </h1>
        <h6 className="text-mainPink text-base">{product.caption}</h6>
        <p className="text-gray-500/50 leading-8 text-base">
         {product.desc}
        </p>
        <ul className="text-gray-500/50 text-base grid grid-cols-2 leading-9">
          {product.benefits.map((benefit,inex)=><li className="col-span-1"><i className="icon-ok"></i> {benefit.title}</li>)}
        </ul>
        <button className="bg-mainPink text-white py-4 px-8 lg:px-16 rounded-sm text-sm font-medium">
          Shop Now
        </button>
      </div>
      <div className="col-span-2 md:col-span-1 flex justify-center md:justify-end">
        <div className="max-h-[500px] aspect-square flex justify-center overflow-hidden">
          <img
            src={product.img}
            alt={product.img || "Banner Image4"}
            className="max-w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
