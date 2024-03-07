export type NewOrderRequest = {
  details: {
    order: [
      {
        name: string;
        price: number;
      }
    ];
  };
};
