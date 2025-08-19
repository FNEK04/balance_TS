import React, { FC } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { cities } from '../data/mockData';
import { globalStyles } from '../styles/globalStyles';
import { citySelectionStyles } from '../styles/citySelectionStyles';

interface CitySelectionScreenProps {
  selectedCity: string;
  onCitySelect: (city: string) => void;
}

const CitySelectionScreen: FC<CitySelectionScreenProps> = ({
  selectedCity,
  onCitySelect
}) => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={citySelectionStyles.header}>
        <Text style={globalStyles.headerTitle}>Выберите город</Text>
      </View>
      <ScrollView style={citySelectionStyles.cityList}>
        {cities.map((city, index) => (
          <TouchableOpacity
            key={index}
            style={[citySelectionStyles.cityItem, selectedCity === city && citySelectionStyles.selectedCityItem]}
            onPress={() => onCitySelect(city)}
          >
            <Text style={[citySelectionStyles.cityText, selectedCity === city && citySelectionStyles.selectedCityText]}>
              {city}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CitySelectionScreen;
