interface ProductImagesProps {
  imageList: string[];
}
const ProductImages = ({ imageList }: ProductImagesProps) => {
  return (
    <div className="flex items-start w-full gap-7">
      <div className="flex flex-col gap-4 shrink-0">
        {imageList.slice(1).map((src, i) => (
          <img
            key={i}
            src={src}
            alt="Product"
            width={120}
            height={120}
            className="cursor-pointer"
          />
        ))}
      </div>
      <div className="flex-1">
        <img src={imageList[0]} alt="Product" className="w-full" />
      </div>
    </div>
  );
};

export default ProductImages;
