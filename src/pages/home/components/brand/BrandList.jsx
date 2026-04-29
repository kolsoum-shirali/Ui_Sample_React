import brand1 from "../../../../assets/img/brand1.png";
import brand2 from "../../../../assets/img/brand2.png";
import brand3 from "../../../../assets/img/brand3.png";
import brand4 from "../../../../assets/img/brand4.png";
import brand5 from "../../../../assets/img/brand5.png";
const brands = [
  { img: brand1 },
  { img: brand2 },
  { img: brand3 },
  { img: brand4 },
  { img: brand5 },
];
export default function BrandList() {
  return (
    <div className="md:w-5/12 mx-auto">
      <div className="grid grid-cols-10 gap-5 md:gap-10">
        {brands.map((brand, index) => {
          return (
            <div
              key={index}
              className="col-span-5 lg:col-span-2 flex justify-center"
            >
              <img src={brand.img} alt={brand.img} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
