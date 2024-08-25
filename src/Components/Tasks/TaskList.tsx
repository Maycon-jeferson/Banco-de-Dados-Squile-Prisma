import { Text, View, StyleSheet, FlatList, Pressable } from 'react-native'
import { Task } from '@prisma/client'
import { prismaClient } from '../../services/db'
import { Ionicons } from '@expo/vector-icons'

// Definição da interface para as props do componente
interface Props{
    data: Task
}

// Componente que renderiza cada item da lista de tarefas
export function TaskList( {data}: Props ) {

    // Função assíncrona para deletar uma tarefa pelo ID
    async function handleDeletetask(){
        await prismaClient.task.delete({
            where:{
                id: data.id
            }
        })
    }

    // Função assíncrona para atualizar o status de conclusão da tarefa
    async function handleUpdateStatus(){
        await prismaClient.task.update({
            where:{
                id: data.id            
            },
            data:{
                completed: true
            }
        })
    }

    return (
      <View style={style.container}>
        {/* Nome da tarefa */}
        <Text style={style.text}>{data.name}</Text>
        
        {/* Botões para deletar ou marcar como completa */}
        <View style={style.button}>
            {/* Botão de deletar tarefa */}
            <Pressable style={style.buttonDelete} onPress={handleDeletetask}>
                <Ionicons name='trash-bin' size={16} color={"#fff"}/>
            </Pressable>
            
            {/* Botão de completar tarefa (aparece apenas se a tarefa não estiver completa) */}
            {!data.completed && (
                 <Pressable style={style.buttoncompleted} onPress={handleUpdateStatus}>
                 <Ionicons name='checkbox-sharp' size={16} color={"#fff"}/>
             </Pressable>
            )}
        </View>
      </View>
    )
}

// Estilos do componente
const style = StyleSheet.create({
    // Estilo do container da tarefa
    container:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#21305c", 
        marginBottom: 30,
        padding: 6, 
        borderRadius: 4
    },
    // Estilo do texto (nome da tarefa)
    text:{
        fontWeight: '500',
        color: "#fff",
        width: 250,
    },
    // Estilo do container dos botões
    button:{
        flexDirection: 'row',
        margin: 8,
        gap: 8,
        width: 50,
    },
    // Estilo do botão de deletar
    buttonDelete:{
        padding: 6, 
        borderRadius: 99,
        borderColor: '#fff',
        borderStyle: 'solid',
        borderWidth: 2
    },
    // Estilo do botão de completar tarefa
    buttoncompleted:{
        padding: 6, 
        borderRadius: 99,
        borderColor: '#fff',
        borderStyle: 'solid',
        borderWidth: 2
    }
})
