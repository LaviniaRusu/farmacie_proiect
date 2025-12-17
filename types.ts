export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
}
export interface PharmaceuticalForm {
  id: string;
  name: string;
  code: string;
  route: string;
}
export interface Dosage {
  id: string;
  name: string;
  value: string;
}
export interface Product {
  id: string;
  category: Category;
  name: string;
  price: string;
  isFeatured: boolean;

  dosage: Dosage;
  pharmaceuticalForm: PharmaceuticalForm;

  images: Image[];
}

export interface Image {
  id: string;
  url: string;
}
