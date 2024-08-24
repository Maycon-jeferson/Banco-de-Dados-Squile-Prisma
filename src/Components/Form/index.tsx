import { View, Text, TextInput, StyleSheet, Pressable, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { prismaClient } from '../../services/db'

export function FormTask() {
    const [task, setTask] = useState("")
    
   async function handleNewTask(){
      if(task === "")return;

     await prismaClient.task.create({
        data:{
          name: task,
          completed: false
        }
      })

      setTask("")
      Keyboard.dismiss()
    }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Next TASK'
        value={task}
        onChangeText={setTask}
        style={styles.input}
      />

      <Pressable style={styles.button} onPress={handleNewTask}>
        <Text style={styles.buttonText}>Cadastrar</Text>
        <Ionicons name='add' size={24} color={"#fff"}/>
      </Pressable>
    </View>
  );
}

const styles= StyleSheet.create({
  container:{
    marginTop: 8,
    marginBottom: 8,
  },

  input:{
    backgroundColor: "#f1f5f9",
    padding: 8,
    borderRadius: 4,
    marginTop: 8,
    marginBottom: 8
  },

  button:{
    backgroundColor: "#22c55e",
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 6,
    gap: 8
  },

  buttonText:{
    color: "#fff",
    fontSize: 16,
    fontWeight: '500'
  }
})

// Esse código em React Native define um componente funcional chamado FormTask.

//Ele utiliza o hook useState para gerenciar o estado interno de uma variável chamada task, que armazena o texto digitado pelo usuário.

//O componente renderiza uma View que contém um TextInput.

//O TextInput tem um placeholder "Next TASK" e está vinculado ao estado task.

//Quando o usuário digita algo no campo de texto, o estado task é atualizado em tempo real através da função setTask.