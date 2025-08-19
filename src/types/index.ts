export interface MenuItem {
  id: number;
  name: string;
  price: number;
  image: string;
  category: 'coffee' | 'food' | 'dessert';
  description: string;
  customizable: boolean;
  options?: {
    syrup: string[];
    milk: string[];
    size: string[];
  };
}

export interface CartItem extends MenuItem {
  quantity: number;
  uniqueId: string;
  customizations: Customizations | null;
}

export interface Customizations {
  size: string;
  syrup: string;
  milk: string;
}

export interface OrderForm {
  name: string;
  phone: string;
  address: string;
  comment: string;
}

export type Screen = 'home' | 'citySelection' | 'cart' | 'checkout';
export type DeliveryType = 'delivery' | 'pickup';
