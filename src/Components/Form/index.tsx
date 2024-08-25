import { View, Text, TextInput, StyleSheet, Pressable, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { prismaClient } from '../../services/db'

// Componente funcional que permite ao usuário criar uma nova tarefa
export function FormTask() {
    // Define um estado para armazenar o texto da tarefa digitada pelo usuário
    const [task, setTask] = useState("")
    
    // Função para lidar com a criação de uma nova tarefa
    async function handleNewTask(){
      // Se o campo da tarefa estiver vazio, a função é interrompida
      if(task === "") return;

      // Cria uma nova tarefa no banco de dados com o nome e define 'completed' como falso
      await prismaClient.task.create({
        data:{
          name: task,
          completed: false
        }
      })

      // Limpa o campo de entrada após a tarefa ser criada
      setTask("")

      // Fecha o teclado ao cadastrar a tarefa
      Keyboard.dismiss()
    }

    return (
      <View style={styles.container}>
        {/* Campo de entrada de texto para a nova tarefa */}
        <TextInput
          placeholder='Digite aqui o nome da sua task!'
          value={task} 
          onChangeText={setTask} 
          style={styles.input} 
        />

        {/* Botão para cadastrar a nova tarefa */}
        <Pressable style={styles.button} onPress={handleNewTask}>
          <Ionicons name='add-circle' size={24} color={"#fff"}/>
        </Pressable>
      </View>
    );
}

// Estilos para o componente
const styles = StyleSheet.create({
  // Estilo do container principal
  container:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8, 
    marginTop: 8,
    marginBottom: 8,
  },

  // Estilo do campo de entrada de texto
  input:{
    backgroundColor: "#f1f5f9", 
    borderRadius: 4,
    width: 280,
    height: 50,
  },

  // Estilo do botão de cadastro
  button:{
    backgroundColor: "#21305c", 
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
  }
})

// Explicação do Código:
// Esse código em React Native define um componente funcional chamado FormTask, que permite ao usuário criar uma nova tarefa.

// O componente utiliza o hook useState para gerenciar o estado interno de uma variável chamada 'task', que armazena o texto digitado pelo usuário.

// A View renderiza um TextInput que permite ao usuário digitar o nome da nova tarefa. O TextInput está vinculado ao estado 'task', de forma que o valor digitado seja armazenado e atualizado em tempo real.

// Quando o botão "Cadastrar" é pressionado, a função handleNewTask é chamada. Ela verifica se o campo de texto não está vazio, cria uma nova tarefa no banco de dados utilizando o prismaClient, limpa o campo de texto e fecha o teclado.
