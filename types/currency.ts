
export type Currency = {
  code: string;
  label: string;
  flag: string;
};

export type CurrencyContextType = {
  selected: Currency;
  setSelected: (currency: Currency) => void;
  rates: Record<string, number>;
};