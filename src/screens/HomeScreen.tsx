import React, { FC } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { MenuItem as MenuItemType } from '../types';
import { mockMenu } from '../data/mockData';
import { getTotalItems } from '../utils/cartUtils';
import MenuItem from '../components/MenuItem';
import { globalStyles } from '../styles/globalStyles';
import { homeScreenStyles } from '../styles/homeScreenStyles';

interface HomeScreenProps {
  selectedCity: string;
  cart: any[];
  onCitySelect: () => void;
  onCartPress: () => void;
  onMenuItemPress: (item: MenuItemType) => void;
}

const HomeScreen: FC<HomeScreenProps> = ({
  selectedCity,
  cart,
  onCitySelect,
  onCartPress,
  onMenuItemPress
}) => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* Хедер */}
      <View style={homeScreenStyles.header}>
        <TouchableOpacity
          style={homeScreenStyles.citySelector}
          onPress={onCitySelect}
        >
          <Text style={homeScreenStyles.cityText}>{selectedCity}</Text>
          <Text style={homeScreenStyles.changeText}>изменить</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={homeScreenStyles.cartButton}
          onPress={onCartPress}
        >
          <Text style={homeScreenStyles.cartButtonText}>
            Корзина ({getTotalItems(cart)})
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={homeScreenStyles.cartButton}
          onPress={onCartPress}
        >
          <Text style={homeScreenStyles.cartButtonText}>
            Корзина ({getTotalItems(cart)})
          </Text>
        </TouchableOpacity>
      </View>

      {/* Информация о доставке */}
      <View style={homeScreenStyles.deliveryInfo}>
        <View style={homeScreenStyles.deliveryIcon}>
          <Text style={homeScreenStyles.deliveryIconText}>🚛</Text>
        </View>
        <Text style={homeScreenStyles.deliveryText}>
          Доставка доступна с 8:00 до 23:00
        </Text>
      </View>

      {/* Меню */}
      <ScrollView style={homeScreenStyles.menuContainer}>
        <Text style={globalStyles.sectionTitle}>Меню</Text>

        {mockMenu.map(item => (
          <MenuItem
            key={item.id}
            item={item}
            onPress={onMenuItemPress}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
