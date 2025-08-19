import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { colors } from '../constants/colors';

/**
 * Стили для элемента меню (MenuItem)
 * Дизайн основан на стиле сайта Balance Coffee
 */

export const menuItemStyles = StyleSheet.create({
  // ===== ОСНОВНАЯ КАРТОЧКА ТОВАРА =====
  
  /** Основная карточка товара - горизонтальная компоновка */
  menuItem: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    borderWidth: 1,
    borderColor: colors.border.light,
    overflow: 'hidden',
    padding: 3,
  } as ViewStyle,

  // ===== ИЗОБРАЖЕНИЕ ТОВАРА =====
  
  /** Изображение товара - левая часть карточки */
  itemImage: {
    width: 80,
    height: 80,
    backgroundColor: colors.background,
    borderRadius: 10,
  },

  // ===== ИНФОРМАЦИЯ О ТОВАРЕ =====
  
  /** Контейнер с информацией о товаре - правая часть карточки */
  itemInfo: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-between',
  } as ViewStyle,

  /** Название товара */
  itemName: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text.primary,
    marginBottom: 6,
    lineHeight: 20,
    letterSpacing: -0.2,
  } as TextStyle,

  /** Описание товара */
  itemDescription: {
    fontSize: 13,
    color: colors.text.secondary,
    marginBottom: 12,
    lineHeight: 18,
    fontWeight: '500',
    letterSpacing: 0.1,
  } as TextStyle,

  // ===== НИЖНЯЯ ЧАСТЬ КАРТОЧКИ =====
  
  /** Контейнер с ценой и кнопкой добавления */
  itemBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  } as ViewStyle,

  /** Цена товара */
  itemPrice: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text.light,
    letterSpacing: -0.2,
  } as TextStyle,

  // ===== КНОПКА ДОБАВЛЕНИЯ =====
  
  /** Кнопка добавления товара в корзину */
  addButton: {
    backgroundColor: colors.primary,
    width: 36,
    height: 36,
    borderRadius: 18, // Круглая кнопка
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  } as ViewStyle,

  /** Текст кнопки добавления (символ "+") */
  addButtonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 18,
    letterSpacing: -0.3,
  } as TextStyle,
});
