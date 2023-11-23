declare type Product = {
  id: number;
  userId: string;
  storeId: string;
  parentId?: string;

  slug?: string;
  sku?: string;
  title: string;
  price: string;
  shortDescription: string;
  longDescription?: string;
  images: string[];

  categories: number[];

  status: boolean;

  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
};

declare type Category = {
  id: number;
  userId: number;
  storeId: number;

  name: string;

  createdAt: string;
  updatedAt: string;
};
