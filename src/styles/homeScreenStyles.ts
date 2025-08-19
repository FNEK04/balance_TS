import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { colors } from '../constants/colors';

/**
 * Стили для главного экрана (HomeScreen)
 * Дизайн основан на стиле сайта Balance Coffee
 */

export const homeScreenStyles = StyleSheet.create({
  // ===== ОСНОВНОЙ КОНТЕЙНЕР =====
  
  /** Основной контейнер экрана - наследует глобальный стиль */
  container: {
    flex: 1,
    backgroundColor: colors.background,
  } as ViewStyle,

  // ===== ХЕДЕР ЭКРАНА =====
  
  /** Хедер с выбором города и корзиной */
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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

  /** Контейнер для выбора города (левая часть хедера) */
  citySelector: {
    alignItems: 'flex-start',
    paddingVertical: 6,
  } as ViewStyle,

  /** Текст названия города */
  cityText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text.primary,
    letterSpacing: -0.2,
  } as TextStyle,

  /** Текст "изменить" под названием города */
  changeText: {
    fontSize: 12,
    color: colors.text.secondary,
    fontWeight: '500',
    marginTop: 2,
    textTransform: 'uppercase',
    letterSpacing: 0.4,
  } as TextStyle,

  /** Кнопка корзины (правая часть хедера) */
  cartButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  } as ViewStyle,

  /** Текст кнопки корзины */
  cartButtonText: {
    color: colors.white,
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: 0.2,
  } as TextStyle,

  // ===== БЛОК ИНФОРМАЦИИ О ДОСТАВКЕ =====
  
  /** Контейнер с информацией о времени доставки */
  deliveryInfo: {
    backgroundColor: colors.delivery.background,
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginTop: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.delivery.border,
  } as ViewStyle,

  /** Иконка доставки (эмодзи) */
  deliveryIcon: {
    marginRight: 10,
    fontSize: 18,
  } as ViewStyle,

  /** Текст иконки доставки */
  deliveryIconText: {
    fontSize: 18,
  } as TextStyle,

  /** Текст информации о доставке */
  deliveryText: {
    fontSize: 14,
    color: colors.text.primary,
    fontWeight: '600',
    letterSpacing: 0.1,
  } as TextStyle,

  // ===== КОНТЕЙНЕР МЕНЮ =====
  
  /** Основной контейнер для списка меню */
  menuContainer: {
    flex: 1,
    padding: 20,
    paddingTop: 12,
  } as ViewStyle,

  /** Заголовок раздела "Меню" */
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.text.primary,
    marginBottom: 20,
    letterSpacing: -0.5,
    textAlign: 'center',
  } as TextStyle,
});
