import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { colors } from '../constants/colors';

/**
 * Стили для экрана корзины (CartScreen)
 * Дизайн основан на стиле сайта Balance Coffee
 */

export const cartScreenStyles = StyleSheet.create({
  // ===== ОСНОВНОЙ КОНТЕЙНЕР =====
  
  /** Основной контейнер экрана корзины */
  container: {
    flex: 1,
    backgroundColor: colors.background,
  } as ViewStyle,

  // ===== ХЕДЕР ЭКРАНА =====
  
  /** Хедер с кнопкой "Назад" и заголовком "Корзина" */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border.light,
    backgroundColor: colors.white,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  } as ViewStyle,

  /** Заголовок экрана "Корзина" */
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text.primary,
    flex: 1,
    textAlign: 'center',
    letterSpacing: -0.3,
  } as TextStyle,

  /** Кнопка "Назад" в левой части хедера */
  backButton: {
    padding: 6,
    borderRadius: 6,
  } as ViewStyle,

  /** Текст кнопки "Назад" */
  backButtonText: {
    fontSize: 15,
    color: colors.text.light,
    fontWeight: '600',
    letterSpacing: 0.1,
  } as TextStyle,

  // ===== СОСТОЯНИЕ ПУСТОЙ КОРЗИНЫ =====
  
  /** Контейнер для отображения пустой корзины */
  emptyCart: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  } as ViewStyle,

  /** Текст "Корзина пуста" */
  emptyCartText: {
    fontSize: 18,
    color: colors.text.secondary,
    marginBottom: 20,
    fontWeight: '600',
    letterSpacing: -0.2,
  } as TextStyle,

  /** Кнопка "Перейти к меню" для пустой корзины */
  continueShoppingButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 28,
    paddingVertical: 14,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  } as ViewStyle,

  /** Текст кнопки "Перейти к меню" */
  continueShoppingText: {
    color: colors.white,
    fontSize: 15,
    fontWeight: '600',
    letterSpacing: 0.2,
  } as TextStyle,

  // ===== СПИСОК ТОВАРОВ В КОРЗИНЕ =====
  
  /** Контейнер для списка товаров в корзине */
  cartItems: {
    flex: 1,
    padding: 20,
  } as ViewStyle,

  // ===== ФУТЕР КОРЗИНЫ =====
  
  /** Футер с итоговой ценой и кнопкой оформления заказа */
  cartFooter: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: colors.border.light,
    backgroundColor: colors.white,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
  } as ViewStyle,

  /** Текст с итоговой ценой */
  totalPrice: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text.primary,
    textAlign: 'center',
    marginBottom: 16,
    letterSpacing: -0.2,
  } as TextStyle,

  /** Кнопка "Оформить заказ" */
  checkoutButton: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  } as ViewStyle,

  /** Текст кнопки "Оформить заказ" */
  checkoutButtonText: {
    color: colors.white,
    fontSize: 15,
    fontWeight: '600',
    letterSpacing: 0.3,
  } as TextStyle,

  rightPlaceholder: {
  width: 60, // такая же ширина, как у backButton
},

});
