import { useState } from "react";
import { ProductColorType } from "../../mockData/product";
import Label from "../ui/Label";

const ProductColor = ({ colors }: { colors: ProductColorType[] }) => {
  const [activeColor, setActiveColor] = useState<ProductColorType>(colors[0]);
  return (
    <div className="flex flex-col w-full">
      <Label>Color: {activeColor.name}</Label>
      <div className="flex space-x-2">
        {colors.map((color, i) => (
          <div
            key={i}
            className={`block p-1 border-2 transition-all duration-200 cursor-pointer ${
              activeColor.name === color.name ? "border-primary-main" : ""
            } `}
          >
            <img
              src={color.image}
              onClick={() => {
                setActiveColor(color);
              }}
              className="w-16 aspect-square"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductColor;
