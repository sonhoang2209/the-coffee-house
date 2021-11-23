import * as React from 'react';
import { NavigationContainer }from '@react-navigation/native';
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

function AppNavigation() {

  const Tab = createBottomTabNavigator();
  const ProductStack = createNativeStackNavigator();

  const TestStack = createNativeStackNavigator();

  function TestStackScreen() {
    return (
      <TestStack.Navigator>
        <TestStack.Screen name="Wishlist" component={Wishlist}/>
        <TestStack.Screen name="AccountTest" component={Account} />
      </TestStack.Navigator>
    );
  }

  function ProductStackScreen() {
    return (
      <ProductStack.Navigator>
        <ProductStack.Screen name="ProductList" component={Shop}/>
        <ProductStack.Screen name="ProductDetail" component={Detail} />
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

            if (route.name === 'Discover') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Shop') {
              iconName = focused ? 'search' : 'search-outline';
            } else if (route.name === 'Wishlist') {
              iconName = focused ? 'heart' : 'heart-outline';
            } else if (route.name === 'Bag') {
              iconName = focused ? 'cart' : 'cart-outline';
            } else if (route.name === 'Account') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}
      >
        <Tab.Screen name="Discover" component={Home}  />
        <Tab.Screen name="Shop" component={ProductStackScreen} />
        <Tab.Screen name="Wishlist" component={Test} />
        <Tab.Screen name="Bag" component={Detail} />
        <Tab.Screen name="Account" component={TestStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
