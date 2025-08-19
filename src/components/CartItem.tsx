import React, { FC } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { CartItem as CartItemType } from '../types';
import { cartItemStyles } from '../styles/cartItemStyles';

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (uniqueId: string, quantity: number) => void;
}

const CartItem: FC<CartItemProps> = ({ item, onUpdateQuantity }) => {
  return (
    <View style={cartItemStyles.cartItem}>
      <Image source={{ uri: item.image }} style={cartItemStyles.cartItemImage} />
      <View style={cartItemStyles.cartItemInfo}>
        <Text style={cartItemStyles.cartItemName}>{item.name}</Text>
        {item.customizations && (
          <View style={cartItemStyles.customizationInfo}>
            {item.customizations.size && item.customizations.size !== 'M (350мл)' && (
              <Text style={cartItemStyles.customizationText}>{item.customizations.size}</Text>
            )}
            {item.customizations.syrup && item.customizations.syrup !== 'Без сиропа' && (
              <Text style={cartItemStyles.customizationText}>Сироп: {item.customizations.syrup}</Text>
            )}
            {item.customizations.milk && item.customizations.milk !== 'Обычное' && (
              <Text style={cartItemStyles.customizationText}>Молоко: {item.customizations.milk}</Text>
            )}
          </View>
        )}
        <Text style={cartItemStyles.cartItemPrice}>{item.price} ₽</Text>
        <View style={cartItemStyles.quantityControls}>
          <TouchableOpacity
            onPress={() => onUpdateQuantity(item.uniqueId, item.quantity - 1)}
            style={cartItemStyles.quantityButton}
          >
            <Text style={cartItemStyles.quantityButtonText}>−</Text>
          </TouchableOpacity>
          <Text style={cartItemStyles.quantity}>{item.quantity}</Text>
          <TouchableOpacity
            onPress={() => onUpdateQuantity(item.uniqueId, item.quantity + 1)}
            style={cartItemStyles.quantityButton}
          >
            <Text style={cartItemStyles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
