import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Login from './Login';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './Register';
import Home from './Home';
import A from './Recent';
import TestASM from './TestASM';
import Explore from './Explore';
const TopTab = createMaterialTopTabNavigator();
const TopTap = () => {
    return (
        

            <NavigationContainer>
                
                <TopTab.Navigator initialRouteName='A' screenOptions={{
                    tabBarActiveTintColor: '#e91e63',
                    tabBarLabelStyle: { fontSize: 12 },
                    tabBarStyle: { backgroundColor: 'powderblue' },
                }}>
                    <TopTab.Screen name="Login" component={Home} />
                    <TopTab.Screen name="A" component={A} />
                </TopTab.Navigator>
            </NavigationContainer>
    

    )
}

export default TopTap

const styles = StyleSheet.create({
    top: {
        marginTop: 300
    }
})