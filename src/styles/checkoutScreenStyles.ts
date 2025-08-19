import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { colors } from '../constants/colors';

/**
 * Стили для экрана оформления заказа (CheckoutScreen)
 * Дизайн основан на стиле сайта Balance Coffee
 */

export const checkoutScreenStyles = StyleSheet.create({
  // ===== ОСНОВНОЙ КОНТЕЙНЕР =====
  
  /** Основной контейнер экрана оформления заказа */
  container: {
    flex: 1,
    backgroundColor: colors.background,
  } as ViewStyle,

  // ===== ХЕДЕР ЭКРАНА =====
  
  /** Хедер с кнопкой "Назад" и заголовком "Оформление заказа" */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
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

  /** Заголовок экрана "Оформление заказа" */
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

  // ===== ФОРМА ОФОРМЛЕНИЯ ЗАКАЗА =====
  
  /** Основной контейнер формы оформления заказа */
  checkoutForm: {
    flex: 1,
    padding: 20,
  } as ViewStyle,

  // ===== СЕКЦИЯ ТИПА ДОСТАВКИ =====
  
  /** Секция выбора типа доставки (доставка/самовывоз) */
  deliveryTypeSection: {
    marginBottom: 24,
  } as ViewStyle,

  /** Контейнер с кнопками выбора типа доставки */
  deliveryButtons: {
    flexDirection: 'row',
    gap: 12,
  } as ViewStyle,

  /** Кнопка выбора типа доставки */
  deliveryButton: {
    flex: 1,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: colors.border.light,
    alignItems: 'center',
    backgroundColor: colors.white,
    minHeight: 56,
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  } as ViewStyle,

  /** Активная кнопка выбора типа доставки */
  activeDeliveryButton: {
    borderColor: colors.accent,
    backgroundColor: colors.accent,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
  } as ViewStyle,

  /** Контейнер содержимого кнопки доставки */
  deliveryButtonContent: {
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,

  /** Иконка типа доставки (эмодзи) */
  deliveryButtonIcon: {
    fontSize: 20,
    marginBottom: 4,
  } as TextStyle,

  /** Текст кнопки типа доставки */
  deliveryButtonTextOnly: {
    fontSize: 14,
    color: colors.text.secondary,
    fontWeight: '600',
    letterSpacing: 0.1,
  } as TextStyle,

  /** Текст активной кнопки типа доставки */
  activeDeliveryButtonText: {
    color: colors.white,
    fontWeight: '700',
  } as TextStyle,

  // ===== СЕКЦИЯ ФОРМЫ КОНТАКТОВ =====
  
  /** Секция с полями ввода контактных данных */
  formSection: {
    marginBottom: 24,
  } as ViewStyle,

  /** Заголовок раздела "Контактные данные" */
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text.primary,
    marginBottom: 16,
    letterSpacing: -0.3,
  } as TextStyle,

  /** Базовое поле ввода для форм */
  input: {
    borderWidth: 1.5,
    borderColor: colors.border.light,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 15,
    marginBottom: 16,
    backgroundColor: colors.white,
    color: colors.text.primary,
    minHeight: 48,
    fontWeight: '500',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  } as TextStyle,

  /** Поле для комментария (многострочное) */
  commentInput: {
    height: 100,
    textAlignVertical: 'top',
    paddingTop: 14,
  } as TextStyle,

  // ===== СВОДКА ЗАКАЗА =====
  
  /** Контейнер с сводкой заказа */
  orderSummary: {
    backgroundColor: colors.delivery.background,
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: colors.delivery.border,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
  } as ViewStyle,

  /** Отдельный элемент товара в сводке */
  orderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
  } as ViewStyle,

  /** Текст названия товара в сводке */
  orderItemText: {
    fontSize: 14,
    color: colors.text.primary,
    fontWeight: '600',
    letterSpacing: -0.1,
  } as TextStyle,

  /** Цена товара в сводке */
  orderItemPrice: {
    fontSize: 14,
    color: colors.text.primary,
    fontWeight: '700',
    letterSpacing: -0.1,
  } as TextStyle,

  /** Линия с итоговой суммой */
  totalLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1.5,
    borderTopColor: colors.border.dark,
    paddingTop: 12,
    marginTop: 12,
  } as ViewStyle,

  /** Текст "Итого:" */
  totalText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text.primary,
    letterSpacing: -0.2,
  } as TextStyle,

  /** Итоговая сумма заказа */
  totalAmount: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text.light,
    letterSpacing: -0.2,
  } as TextStyle,

  // ===== ФУТЕР С КНОПКОЙ ОФОРМЛЕНИЯ =====
  
  /** Футер с кнопкой оформления заказа */
  checkoutFooter: {
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

  /** Кнопка "Заказать" */
  submitOrderButton: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    paddingHorizontal: 28,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
  } as ViewStyle,

  /** Текст кнопки "Заказать" */
  submitOrderButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.3,
  } as TextStyle,
});
