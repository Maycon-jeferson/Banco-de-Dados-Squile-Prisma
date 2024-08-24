
import { Text, View, StyleSheet, FlatList, Pressable } from 'react-native'
import { Task } from '@prisma/client'

import { Ionicons } from '@expo/vector-icons'

interface Props{
    data: Task
}

export function TaskList( {data}: Props ) {
    return (
      <View style={style.container}>
        <Text style={style.text}>{data.name}</Text>
        
        <View style={style.button}>
            <Pressable style={style.buttonDelete}>
                <Ionicons name='trash-outline' size={16} color={"#fff"}/>
            </Pressable>
            
            <Pressable style={style.buttoncompleted}>
                <Ionicons name='checkbox-outline' size={16} color={"#fff"}/>
            </Pressable>
        </View>

      </View>
    )
}

const style = StyleSheet.create({
    container:{
        backgroundColor: "#64748b",
        marginBottom: 30,
        padding: 14,
        borderRadius:4
    },
    text:{
        fontWeight: '500',
        color: "#fff"
    },
    button:{
        position:'absolute',
        bottom: -18,
        flexDirection: 'row',
        right: 0,
        zIndex: 99,
        gap: 8
    },
    buttonDelete:{
        backgroundColor: '#ef4444',
        padding: 6,
        borderRadius: 99,
    },
    buttoncompleted:{
        backgroundColor: '#22c55e',
        padding: 6,
        borderRadius: 99,
    }
})