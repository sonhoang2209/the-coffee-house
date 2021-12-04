import * as React from 'react';
import { View,StyleSheet, Text,Image, TouchableOpacity,TextInput, ScrollView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../screens/Home';
import Login from '../screens/Login';
import Account from '../screens/Account';
import Bag from '../screens/Bag';
import Shop from '../screens/Shop';
import Wishlist from '../screens/Wishlist';
import Search from '../screens/Search';
import Detail from '../screens/Detail';
import Utilities from '../screens/Utilities';
import Test from '../screens/Test';
import Products from '../screens/Products';

function AppNavigation() {

  const Tab = createBottomTabNavigator();
  const ProductStack = createNativeStackNavigator();
  const TestStack = createNativeStackNavigator();

  function TestStackScreen() {
    return (
      <TestStack.Navigator>
        <TestStack.Screen name="Wishlist" component={Wishlist}
          options={{
            headerShown: false,
          }}
        />
        <TestStack.Screen name="AccountTest" component={Account} />
      </TestStack.Navigator>
    );
  }

  function ProductStackScreen() {
    return (
      <ProductStack.Navigator>
        <ProductStack.Screen name="ProductList" component={Products}
          options={{
            headerShown: false,
          }}
        />
        <ProductStack.Screen name="ProductDetail" component={Detail}/>
      </ProductStack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarHideOnKeyboard: true,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Order') {
              iconName = focused ? 'cafe' : 'cafe-outline';
            } else if (route.name === 'Shop') {
              iconName = focused ? 'fast-food' : 'fast-food-outline';
            } else if (route.name === 'Ticket') {
              iconName = focused ? 'cash' : 'cash-outline';
            } else if (route.name === 'Utilities') {
              iconName = focused ? 'menu' : 'menu-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={Home}  />
        <Tab.Screen name="Order" component={ProductStackScreen} />
        <Tab.Screen name="Shop" component={Shop} />
        <Tab.Screen name="Ticket" component={Bag} />
        <Tab.Screen name="Utilities" component={Search} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
