import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
  return (
    <div className="col-span-3 md:col-span-1">
      <div className="max-h-64 overflow-hidden flex justify-center rounded-md">
        <img
          src={blog.img}
          alt=""
          className="w-full h-auto rounded-md hover:scale-110 transition-scale duration-500
"
        />
      </div>
      <div className="space-y-2 lg:space-y-4 pt-3 pb-8 px-2 shadow-sm">
        <div className="flex gap-2">
          <p className="text-liberty text-sm">
            <i className="icon-user-o text-mainPink text-xs me-1"></i>SaberAli
          </p>
          <p className="text-liberty text-sm">
            <i className=" icon-calendar text-orange-400 text-xs me-1"></i>21
            August,2020
          </p>
        </div>
        <h3
          className={`text-lg line-clamp-2 font-bold ${blog.id % 2 === 0 ? "text-mainPink" : "text-liberty"}`}
        >
          {blog.title}
        </h3>
        <p className="text-base line-clamp-3 text-gray-500 leading-7">
          {blog.desc}
        </p>
        <div className="flex">
          <Link to="/" className="mr-auto">
            <h3
              className={`text-base underline ${blog.id % 2 === 0 ? "text-mainPink" : "text-liberty"}`}
            >
              Read More
            </h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
