import React from 'react';
import Button from './Button';
import Header from './Header';
import Post from './Post';
import { View, StyleSheet, SafeAreaView, TouchableOpacity, Text, Image, ScrollView } from 'react-native';


const Home = () => {
    return (<>
        <ScrollView>
            <Header />
            <Button />
            <Post />
        </ScrollView>
    </>);
}


export default Home;
