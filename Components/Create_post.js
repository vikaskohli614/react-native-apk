import { View, StyleSheet, Text, TouchableOpacity, TextInput, ImageBackground, ScrollView, Button } from 'react-native';
import React, { memo, useState, useEffect } from 'react';
import { launchImageLibrary } from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/AntDesign';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const options = {
    title: 'Select Image',
    type: 'library',
    options: {
        selectionLimit: 1,
        mediaType: 'photo',
        includeBase64: false,
    },
}
const CreatePost = () => {
    const open = async () => {
        const images = await launchImageLibrary(options);
        setUri(images.assets);
        setImages(images);
        console.log('first', images.assets);
    };
    const [uri, setUri] = useState();
    const [images, setImages] = useState();
    const [post_name, setPost] = useState();

    const postUser = () => {

        const formdata = new FormData();
        formdata.append('image', {
            uri: images.assets[0].uri,
            type: images.assets[0].type,
            name: images.assets[0].fileName,
        });

        formdata.append('text', post_name),
            fetch(`http://3.108.237.118:3000/images`, {
                method: 'post',
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                body: formdata,
            })
                .then(response => {
                    console.log('Status code : ', response.status);
                    if (response.status = 201) {

                    }
                })
                .catch(err => {
                    console.log('errrr', err);
                });
    };


    return (
        <ScrollView>
            <View>
                <View style={{ marginTop: 10 }}>
                    <Text style={{ fontSize: 30, color: 'black', textAlign: 'center' }}>Ask Questions</Text>
                </View>
                <View style={{ flexDirection: 'row', top: 20 }}>
                    <TouchableOpacity style={[styles.but]}>
                        <Text
                            style={[styles.butttext, styles.butttext2]}
                        >
                            Photo
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.but]}>
                        <Text
                            style={[styles.butttext, styles.butttext1]}
                        >
                            Text
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.but]}>
                        <Text
                            style={[styles.butttext, styles.butttext1]}
                        >
                            Poll
                        </Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        top: 1,
                        borderBottomColor: '#c5c8c9',
                        borderBottomWidth: 1,
                        marginHorizontal: 20,
                        top: 20
                    }}
                />
                <View style={{ left: 4, top: 40, flexDirection: 'row' }}>
                    <Text style={{ fontSize: 20 }}>Upload Photo</Text>
                    <TouchableOpacity onPress={open}>
                        <View style={{ left: 190 }}>
                            <Icon name="upload" size={30} color="#EF7E46" />
                        </View>
                    </TouchableOpacity>
                </View>
                <ImageBackground
                    style={styles.avatar}
                    source={uri}>
                </ImageBackground>
                <View
                    style={{
                        backgroundColor: 'c5c8c9',
                        width: '100%',
                        marginTop: '0%',
                        padding: 15,
                        height: hp('25%'),
                        borderRadius: 10,
                        borderWidth: 1.5,
                        borderColor: '#ECECEC',
                    }}>
                    <TextInput
                        autoCapitalize='none'
                        autoCorrect={false}
                        placeholder="Question"
                        placeholderTextColor={'#C4C4C4'}
                        backgroundColor='white'
                        multiline={true}
                        value={post_name}
                        onChangeText={setPost}
                        style={{ color: 'black' }}
                    />
                </View>
                <Button onPress={() => {
                postUser();
              }}
                    title="Post data"
                    color="#EF7E46"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    but: {
        justifyContent: 'center',
        height: 35,
        width: 60,
        marginLeft: 20
    },
    butttext: {
        fontWeight: 'bold',
        fontSize: 18,
        alignSelf: 'center',
    },
    butttext1: {
        color: '#1E1E1E',
    },
    butttext2: {
        color: '#EF7E46',
    },
    avatar: {
        height: 190,
        width: '95%',
        borderRadius: '24%',
        justifyContent: 'center',
        marginTop: '20%',
        alignContent: 'center',
        alignSelf: 'center',
        marginLeft: 15

    },


})

export default CreatePost;
