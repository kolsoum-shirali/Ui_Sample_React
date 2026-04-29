export default function SingleTopCategory({ category }) {
  return (
    <div className="flex flex-col justify-center items-center space-y-3">
      <div className="relative group bg-lavender/40 aspect-square rounded-full h-56 xl:h-64  max-w-full flex justify-center items-center overflow-hidden hover:pb-2 hover:pl-2">
        <div className="absolute inset-x-0 bottom-0 transition-transform border-l-8 border-b-8 border-mainPurple transform translate-y-full group-hover:translate-y-0 duration-300 rounded-full h-full"></div>
        <img
          src={category.img}
          alt={category.img}
          className="max-w-full h-auto"
        />
        <div className="absolute inset-x-0 bottom-0 transition-transform  transform translate-y-full group-hover:translate-y-0 duration-300 flex items-end justify-center h-full aspect-square rounded-full z-1">
          <button className="bg-green-600 text-white rounded-sm px-4 py-2 text-sm  hover:bg-white hover:transition-colors hover:text-green-800 border-2 border-green-600 mb-7">
            View Shop
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center font-medium  text-liberty ">
        <h4 className="text-base">Mini LCW Chair</h4>
        <h4 className="text-sm">
          <span>$</span>
          {category.price}
        </h4>
      </div>
    </div>
  );
}
