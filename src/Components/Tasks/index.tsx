
import { Text, View, StyleSheet, FlatList } from 'react-native'
import { prismaClient } from '../../services/db'
import { TaskList } from './TaskList'

export function Tasks() {

    const tasks = prismaClient.task.useFindMany()

    return (
      <>
        <FlatList
            data={tasks}
            keyExtractor={(item)=> String(item.id)}
            renderItem={ ({ item }) => <TaskList data={item}/> }
        />
      </>
    )
}

const style = StyleSheet.create({

})