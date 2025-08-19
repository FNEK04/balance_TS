import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { colors } from '../constants/colors';

/**
 * Стили для экрана выбора города (CitySelectionScreen)
 * Дизайн основан на стиле сайта Balance Coffee
 */

export const citySelectionStyles = StyleSheet.create({
  // ===== ОСНОВНОЙ КОНТЕЙНЕР =====
  
  /** Основной контейнер экрана выбора города */
  container: {
    flex: 1,
    backgroundColor: colors.background,
  } as ViewStyle,

  // ===== ХЕДЕР ЭКРАНА =====
  
  /** Хедер с заголовком "Выберите город" */
  header: {
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

  /** Заголовок экрана "Выберите город" */
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text.primary,
    textAlign: 'center',
    letterSpacing: -0.3,
  } as TextStyle,

  // ===== СПИСОК ГОРОДОВ =====
  
  /** Контейнер для списка городов */
  cityList: {
    padding: 20,
  } as ViewStyle,

  /** Отдельный элемент города в списке */
  cityItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.border.light,
    backgroundColor: colors.white,
    marginBottom: 6,
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  } as ViewStyle,

  /** Выбранный город - выделяется цветом */
  selectedCityItem: {
    backgroundColor: colors.accent,
    borderColor: colors.accent,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
  } as ViewStyle,

  /** Текст названия города */
  cityText: {
    fontSize: 16,
    color: colors.text.primary,
    fontWeight: '600',
    letterSpacing: -0.1,
  } as TextStyle,

  /** Текст выбранного города - белый цвет на темном фоне */
  selectedCityText: {
    color: colors.white,
    fontWeight: '700',
  } as TextStyle,
});
