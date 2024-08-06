import Link from "next/link";

export default function Sorting({ setSortOrder }) {
  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  return (
    <div className="w-full mt-5 mb-10">
      <div className="flex items-center justify-between md:flex-row flex-col md:gap-0 gap-4">
        <ul className="flex items-center gap-2 ">
          <li>
            <Link
              href="/"
              className="flex items-center uppercase xl:gap-2 gap-1"
            >
              Home /
            </Link>
          </li>
          <li>
            <button className="flex items-center uppercase xl:gap-2 gap-1">
              Product
            </button>
          </li>
        </ul>
        <div className="flex items-center gap-2">
          <p className="text-bold text-[#777777] md:text-[18px] text-[16px]">
            Showing top sorting results:
          </p>
          <select
            className="p-2 outline-none border border-[#D3D3D3] cursor-pointer bg-white rounded-lg"
            onChange={handleSortChange}
          >
            <option value="default">Default sorting</option>
            <option value="lowToHigh">Low to high</option>
            <option value="highToLow">High to low</option>
          </select>
        </div>
      </div>
    </div>
  );
}
