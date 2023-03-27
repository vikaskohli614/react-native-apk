import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Feather';
import Icon3 from 'react-native-vector-icons/Ionicons';
import Icon4 from 'react-native-vector-icons/AntDesign';
import Icon5 from 'react-native-vector-icons/AntDesign';
import Home from './Home';
import CreatePost from './Create_post';

const Tab = createBottomTabNavigator();


// const Home = () => {
//     return <View style={{ backgroundColor: '#ccc', justifyContent: 'center', flex: 1, alignItems: 'center' }}>
//         <Text style={{ fontSize: 25 }}>Home</Text>
//     </View>
// }

const Search = () => {
    return <View style={{ backgroundColor: '#ccc', justifyContent: 'center', flex: 1, alignItems: 'center' }}>
        <Text style={{ fontSize: 25 }}>Search</Text>
    </View>
}


const Profile = () => {
    return <View style={{ backgroundColor: '#ccc', justifyContent: 'center', flex: 1, alignItems: 'center' }}>
        <Text style={{ fontSize: 25 }}>Profile</Text>
    </View>
}
const Notification = () => {
    return <View style={{ backgroundColor: '#ccc', justifyContent: 'center', flex: 1, alignItems: 'center' }}>
        <Text style={{ fontSize: 25 }}>Notification</Text>
    </View>
}


const BottomTabNavi = () => {
    return (
        <Tab.Navigator
            initialRouteName="Feed"
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#e91e63',
                tabBarStyle: { height: 50, position: 'absolute', bottom: 10, borderRadius: 50, marginHorizontal: 15 }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" size={30} color="#7E8B98" />
                    ),
                }}
            />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarLabel: 'Search',
                    tabBarIcon: ({ color, size }) => (
                        <Icon2 name="search" size={30} color="#637381" />
                    ),
                }}
            />
            <Tab.Screen
                name="Post"
                component={CreatePost}
                options={{
                    headerShown: true,
                    tabBarLabel: 'Post',
                    tabBarIcon: ({ color, size }) => (
                        <Icon3 name="add-circle-outline" size={30} color="#7E8B98" />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <Icon4 name="bells" size={30} color="#7E8B98" />
                    ),
                }}
            />
            <Tab.Screen
                name="Notification"
                component={Notification}
                options={{
                    tabBarLabel: 'Notification',
                    tabBarIcon: ({ color, size }) => (
                        <Icon5 name="team" size={30} color="#7E8B98" />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({})

export default BottomTabNavi;

