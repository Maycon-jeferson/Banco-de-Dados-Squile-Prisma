import { FlatList } from 'react-native'
import { prismaClient } from '../../services/db'
import { TaskList } from './TaskList'

// Componente que renderiza a lista de tarefas
export function Tasks({ filter }: { filter: boolean }) {

    // Busca as tarefas no banco de dados, filtrando por status de conclusão
    const tasks = prismaClient.task.useFindMany({
      where:{
        completed: filter
      }
    })

    return (
      <>
        {/* FlatList para renderizar a lista de tarefas */}
        <FlatList
            data={tasks} // Dados das tarefas
            keyExtractor={(item)=> String(item.id)} // Chave única para cada item da lista
            renderItem={ ({ item }) => <TaskList data={item}/> } // Renderiza cada tarefa usando o componente TaskList
        />
      </>
    )
}
