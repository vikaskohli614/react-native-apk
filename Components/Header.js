import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, } from 'react-native';
import Search from 'react-native-vector-icons/Feather';
const Header = () => {
    return (
        <>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                marginTop: '3%',
                marginBottom: '5%'
            }}>
                <View
                    style={{
                        left: 20,
                        flexDirection: 'row',
                        alignItems: 'center',
                        borderWidth: 0.5,
                        borderColor: 'gray',
                        borderRadius: 30,
                        width: '90%',
                        height: '90%',
                    }}>
                    <TouchableOpacity
                        style={{ marginLeft: '2%' }}>
                        <Search
                            name="search"
                            size={22}
                            color="#637381" />
                    </TouchableOpacity>
                    <TextInput
                        placeholder="Search, product & farurms"
                        placeholderTextColor="#000000"
                        style={{ color: "black" }} />
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({})

export default Header;
