import { MockProduct } from "../../mockData/product";
import Accordion from "../ui/Accordion";

const ProductDetails = () => {
  return (
    <div className="flex flex-col gap-4 mt-2">
      {Object.values(MockProduct.details).map((detail, i) => (
        <Accordion key={i} summary={detail.title} />
      ))}
    </div>
  );
};

export default ProductDetails;
