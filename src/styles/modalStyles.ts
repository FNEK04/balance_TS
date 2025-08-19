import { StyleSheet, ViewStyle, TextStyle, Dimensions } from 'react-native';
import { colors } from '../constants/colors';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

/**
 * Стили для модального окна кастомизации (CustomizationModal)
 * Дизайн основан на стиле сайта Balance Coffee
 */

export const modalStyles = StyleSheet.create({
  // ===== ОСНОВНОЕ ПОКРЫТИЕ =====
  
  /** Затемненное покрытие для модального окна */
  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.modal.overlay,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  } as ViewStyle,

  // ===== СОДЕРЖИМОЕ МОДАЛЬНОГО ОКНА =====
  
  /** Основной контейнер модального окна */
  modalContent: {
    backgroundColor: colors.white,
    borderRadius: 16,
    marginHorizontal: 20,
    maxHeight: screenHeight * 0.8,
    width: screenWidth - 40,
    flexDirection: 'column',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
  } as ViewStyle,

  // ===== ЗАГОЛОВОК МОДАЛЬНОГО ОКНА =====
  
  /** Заголовок модального окна с названием товара */
  modalTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text.primary,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 16,
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.border.medium,
    letterSpacing: -0.3,
  } as TextStyle,

  // ===== ОБЛАСТЬ ПРОКРУТКИ =====
  
  /** Область прокрутки для опций кастомизации */
  modalScrollView: {
    maxHeight: screenHeight * 0.5,
  } as ViewStyle,

  /** Контейнер содержимого прокрутки */
  modalScrollContent: {
    paddingHorizontal: 24,
    paddingTop: 16,
  } as ViewStyle,

  // ===== СЕКЦИИ ОПЦИЙ =====
  
  /** Секция с опциями кастомизации (размер, сироп, молоко) */
  optionSection: {
    marginBottom: 24,
  } as ViewStyle,

  /** Заголовок секции опций */
  optionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text.primary,
    marginBottom: 12,
    letterSpacing: -0.2,
  } as TextStyle,

  // ===== ЭЛЕМЕНТЫ ОПЦИЙ =====
  
  /** Отдельный элемент опции (кнопка выбора) */
  optionItem: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1.5,
    borderColor: colors.border.light,
    backgroundColor: colors.white,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  } as ViewStyle,

  /** Выбранный элемент опции - выделяется цветом */
  selectedOption: {
    backgroundColor: colors.accent,
    borderColor: colors.accent,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
  } as ViewStyle,

  /** Текст элемента опции */
  optionText: {
    fontSize: 14,
    color: colors.text.primary,
    fontWeight: '600',
    letterSpacing: -0.1,
  } as TextStyle,

  /** Текст выбранного элемента опции - белый цвет на темном фоне */
  selectedOptionText: {
    color: colors.white,
    fontWeight: '700',
  } as TextStyle,

  // ===== КНОПКИ МОДАЛЬНОГО ОКНА =====
  
  /** Контейнер с кнопками "Отмена" и "Добавить в корзину" */
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: colors.border.medium,
    gap: 12,
  } as ViewStyle,

  /** Кнопка "Отмена" */
  cancelButton: {
    flex: 1,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: colors.border.light,
    alignItems: 'center',
    backgroundColor: colors.white,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  } as ViewStyle,

  /** Текст кнопки "Отмена" */
  cancelButtonText: {
    fontSize: 15,
    color: colors.text.secondary,
    fontWeight: '600',
    letterSpacing: 0.2,
  } as TextStyle,

  /** Кнопка "Добавить в корзину" */
  addToCartButton: {
    flex: 2,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: colors.primary,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  } as ViewStyle,

  /** Текст кнопки "Добавить в корзину" */
  addToCartButtonText: {
    fontSize: 15,
    color: colors.white,
    fontWeight: '700',
    letterSpacing: 0.3,
  } as TextStyle,
});
