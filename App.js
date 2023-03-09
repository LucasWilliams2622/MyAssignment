import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  SafeAreaView,
  Text, StyleSheet, View, Alert, TouchableOpacity, ScrollView, KeyboardAvoidingView

} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListNews from './ASM/Screens/ListNews';
import EditProfile from './ASM/Screens/EditProfile';
import Profile from './ASM/Screens/Profile';


import Login from './ASM/Screens/Login'
import NewsDetail from './ASM/Screens/NewsDetail';
import Register from './ASM/Screens/Register'
import ItemListNew from './ASM/Screens/ItemListNew';
import Settings from './ASM/Screens/Settings';
import Giude1 from './ASM/Screens/Guild/Guide1'
import Giude2 from './ASM/Screens/Guild/Guide2'
import Giude3 from './ASM/Screens/Guild/Guide3'
import TopTap from './ASM/Screens/TopTap';

import SocialButton from './ASM/Screens/Google/SocialButton';
import TestASM from './ASM/Screens/TestASM';
import MainContainer from './ASM/Screens/MainContainer';
import SwipeValueBased from './examples/SwipeValueBased'
import { AppContextProvider } from './ASM/Screens/AppContext';
import Orders from './ASM/Screens/NewAddress';
import Validation from './Thi/Validation';
import Bookmark from './ASM/Screens/Bookmark';
import Recent from './ASM/Screens/Recent';
import Home from './ASM/Screens/Home';
import PostNews from './ASM/Screens/PostNews';
import ListNe from './ASM/Screens/ListNe';
import MyKeyBoardAwareScollView from './Lab_Tset/MyKeyBoardAwareScollView';
import MyKeyBoardAvoidView from './Lab_Tset/MyKeyBoardAvoidView';

import MyFlatList from './Lab_Tset/MyFlatList'
import MyQRCamera from './Lab_Tset/MyQRCamera'
import ItemTest from './Lab_Tset/ItemTest';
import ThiNe from './Thi/ThiNe';
import LocationPickerModal from './Lab_Tset/modals/LocationPickerModal';
import { enableLatestRenderer } from 'react-native-maps';
enableLatestRenderer();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Tab1 = () => {
  return (
    <AppContextProvider>
      <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />

        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="Settings" component={Settings} />

        <Stack.Screen name="ListNews" component={ListNews} />
        <Stack.Screen name="TestASM" component={TestASM} />
        <Stack.Screen name="NewsDetail" component={NewsDetail} />

        <Stack.Screen name="ItemListNews" component={ItemListNew} />
        <Stack.Screen name="ItemBottomListNews" component={ItemListNew} />
        <Stack.Screen name="MainContainer" component={MainContainer} />
        <Stack.Screen name="Giude1" component={Giude1} />
        <Stack.Screen name="Giude2" component={Giude2} />
        <Stack.Screen name="Giude3" component={Giude3} />
      </Stack.Navigator>


    </AppContextProvider>

  )
}
const TabTest = () => {
  return (
    <AppContextProvider>
      <Stack.Navigator initialRouteName='MyQRCamera' screenOptions={{ headerShown: false }}>

        <Stack.Screen name="Validation" component={Validation} />
        <Stack.Screen name="MyFlatList" component={MyFlatList} />
        <Stack.Screen name="MyQRCamera" component={MyQRCamera} />


      </Stack.Navigator>


    </AppContextProvider>
  )
}

const App = () => {

  const [taskList, settaskList] = useState([])
  const handleAddTask = (task) => {
    //add task
    settaskList([...taskList, task]);

  }
  const handleDeleteTask = (index) => {

    Alert.alert('Thông báo !', 'Bạn có chắc muốn xóa ? ', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK', onPress: () => {
          let taskListmp = [...taskList];
          taskListmp.splice(index, 1);
          settaskList(taskListmp);
        }
      },
    ]);
  }

  return (
    // bọc ngoài all screen để screen nào cần data thì chỉ cần goi


    // <AppContextProvider>
    //   <NavigationContainer>

    //     <MainContainer />

    //   </NavigationContainer>
    // </AppContextProvider>

    
    // <NavigationContainer>
    //   <TabTest />
    // </NavigationContainer>

<LocationPickerModal/>
  );
};

export default App;