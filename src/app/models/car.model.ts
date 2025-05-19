export interface Category{
  categoryId: number;
  label: string;
  color: string;
}
export interface CarInfo {
  carId: number;
  picture: string;
}

export interface Car extends CarInfo{
  category: Category;
  brand: string;
  model: string;
  price:number;
}
