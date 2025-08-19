import React, { useState, FC } from 'react';
import { View, Alert } from 'react-native';
import { Screen, MenuItem, CartItem, Customizations, OrderForm, DeliveryType } from './src/types';
import { createCartItem, getCustomizationText, getTotalPrice } from './src/utils/cartUtils';
import CustomizationModal from './src/components/CustomizationModal';
import HomeScreen from './src/screens/HomeScreen';
import CartScreen from './src/screens/CartScreen';
import CitySelectionScreen from './src/screens/CitySelectionScreen';
import CheckoutScreen from './src/screens/CheckoutScreen';

const App: FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [selectedCity, setSelectedCity] = useState<string>('Нальчик');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [deliveryType, setDeliveryType] = useState<DeliveryType>('delivery');
  const [orderForm, setOrderForm] = useState<OrderForm>({
    name: '',
    phone: '',
    address: '',
    comment: ''
  });
  const [customizationModal, setCustomizationModal] = useState<MenuItem | null>(null);

  const addToCart = (item: MenuItem, customizations: Customizations | null = null): void => {
    const cartItem = createCartItem(item, customizations);
    setCart(prevCart => [...prevCart, cartItem]);

    const customizationText = getCustomizationText(customizations);
    Alert.alert('Добавлено в корзину', `${item.name}${customizationText} добавлен в корзину`);
  };

  const openCustomization = (item: MenuItem): void => {
    if (item.customizable) {
      setCustomizationModal(item);
    } else {
      addToCart(item);
    }
  };

  const removeFromCart = (uniqueId: string): void => {
    setCart(prevCart => prevCart.filter(item => item.uniqueId !== uniqueId));
  };

  const updateQuantity = (uniqueId: string, newQuantity: number): void => {
    if (newQuantity === 0) {
      removeFromCart(uniqueId);
    } else {
      setCart(prevCart =>
        prevCart.map(item =>
          item.uniqueId === uniqueId
            ? { ...item, quantity: newQuantity }
            : item
        )
      );
    }
  };

  const submitOrder = (): void => {
    if (!orderForm.name || !orderForm.phone) {
      Alert.alert('Ошибка', 'Пожалуйста, заполните имя и телефон');
      return;
    }

    if (deliveryType === 'delivery' && !orderForm.address) {
      Alert.alert('Ошибка', 'Пожалуйста, укажите адрес доставки');
      return;
    }

    Alert.alert(
      'Заказ оформлен!',
      `Спасибо за заказ! Мы свяжемся с вами в течение 10 минут.\nСумма заказа: ${getTotalPrice(cart)} ₽`,
      [{
        text: 'OK', onPress: () => {
          setCart([]);
          setCurrentScreen('home');
          setOrderForm({ name: '', phone: '', address: '', comment: '' });
        }
      }]
    );
  };

  const handleCitySelect = (city: string): void => {
    setSelectedCity(city);
    setCurrentScreen('home');
  };

  const handleDeliveryTypeChange = (type: DeliveryType): void => {
    setDeliveryType(type);
  };

  const handleOrderFormChange = (form: OrderForm): void => {
    setOrderForm(form);
  };

  // Рендер текущего экрана
  const renderCurrentScreen = (): React.ReactElement => {
    switch (currentScreen) {
      case 'citySelection':
        return (
          <CitySelectionScreen
            selectedCity={selectedCity}
            onCitySelect={handleCitySelect}
          />
        );
      case 'cart':
        return (
          <CartScreen
            cart={cart}
            onBack={() => setCurrentScreen('home')}
            onCheckout={() => setCurrentScreen('checkout')}
            onUpdateQuantity={updateQuantity}
          />
        );
      case 'checkout':
        return (
          <CheckoutScreen
            cart={cart}
            deliveryType={deliveryType}
            orderForm={orderForm}
            onBack={() => setCurrentScreen('cart')}
            onSubmit={submitOrder}
            onDeliveryTypeChange={handleDeliveryTypeChange}
            onOrderFormChange={handleOrderFormChange}
          />
        );
      default:
        return (
          <HomeScreen
            selectedCity={selectedCity}
            cart={cart}
            onCitySelect={() => setCurrentScreen('citySelection')}
            onCartPress={() => setCurrentScreen('cart')}
            onMenuItemPress={openCustomization}
          />
        );
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {renderCurrentScreen()}
      {customizationModal && (
        <CustomizationModal
          item={customizationModal}
          onAddToCart={addToCart}
          onClose={() => setCustomizationModal(null)}
        />
      )}
    </View>
  );
};

export default App;