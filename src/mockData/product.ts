export interface ProductColorType {
  name: string;
  image: string;
}

export const MockProduct = {
  title: "LINEN SHEER GROMMET DRAPERY",
  price: 115000,
  colors: [
    {
      name: "White",
      image: "/mockColor2.png",
    },
    {
      name: "Brown",
      image: "/mockColor.png",
    },
  ],
  images: [
    "/img7x-darkflax2.jpg",
    "/img7x-darkflax3.jpg",
    "/img7x-darkflax4.jpg",
  ],
  details: {
    description: {
      title: "Product Description",
    },
    dimensions: {
      title: "Dimensions",
    },
    materials: {
      title: "Materials & Care",
    },
    transport: {
      title: "Shipping & Returns",
    },
  },
};
