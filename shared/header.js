
import React from 'react'
import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import 'react-native-gesture-handler';

export default function Header(props){

    const navigation = props.navigation.navigation
    return (
        <View style={styles.demo}>
        <ImageBackground source={require('../assets/game_bg.png')} style={styles.header}>
            <MaterialIcons name='menu' size={28} onPress={() => {navigation.toggleDrawer()}} style={styles.icon} />
            <View style={styles.headerTitle}>
                <Image source={require('../assets/heart_logo.png')} style={styles.headerImage}/>
                <Text style={styles.headerText}>GameZone</Text>
            </View>
        </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        flex: 1,
        width: Dimensions.get('screen').width,
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'aquamarine',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
    },
    icon: {
        position: 'absolute',
        left: 0,
    },
    headerImage: {
        width: 25,
        height: 26,
        marginHorizontal: 10,
    },
    headerTitle: {
        flexDirection: 'row',

    },
    demo: {
        padding: 0,
        borderWidth: 1,
    }
})
