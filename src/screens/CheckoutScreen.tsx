import React, { FC } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { CartItem, OrderForm, DeliveryType } from '../types';
import { getTotalPrice, formatItemName } from '../utils/cartUtils';
import { globalStyles } from '../styles/globalStyles';
import { checkoutScreenStyles } from '../styles/checkoutScreenStyles';

interface CheckoutScreenProps {
  cart: CartItem[];
  deliveryType: DeliveryType;
  orderForm: OrderForm;
  onBack: () => void;
  onSubmit: () => void;
  onDeliveryTypeChange: (type: DeliveryType) => void;
  onOrderFormChange: (form: OrderForm) => void;
}

const CheckoutScreen: FC<CheckoutScreenProps> = ({
  cart,
  deliveryType,
  orderForm,
  onBack,
  onSubmit,
  onDeliveryTypeChange,
  onOrderFormChange
}) => {
  const handleInputChange = (field: keyof OrderForm, value: string) => {
    onOrderFormChange({ ...orderForm, [field]: value });
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={checkoutScreenStyles.header}>
        <TouchableOpacity
          onPress={onBack}
          style={checkoutScreenStyles.backButton}
        >
          <Text style={checkoutScreenStyles.backButtonText}>← Назад</Text>
        </TouchableOpacity>
        <Text style={globalStyles.headerTitle}>Оформление заказа</Text>
      </View>

      <ScrollView style={checkoutScreenStyles.checkoutForm}>
        {/* Тип доставки */}
        <View style={checkoutScreenStyles.deliveryTypeSection}>
          <Text style={checkoutScreenStyles.sectionTitle}>Тип заказа</Text>
          <View style={checkoutScreenStyles.deliveryButtons}>
            <TouchableOpacity
              style={[checkoutScreenStyles.deliveryButton, deliveryType === 'delivery' && checkoutScreenStyles.activeDeliveryButton]}
              onPress={() => onDeliveryTypeChange('delivery')}
            >
              <View style={checkoutScreenStyles.deliveryButtonContent}>
                <Text style={checkoutScreenStyles.deliveryButtonIcon}>🚛</Text>
                <Text style={[checkoutScreenStyles.deliveryButtonTextOnly, deliveryType === 'delivery' && checkoutScreenStyles.activeDeliveryButtonText]}>
                  Доставка
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[checkoutScreenStyles.deliveryButton, deliveryType === 'pickup' && checkoutScreenStyles.activeDeliveryButton]}
              onPress={() => onDeliveryTypeChange('pickup')}
            >
              <View style={checkoutScreenStyles.deliveryButtonContent}>
                <Text style={checkoutScreenStyles.deliveryButtonIcon}>🏪</Text>
                <Text style={[checkoutScreenStyles.deliveryButtonTextOnly, deliveryType === 'pickup' && checkoutScreenStyles.activeDeliveryButtonText]}>
                  Самовывоз
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Форма заказа */}
        <View style={checkoutScreenStyles.formSection}>
          <Text style={checkoutScreenStyles.sectionTitle}>Контактные данные</Text>

          <TextInput
            style={checkoutScreenStyles.input}
            placeholder="Ваше имя *"
            value={orderForm.name}
            onChangeText={(text) => handleInputChange('name', text)}
          />

          <TextInput
            style={checkoutScreenStyles.input}
            placeholder="Телефон *"
            value={orderForm.phone}
            onChangeText={(text) => handleInputChange('phone', text)}
            keyboardType="phone-pad"
          />

          {deliveryType === 'delivery' && (
            <TextInput
              style={checkoutScreenStyles.input}
              placeholder="Адрес доставки *"
              value={orderForm.address}
              onChangeText={(text) => handleInputChange('address', text)}
              multiline
            />
          )}

          <TextInput
            style={[checkoutScreenStyles.input, checkoutScreenStyles.commentInput]}
            placeholder="Комментарий к заказу"
            value={orderForm.comment}
            onChangeText={(text) => handleInputChange('comment', text)}
            multiline
            numberOfLines={3}
          />
        </View>

        {/* Итого */}
        <View style={checkoutScreenStyles.orderSummary}>
          <Text style={checkoutScreenStyles.sectionTitle}>Ваш заказ</Text>
          {cart.map(item => (
            <View key={item.uniqueId} style={checkoutScreenStyles.orderItem}>
              <Text style={checkoutScreenStyles.orderItemText}>
                {formatItemName(item)} x {item.quantity}
              </Text>
              <Text style={checkoutScreenStyles.orderItemPrice}>
                {item.price * item.quantity} ₽
              </Text>
            </View>
          ))}
          <View style={checkoutScreenStyles.totalLine}>
            <Text style={checkoutScreenStyles.totalText}>Итого:</Text>
            <Text style={checkoutScreenStyles.totalAmount}>{getTotalPrice(cart)} ₽</Text>
          </View>
        </View>
      </ScrollView>

      <View style={checkoutScreenStyles.checkoutFooter}>
        <TouchableOpacity
          style={checkoutScreenStyles.submitOrderButton}
          onPress={onSubmit}
        >
          <Text style={checkoutScreenStyles.submitOrderButtonText}>
            Заказать за {getTotalPrice(cart)} ₽
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CheckoutScreen;
