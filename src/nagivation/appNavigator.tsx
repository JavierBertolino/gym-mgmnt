import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../components/home';
import Training from '../components/training';
import LogIn from '../components/logIn';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainTabs: React.FC = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Training" component={Training} />
        </Tab.Navigator>
    );
};

const AppNavigator: React.FC = () => {
    return (
        <Stack.Navigator initialRouteName="LogIn">
            <Stack.Screen name="LogIn" component={LogIn} />
            <Stack.Screen
                name="Main"
                component={MainTabs}
                options={{
                    headerLeft: () => null,
                    headerShown: false,
                    headerTitle: ''
                }}
            />
        </Stack.Navigator>
    );
};

export default AppNavigator;
