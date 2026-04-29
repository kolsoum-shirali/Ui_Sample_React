import offer1 from "../../../../assets/img/offer1.png";
import offer2 from "../../../../assets/img/offer2.png";
import offer3 from "../../../../assets/img/offer3.png";
import offer4 from "../../../../assets/img/offer4.png";
const offers = [
  {
    img: offer4,
    title: "24/7 Support",
    desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis doloremque iure quis, quo.",
  },
  {
    img: offer1,
    title: "24/7 Support",
    desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis doloremque iure quis, quo.",
  },
  {
    img: offer2,
    title: "24/7 Support",
    desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis doloremque iure quis, quo.",
  },
  {
    img: offer3,
    title: "24/7 Support",
    desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis doloremque iure quis, quo.",
  },
];

export default function Offers() {
  return (
    <div className="md:w-8/12 mx-auto max-md:px-5">
      <h1 className="text-center text-2xl lg:text-4xl text-liberty font-bold">
        What Shopes Offer!
      </h1>
      <div className="grid grid-cols-4 gap-6 mt-10 md:mt-14">
        {offers.map((offer, index) => (
          <div className="col-span-4 md:col-span-2 lg:col-span-1 shadow-md py-8 px-5">
            <div className="flex flex-col justify-center items-center ">
              <img
              src={offer.img}
              alt="{offer.img}"
              className="max-w-full h-auto
"
            />
            <h3 className="text-liberty text-lg font-semibold mt-3">
              {offer.title}
            </h3>

            <p className="text-gray-400/80 text-sm font-medium text-center leading-6 mt-5">
              {offer.desc}
            </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
