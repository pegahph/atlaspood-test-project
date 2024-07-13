import Footer from "../components/footer/Footer";
import ProductColor from "../components/product/ProductColor";
import ProductDetails from "../components/product/ProductDetails";
import ProductImages from "../components/product/ProductImages";
import ProductLining from "../components/product/ProductLining";
import ProductQty from "../components/product/ProductQty";
import ProductSize from "../components/product/ProductSize";
import { MockProduct } from "../mockData/product";
import { formatNumber } from "../utils/number";
import { useWidth } from "../utils/useWidth";

function Product() {
  const { lg } = useWidth();
  return (
    <div className="w-full">
      <div className="grid w-full grid-cols-1 gap-12 px-5 mt-8 md:grid-cols-5">
        <div className="flex flex-col order-2 gap-10 md:order-1 md:col-span-3">
          <ProductImages imageList={MockProduct.images} />
          {!lg ? <ProductDetails /> : null}
        </div>
        <div className="flex flex-col order-1 gap-8 md:order-2 md:col-span-2">
          <h1 className="text-3xl font-semibold tracking-wide text-primary-main">
            {MockProduct.title}
          </h1>
          <div className="flex flex-col gap-5">
            <p className="text-xl font-semibold text-primary-main">
              {formatNumber(MockProduct.price)} Tomans
            </p>
            <span className="w-full h-[1px] bg-gray-600"></span>
            <ProductColor colors={MockProduct.colors} />
            <ProductSize />
            <ProductLining />
            <ProductQty />
            <div className="flex flex-col gap-4">
              <button className="w-full py-3 text-gray-200 bg-gray-600 border-none hover:border-none">
                ADD TO BAG
              </button>
              <button className="w-full py-3 text-gray-600">
                SAVE TO WISH LIST
              </button>
            </div>
            {lg ? <ProductDetails /> : null}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Product;
