import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Platform,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const Header = ({
    show, 
}) => {
    return( 
        <View style = {styles.container}>
            <Text style = {styles.title}>
                To Do List
            </Text>
            <TouchableOpacity
                activeOpacity = {0.8}
                onPress = {show}
                style = {styles.button}
            >
                <Ionicons name = "ios-add" color ="#FFFFFF" size={24}/>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container : {
        flexDirection :'row',
        alignItems: 'center',
        justifyContent : 'space-between',
        marginTop : 56,
        marginBottom : 16,
        marginLeft : 16,
        marginRight : 20,
    },
    title : {
        color : '#212121',
        fontSize : 32,
        fontWeight : '600',
    },
    button:{
        width:28,
        height:28,
        borderRadius: 14,
        backgroundColor : '#212121',
        justifyContent : 'center',
        alignItems : 'center',
        paddingTop : Platform.select({
            iso : 2,
            android : 0
        }),
        paddingLeft : Platform.select({
            ios:1,
            android : 0
        }),

    },
})

export default Header