import { IconRuler } from "@tabler/icons-react";
import Label from "../ui/Label";

const sizes = [
  "280CM X 300CM",
  "140CM X 220CM",
  "140CM X 300CM",
  "300CM X 300CM",
];

const ProductSize = () => {
  return (
    <div className="flex flex-col w-full">
      <Label>Size:</Label>
      <div className="flex flex-wrap gap-2">
        {sizes.map((size, i) => (
          <button
            key={i}
            disabled={i !== 0}
            className="relative disabled:before:content-[''] disabled:before:absolute disabled:before:w-full disabled:before:h-[1px] disabled:before:bg-gray-600 disabled:before:rotate-[-167deg] disabled:before:top-1/2 disabled:before:left-0 px-4 py-2 text-[15px] font-medium  disabled:text-gray-500"
          >
            {size}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-1 mt-1">
        <IconRuler stroke={1} />
        <a
          href=""
          className="underline underline-offset-[5px] hover:text-gray-800 text-gray-700 tracking-wide"
        >
          Measuring Guide
        </a>
      </div>
    </div>
  );
};

export default ProductSize;
