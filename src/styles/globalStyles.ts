import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { colors } from '../constants/colors';

/**
 * Глобальные стили приложения
 * Дизайн основан на стиле сайта Balance Coffee
 */

export const globalStyles = StyleSheet.create({
  // ===== ОСНОВНЫЕ КОНТЕЙНЕРЫ =====
  
  /** Основной контейнер для всех экранов */
  container: {
    flex: 1,
    backgroundColor: colors.background,
  } as ViewStyle,

  // ===== ЗАГОЛОВКИ И ТЕКСТ =====
  
  /** Заголовок экрана - используется во всех экранах */
  headerTitle: {
  fontSize: 18,
  fontWeight: '700',
  color: colors.text.primary,
  letterSpacing: -0.3,
  textAlign: 'center',   // центрирование текста
  alignSelf: 'center',   // центрирование самого элемента
  marginLeft: 20 
} as TextStyle,


  /** Заголовок раздела - используется для группировки элементов */
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text.primary,
    marginBottom: 16,
    letterSpacing: -0.3,
  } as TextStyle,

  // ===== КНОПКИ =====
  
  /** Основная кнопка действия (добавить в корзину, оформить заказ) */
  primaryButton: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
  } as ViewStyle,

  /** Текст основной кнопки */
  primaryButtonText: {
    color: colors.white,
    fontSize: 15,
    fontWeight: '600',
    letterSpacing: 0.3,
  } as TextStyle,

  /** Вторичная кнопка (отмена, назад) */
  secondaryButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: colors.border.light,
    alignItems: 'center',
    backgroundColor: colors.white,
  } as ViewStyle,

  /** Текст вторичной кнопки */
  secondaryButtonText: {
    fontSize: 15,
    color: colors.text.secondary,
    fontWeight: '600',
    letterSpacing: 0.2,
  } as TextStyle,

  // ===== ПОЛЯ ВВОДА =====
  
  /** Базовое поле ввода для форм */
  input: {
    borderWidth: 1.5,
    borderColor: colors.border.light,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 15,
    marginBottom: 16,
    backgroundColor: colors.white,
    color: colors.text.primary,
    minHeight: 48,
    fontWeight: '500',
  } as TextStyle,

  /** Поле для комментариев (многострочное) */
  commentInput: {
    height: 100,
    textAlignVertical: 'top',
    paddingTop: 12,
  } as TextStyle,

  // ===== ТЕНИ И ЭЛЕВАТОРЫ =====
  
  /** Тень для карточек и элементов */
  cardShadow: {
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
  } as ViewStyle,

  /** Тень для кнопок */
  buttonShadow: {
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
  } as ViewStyle,

  // ===== ДОПОЛНИТЕЛЬНЫЕ СТИЛИ =====
  
  /** Стиль для активных состояний */
  activeState: {
    backgroundColor: colors.accent,
    borderColor: colors.accent,
  } as ViewStyle,

  /** Стиль для успешных действий */
  successState: {
    backgroundColor: colors.success,
    borderColor: colors.success,
  } as ViewStyle,

  /** Стиль для предупреждений */
  warningState: {
    backgroundColor: colors.warning,
    borderColor: colors.warning,
  } as ViewStyle,

  /** Стиль для ошибок */
  errorState: {
    backgroundColor: colors.error,
    borderColor: colors.error,
  } as ViewStyle,
});
