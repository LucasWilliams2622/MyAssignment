import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity, FlatList } from 'react-native'
import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ItemListNew from './ItemListNew';
import EditProfile from './EditProfile';
import Register from './Register';
import Profile from './Profile';
import Login from './Login';
import Home from './Home';
import Explore from './Explore';
import Bookmark from './Bookmark';
import ListNews from './ListNews'
import Settings from './Settings';
import NewsDetail from './NewsDetail';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppContext } from './AppContext';
import PostNews from './PostNews';
import Giude1 from './Guild/Guide1';
import Giude2 from './Guild/Guide2';
import Giude3 from './Guild/Guide3';
import { ICON, COLOR } from '../../contants/Themes.tsx'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const News = () => {
    return (
        <Stack.Navigator initialRouteName='ListNews' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="ListNews" component={ListNews} />
            <Stack.Screen name="NewsDetail" component={NewsDetail} />
        </Stack.Navigator>
    )
}
const ProfileTab = () => {
    return (
        <Stack.Navigator initialRouteName='Profile' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="ListNews" component={ListNews} />

        </Stack.Navigator>
    )
}

const Guide = () => {
    return (
        <Stack.Navigator initialRouteName='Giude1' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Giude1" component={Giude1} />
            <Stack.Screen name="Giude2" component={Giude2} />
            <Stack.Screen name="Giude3" component={Giude3} />
        </Stack.Navigator>
    )
}

//login register => stack
const Users = () => {
    return (
        <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />

            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
            <Stack.Screen name="Settings" component={Settings} />

            <Stack.Screen name="ListNews" component={ListNews} />
            <Stack.Screen name="NewsDetail" component={NewsDetail} />

            <Stack.Screen name="ItemListNews" component={ItemListNew} />
            <Stack.Screen name="ItemBottomListNews" component={ItemListNew} />
            <Stack.Screen name="Guide" component={Guide} />
            <Stack.Screen name="Giude1" component={Giude1} />
            <Stack.Screen name="Giude2" component={Giude2} />
            <Stack.Screen name="Giude3" component={Giude3} />
        </Stack.Navigator>
    )
}

//list news , profile , news => tab
const Main = () => {
    return (







            <Tab.Navigator
                screenOptions={
                    ({ route }) => ({
                        tabBarIcon: ({ focused, label }) => {

                            let iconName = focused
                            if (route.name === 'News') {
                                iconName = focused ? ICON.shop : ICON.shop
                                label = 'News'
                            } else if (route.name === 'PostNews') {
                                iconName = focused ? ICON.explore : ICON.explore;
                                label = 'PostNews'
                            } else if (route.name === 'Bookmark') {
                                iconName = focused ? ICON.cart : ICON.cart;
                                label = 'Bookmark'
                            } else if (route.name === 'ProfileTab') {
                                iconName = focused ? ICON.account : ICON.account;
                                label = 'ProfileTab'
                            }

                            // You can return any component that you like here!
                            return <View style={{
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Image source={iconName}
                                    style={{
                                        width: 30, height: 30, resizeMode: 'stretch',
                                        tintColor: focused ? COLOR.primary : COLOR.iconNotFocused
                                    }} />
                                <Text style={{
                                    color: focused ? COLOR.primary : COLOR.iconNotFocused,

                                }}>{label}</Text>
                            </View>;
                        },
                        headerShown: false,
                        tabBarShowLabel: false,
                        tabBarStyle: {
                            height: 66,
                        },
                    })}
            >
                <Tab.Screen name="News" component={News} />
                <Tab.Screen name="PostNews" component={PostNews} />
                <Tab.Screen name="Bookmark" component={Bookmark} />
                <Tab.Screen name="ProfileTab" component={ProfileTab} />

            </Tab.Navigator>
       






        // <Tab.Navigator screenOptions={{ headerShown: false }}>
        //     <Tab.Screen name="News" component={News} options={{
        //         title: "Home",
        //         tabBarIcon: () => (<Image source={require('../asset_ASM/IconHome.png')}
        //             />)
        //     }} />
        //     <Tab.Screen style={styles.bottomNav} name="PostNews" component={PostNews} options={{
        //         tabBarIcon: () => (<Image source={require('../asset_ASM/IconCompass.png')} style={styles.image} />)
        //     }} />
        //     <Tab.Screen name="Bookmark" component={Bookmark} options={{
        //         tabBarIcon: () => (<Image source={require('../asset_ASM/IconBookMark.png')} style={styles.image} />)
        //     }} />
        //     <Tab.Screen name="ProfileTab" component={ProfileTab} options={{
        //         tabBarIcon: () => (<Image source={require('../asset_ASM/IconProfile.png')} style={styles.image} />)
        //     }} />

        // </Tab.Navigator>
    )
}
const MainContainer = () => {
    const { isLogin } = useContext(AppContext);
    return (
        <>
            {
                isLogin == false ? <Users /> : <Main />
            }
        </>

    )
}


export default MainContainer

const styles = StyleSheet.create({

})