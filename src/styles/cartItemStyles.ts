import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { colors } from '../constants/colors';

/**
 * Стили для элемента корзины (CartItem)
 * Дизайн основан на стиле сайта Balance Coffee
 */

export const cartItemStyles = StyleSheet.create({
  // ===== ОСНОВНАЯ КАРТОЧКА ТОВАРА В КОРЗИНЕ =====
  
  /** Основная карточка товара в корзине - горизонтальная компоновка */
  cartItem: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.border.light,
  } as ViewStyle,

  // ===== ИЗОБРАЖЕНИЕ ТОВАРА =====
  
  /** Изображение товара в корзине - левая часть карточки */
  cartItemImage: {
    width: 70,
    height: 70,
    borderRadius: 10,
    backgroundColor: colors.background,
  },

  // ===== ИНФОРМАЦИЯ О ТОВАРЕ =====
  
  /** Контейнер с информацией о товаре - правая часть карточки */
  cartItemInfo: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'space-between',
  } as ViewStyle,

  /** Название товара в корзине */
  cartItemName: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.text.primary,
    marginBottom: 4,
    letterSpacing: -0.1,
  } as TextStyle,

  /** Цена товара в корзине */
  cartItemPrice: {
    fontSize: 15,
    color: colors.text.light,
    fontWeight: '700',
    marginBottom: 8,
    letterSpacing: -0.1,
  } as TextStyle,

  // ===== УПРАВЛЕНИЕ КОЛИЧЕСТВОМ =====
  
  /** Контейнер с кнопками управления количеством */
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
  } as ViewStyle,

  /** Кнопка уменьшения количества (символ "−") */
  quantityButton: {
    backgroundColor: colors.button.background,
    width: 32,
    height: 32,
    borderRadius: 16, // Круглая кнопка
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: colors.button.border,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
  } as ViewStyle,

  /** Текст кнопки количества (символы "−" и "+") */
  quantityButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text.primary,
    lineHeight: 16,
    letterSpacing: -0.3,
  } as TextStyle,

  /** Отображение текущего количества товара */
  quantity: {
    marginHorizontal: 16,
    fontSize: 16,
    fontWeight: '700',
    color: colors.text.primary,
    minWidth: 20,
    textAlign: 'center',
    letterSpacing: -0.1,
  } as TextStyle,

  // ===== ИНФОРМАЦИЯ О КАСТОМИЗАЦИИ =====
  
  /** Контейнер с информацией о кастомизации товара */
  customizationInfo: {
    marginBottom: 8,
  } as ViewStyle,

  /** Текст с информацией о кастомизации (размер, сироп, молоко) */
  customizationText: {
    fontSize: 12,
    color: colors.text.light,
    fontWeight: '600',
    marginBottom: 2,
    letterSpacing: 0.1,
  } as TextStyle,
});
