import React, { FC } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { CartItem as CartItemType } from '../types';
import { getTotalPrice } from '../utils/cartUtils';
import CartItem from '../components/CartItem';
import { globalStyles } from '../styles/globalStyles';
import { cartScreenStyles } from '../styles/cartScreenStyles';

interface CartScreenProps {
  cart: CartItemType[];
  onBack: () => void;
  onCheckout: () => void;
  onUpdateQuantity: (uniqueId: string, quantity: number) => void;
}

const CartScreen: FC<CartScreenProps> = ({
  cart,
  onBack,
  onCheckout,
  onUpdateQuantity
}) => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={cartScreenStyles.header}>
        <TouchableOpacity
          onPress={onBack}
          style={cartScreenStyles.backButton}
        >
          <Text style={cartScreenStyles.backButtonText}>← Назад</Text>
        </TouchableOpacity>
        <Text style={globalStyles.headerTitle}>Корзина</Text>        
      </View>
      
      {cart.length === 0 ? (
        <View style={cartScreenStyles.emptyCart}>
          <Text style={cartScreenStyles.emptyCartText}>Корзина пуста</Text>
          <TouchableOpacity
            style={cartScreenStyles.continueShoppingButton}
            onPress={onBack}
          >
            <Text style={cartScreenStyles.continueShoppingText}>Перейти к меню</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <ScrollView style={cartScreenStyles.cartItems}>
            {cart.map(item => (
              <CartItem
                key={item.uniqueId}
                item={item}
                onUpdateQuantity={onUpdateQuantity}
              />
            ))}
          </ScrollView>

          <View style={cartScreenStyles.cartFooter}>
            <Text style={cartScreenStyles.totalPrice}>Итого: {getTotalPrice(cart)} ₽</Text>
            <TouchableOpacity
              style={cartScreenStyles.checkoutButton}
              onPress={onCheckout}
            >
              <Text style={cartScreenStyles.checkoutButtonText}>Оформить заказ</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default CartScreen;
