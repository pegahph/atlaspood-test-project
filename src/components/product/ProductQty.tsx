import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useState } from "react";
import Label from "../ui/Label";

const ProductQty = () => {
  const [count, setCount] = useState(1);
  return (
    <div className="flex flex-col select-none">
      <Label>QTY:</Label>
      <div className="flex items-center w-24 px-2 py-1 border border-gray-600">
        <IconMinus
          className="cursor-pointer stroke-gray-900"
          size={18}
          onClick={() => {
            if (count > 1) {
              setCount(count - 1);
            }
          }}
        />
        <span className="flex-1 text-center">{count}</span>
        <IconPlus
          className="cursor-pointer stroke-gray-900"
          size={18}
          onClick={() => {
            setCount(count + 1);
          }}
        />
      </div>
    </div>
  );
};

export default ProductQty;
