export type Service = {
  id: string;
  title: string;
  price: number;
  bg: string;
};

export type SelectedService = Service & {
  count: number;
};
