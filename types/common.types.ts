type ArticleType = {
  id: string | number;
  address: string;
  benefits: [];
  title: string;
  createdAt: string;
  description: string;
  email: string;
  phone: string;
  pictures: string[];
  salary: string;
  employment_type: [];
  location: LocationType;
};

type LocationType = {
  lat: number;
  long: number;
};

export type { ArticleType, LocationType };
