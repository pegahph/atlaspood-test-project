import { IconDeviceMobile, IconMail } from "@tabler/icons-react";
import { PropsWithChildren } from "react";
const FooterTitle = ({ children }: PropsWithChildren) => (
  <h4 className="mb-2 text-[15px] font-semibold text-primary-main tracking-wider">
    {children}
  </h4>
);

const Footer = () => {
  return (
    <footer className="px-16 py-5 mt-20 border-t border-gray-500">
      <div className="grid grid-cols-1 gap-8 mx-auto text-gray-600 sm:grid-cols-3 lg:grid-cols-6">
        <div>
          <FooterTitle>GET IN TOUCH</FooterTitle>
          <div className="flex flex-col gap-2 text-sm font-medium">
            <p className="leading-6">
              Sat - Thu: 9:30 am to 9:00 pm
              <br />
              Fri: 10:30 am to 9:00 pm
            </p>

            <p className="flex items-center gap-1">
              <IconDeviceMobile size={18} />
              (021) 88908817
            </p>
            <p className="flex items-center gap-1">
              <IconMail size={18} />
              assistant@atlaspood.com
            </p>
          </div>
        </div>
        <div>
          <FooterTitle>CUSTOMER CARE</FooterTitle>
          <ul className="space-y-2 text-sm font-medium no-underline">
            <li>
              <a href="#">Measure & Install</a>
            </li>
            <li>
              <a href="#">Track Your Order</a>
            </li>
            <li>
              <a href="#">Return Policy</a>
            </li>
            <li>
              <a href="#">Shipping Information</a>
            </li>
          </ul>
        </div>
        <div>
          <FooterTitle>OUR COMPANY</FooterTitle>
          <ul className="space-y-2 text-sm font-medium no-underline">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Store Locations</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>
        <div>
          <FooterTitle>B2B PROGRAMS</FooterTitle>
          <ul className="space-y-2 text-sm font-medium no-underline">
            <li>
              <a href="#">Wholesale</a>
            </li>
            <li>
              <a href="#">Hospitality</a>
            </li>
            <li>
              <a href="#">Trade</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col w-full lg:px-6 sm:col-span-2">
          <FooterTitle>
            JOIN OUR LIST AND GET 10% OFF YOUR FIRST PURCHASE!
          </FooterTitle>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="flex items-center gap-3"
          >
            <input
              type="email"
              placeholder="EMAIL ADDRESS"
              className="flex-1 p-2 text-sm border border-gray-600 placeholder:tracking-wider placeholder:text-gray-600 placeholder:font-medium"
            />
            <input
              type="submit"
              className="h-full px-3 text-sm font-medium uppercase bg-gray-300 border-2 border-gray-500 cursor-pointer text-primary-main"
            />
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
