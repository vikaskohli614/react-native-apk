import React, { useEffect, useState } from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity, Text, Image, ScrollView } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Share from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/EvilIcons';
import Icon3 from 'react-native-vector-icons/Feather';




const Post = () => {
    const [blog, setBlog] = useState([]);
    const postUser = () => {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        };
        fetch('http://3.108.237.118:3000/getImage',
            requestOptions,
        ).then(resp => {
            resp.json().then(resp => {
                console.log(resp)
                setBlog(resp);
            });
        });
    };
    useEffect(() => {
        postUser();
    }, []
    )


    return (
            <ScrollView style={{margin:20}}>
                <View>
                    {blog.map((item, index) => (
                        <View
                            key={index}
                            style={styles.main1}>
                            <TouchableOpacity>
                                <Image
                                    style={{
                                        width: '100%',
                                        height: 300,

                                    }}
                                    source={{ uri: 'http://3.108.237.118:3000' + item.image }}/>
                            </TouchableOpacity>

                            <Text style={{
                                color: 'black',
                                marginTop: '3%',
                                marginLeft: '5%',
                                fontSize: 18,
                            }}>{item.text}</Text>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'flex-start',
                                    FmarginLeft: '40%',
                                    marginBottom: '10%',
                                    marginTop: 15
                                }}>
                                <TouchableOpacity
                                    style={{ position: 'absolute', left: 20 }}>
                                    <Icon name="like2" size={25} color="#7E8B98" />
                                </TouchableOpacity>
                                <Text style={{ left: 23, top: 25 }}>30</Text>
                                <TouchableOpacity
                                    style={{ position: 'absolute', left: 70 }}>
                                    <Icon1 name="dislike2" size={25} color="#7E8B98" />
                                </TouchableOpacity>
                                <Text style={{ left: 60, top: 25 }}>10</Text>
                                <TouchableOpacity
                                    style={{ position: 'absolute', left: 120 }}>
                                    <Icon2 name="comment" size={30} color="#7E8B98" />
                                </TouchableOpacity>
                                <Text style={{ left: 100, top: 25 }}>60</Text>
                                <TouchableOpacity style={{ position: 'absolute', left: 170 }}>
                                    <Share
                                        name="share"
                                        size={20}
                                        color="#7E8B98"
                                        solid />
                                </TouchableOpacity>
                                <Text style={{ left: 125, top: 25 }}>
                                    Share</Text>
                                <TouchableOpacity
                                    style={{ position: 'absolute', left: 270 }}>
                                    <Icon3 name="bookmark" size={30} color="#7E8B98" />
                                </TouchableOpacity>
                                <Text style={{ left: 203, top: 25 }}>save</Text>
                            </View>
                        </View>

                    ))}
                </View>
            </ScrollView>
    );
}

const styles = StyleSheet.create({
    main1: {
        backgroundColor: 'white',
        width: '100%',
        marginBottom: 20,
    },

    space: {
        marginLeft: '5%',
    },
})

export default Post;
