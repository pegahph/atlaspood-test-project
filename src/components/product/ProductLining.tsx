import Label from "../ui/Label";

const linings = ["Standard Lining", "Unlined"];
const ProductLining = () => {
  return (
    <div className="flex flex-col">
      <Label>Lining:</Label>
      <div className="flex flex-wrap gap-2">
        {linings.map((lining, i) => (
          <button key={i} className="px-4 py-2">
            {lining}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductLining;
