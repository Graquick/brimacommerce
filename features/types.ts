type Size = "S" | "M" | "L" | "XL";

export type ProductDocument = Document & {
  name: string;
  description: string;
  categories: "men" | "women" | "kids";
  variants: "color" | "black" | "white";
  sizes: Size[];
  image: string;
  quantity: number;
  price: number;
  new: boolean;
};

export interface CarouselState {
  index: number;
  newProducts: ProductDocument[];
}
