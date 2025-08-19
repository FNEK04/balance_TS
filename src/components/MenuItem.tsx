import React, { FC } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { MenuItem as MenuItemType } from '../types';
import { menuItemStyles } from '../styles/menuItemStyles';

interface MenuItemProps {
  item: MenuItemType;
  onPress: (item: MenuItemType) => void;
}

const MenuItem: FC<MenuItemProps> = ({ item, onPress }) => {
  return (
    <View style={menuItemStyles.menuItem}>
      <Image source={{ uri: item.image }} style={menuItemStyles.itemImage} />
      <View style={menuItemStyles.itemInfo}>
        <Text style={menuItemStyles.itemName}>{item.name}</Text>
        <Text style={menuItemStyles.itemDescription}>{item.description}</Text>
        <View style={menuItemStyles.itemBottom}>
          <Text style={menuItemStyles.itemPrice}>{item.price} ₽</Text>
          <TouchableOpacity
            style={menuItemStyles.addButton}
            onPress={() => onPress(item)}
          >
            <Text style={menuItemStyles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MenuItem;
