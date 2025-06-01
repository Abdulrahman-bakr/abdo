
export enum ProductCategory {
  All = "All",
  Chargers = "Chargers",
  Cables = "Cables",
  FlashDrives = "FlashDrives",
  Keyboards = "Keyboards",
  BluetoothHeadphones = "BluetoothHeadphones",
  WiredHeadphones = "WiredHeadphones",
  ComputerSpeakers = "ComputerSpeakers",
  MobileCases = "MobileCases",
  Mice = "Mice",
  Other = "OtherAccessories",
}

export interface Product {
  id: string;
  name: string; // English name for internal use / alt text
  arabicName: string;
  category: ProductCategory;
  price: number;
  imageUrl: string;
  description?: string;
  rating: number; 
  reviews: number;
  isNew?: boolean;
  discountPrice?: number;
}

export interface Category {
  id: ProductCategory;
  arabicName: string;
}
