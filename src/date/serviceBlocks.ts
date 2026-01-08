import type { Service } from "../types/service";

export const serviceBlocks: {
  title: string;
  services: Service[];
}[] = [
  {
    title: "При покупке",
    services: [
      {
        id: "print",
        title: "Распечатать посадочный талон",
        price: 0,
        bg: "#fde2e2",
      },
      {
        id: "insurance",
        title: "Страховка",
        price: 10,
        bg: "#e2f0cb",
      },
      {
        id: "cat",
        title: "Узнать, летит ли кот в салоне",
        price: 5,
        bg: "#e0e7ff",
      },
    ],
  },
  {
    title: "В аэропорте",
    services: [
      { id: "coffee", title: "Кофе с собой", price: 2, bg: "#fff1c1" },
      { id: "lounge", title: "Бизнес-зал", price: 12, bg: "#f1e3ff" },
      {
        id: "blanket",
        title: "Плед в салон самолёта",
        price: 13,
        bg: "#e6f7f2",
      },
    ],
  },
  {
    title: "В самолёте",
    services: [
      {
        id: "seat",
        title: "Место повышенной комфортности",
        price: 7,
        bg: "#ffe4d6",
      },
      {
        id: "window",
        title: "Сесть у иллюминатора",
        price: 56,
        bg: "#e3fafc",
      },
      {
        id: "food",
        title: "Дополнительный обед",
        price: 5,
        bg: "#fce7f3",
      },
    ],
  },
];
