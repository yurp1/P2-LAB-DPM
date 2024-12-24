import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import komponen halaman
import DimensionExample from './src/dimension';
import StylingExample from './src/styling';
import FontExample from './src/font';
import FlexBoxLayout from './src/layouting';
import TextCenter from './src/TextCenter'; // Import komponen baru

// Inisialisasi Tab Navigator
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Dimension" component={DimensionExample} />
        <Tab.Screen name="Styling" component={StylingExample} />
        <Tab.Screen name="Font" component={FontExample} />
        <Tab.Screen
          name="Box"
          component={FlexBoxLayout}
          options={{ headerShown: false }}
        />
        <Tab.Screen name="TextCenter" component={TextCenter} /> 
      </Tab.Navigator>
    </NavigationContainer>
  );
}
