import React, { useState, FC } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { MenuItem, Customizations } from '../types';
import { modalStyles } from '../styles/modalStyles';

interface CustomizationModalProps {
  item: MenuItem;
  onAddToCart: (item: MenuItem, customizations: Customizations) => void;
  onClose: () => void;
}

const CustomizationModal: FC<CustomizationModalProps> = ({ item, onAddToCart, onClose }) => {
  const [customizations, setCustomizations] = useState<Customizations>({
    size: 'M (350мл)',
    syrup: 'Без сиропа',
    milk: 'Обычное'
  });

  const handleAddToCart = (): void => {
    onAddToCart(item, customizations);
    onClose();
  };

  const renderOptionSection = (
    title: string,
    options: string[],
    selectedValue: string,
    onSelect: (value: string) => void
  ) => (
    <View style={modalStyles.optionSection}>
      <Text style={modalStyles.optionTitle}>{title}:</Text>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[
            modalStyles.optionItem,
            selectedValue === option && modalStyles.selectedOption
          ]}
          onPress={() => onSelect(option)}
        >
          <Text style={[
            modalStyles.optionText,
            selectedValue === option && modalStyles.selectedOptionText
          ]}>
            {option}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <View style={modalStyles.modalOverlay}>
      <View style={modalStyles.modalContent}>
        <Text style={modalStyles.modalTitle}>{item.name}</Text>

        <ScrollView
          style={modalStyles.modalScrollView}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={modalStyles.modalScrollContent}
        >
          {item.options?.size && renderOptionSection(
            'Размер',
            item.options.size,
            customizations.size,
            (size) => setCustomizations({ ...customizations, size })
          )}

          {item.options?.syrup && renderOptionSection(
            'Сироп',
            item.options.syrup,
            customizations.syrup,
            (syrup) => setCustomizations({ ...customizations, syrup })
          )}

          {item.options?.milk && renderOptionSection(
            'Молоко',
            item.options.milk,
            customizations.milk,
            (milk) => setCustomizations({ ...customizations, milk })
          )}
        </ScrollView>

        <View style={modalStyles.modalButtons}>
          <TouchableOpacity
            style={modalStyles.cancelButton}
            onPress={onClose}
          >
            <Text style={modalStyles.cancelButtonText}>Отмена</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={modalStyles.addToCartButton}
            onPress={handleAddToCart}
          >
            <Text style={modalStyles.addToCartButtonText}>
              Добавить в корзину {item.price} ₽
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CustomizationModal;
