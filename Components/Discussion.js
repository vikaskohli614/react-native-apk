import React from 'react';
import { View, StyleSheet, Text ,TouchableOpacity } from 'react-native';

const Discussion = () => {
    return (
        <View>
            <View style={{
                marginLeft: 25,
                marginTop: 10,
            }}>
                <Text style={{
                    fontSize: 30,
                    fontWeight: '500',
                    color: 'black'
                }}>Discussions</Text>
                
            </View>
            <View style={{marginTop:10}}>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={[styles.but, styles.butcolor]}>
                    <Text
                        style={[styles.butttext, styles.butttext1]}
                    >
                        Feed
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.but, styles.butborder]}>
                    <Text
                        style={[styles.butttext, styles.butttext2]}
                    >
                        Feed
                    </Text>
                </TouchableOpacity>
                </View>
                </View>
        </View>
    );
}

const styles = StyleSheet.create({butcolor: {
    backgroundColor: '#EF7E46',
},
but: {
    borderRadius: 30,
    justifyContent: 'center',
    height: 35,
    width: 60,
    marginLeft: 20
},
butttext: {
    fontWeight: 'bold',
    fontSize: 16,
    alignSelf: 'center',
},
butttext1: {
    color: '#ffffff',
},
butttext2: {
    color: '#EF7E46',
},
butborder: {
    borderWidth: 1,
    borderColor: '#EF7E46'
}

})

export default Discussion;
