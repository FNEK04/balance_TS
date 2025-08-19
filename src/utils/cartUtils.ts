import { CartItem, MenuItem, Customizations } from '../types';

export const generateUniqueId = (itemId: number): string => {
  return `${itemId}_${Date.now()}_${Math.random()}`;
};

export const createCartItem = (item: MenuItem, customizations: Customizations | null = null): CartItem => {
  return {
    ...item,
    customizations,
    uniqueId: generateUniqueId(item.id),
    quantity: 1
  };
};

export const getCustomizationText = (customizations: Customizations | null): string => {
  if (!customizations) return '';
  
  const parts: string[] = [];
  if (customizations.size && customizations.size !== 'M (350мл)') parts.push(customizations.size);
  if (customizations.syrup && customizations.syrup !== 'Без сиропа') parts.push(`сироп: ${customizations.syrup}`);
  if (customizations.milk && customizations.milk !== 'Обычное') parts.push(`молоко: ${customizations.milk}`);
  
  return parts.length > 0 ? ` (${parts.join(', ')})` : '';
};

export const getTotalPrice = (cart: CartItem[]): number => {
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
};

export const getTotalItems = (cart: CartItem[]): number => {
  return cart.reduce((sum, item) => sum + item.quantity, 0);
};

export const formatItemName = (item: CartItem): string => {
  let itemName = item.name;
  
  if (item.customizations) {
    const customParts: string[] = [];
    if (item.customizations.size && item.customizations.size !== 'M (350мл)') {
      customParts.push(item.customizations.size.split(' ')[0]);
    }
    if (item.customizations.syrup && item.customizations.syrup !== 'Без сиропа') {
      customParts.push(item.customizations.syrup);
    }
    if (item.customizations.milk && item.customizations.milk !== 'Обычное') {
      customParts.push(item.customizations.milk);
    }
    if (customParts.length > 0) {
      itemName += ` (${customParts.join(', ')})`;
    }
  }
  
  return itemName;
};
