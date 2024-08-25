import { useState } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'

// Define a interface para as props do componente
interface Props{
    filter: boolean // Estado atual do filtro (abertas/finalizadas)
    setFilter: (status: boolean) => void; // Função para atualizar o estado do filtro
}

// Componente funcional que permite alternar entre tarefas abertas e finalizadas
export function Action({ filter, setFilter }: Props) {

    // Estado interno para controlar o status da seleção
    const [status, setStatus] = useState(false)

    // Função para lidar com a seleção de uma ação (abertas ou finalizadas)
    function handleAction(item: boolean){
        setStatus(item) // Atualiza o estado interno
        setFilter(item) // Atualiza o estado do filtro no componente pai
    }

    return (
      <View style={style.buttons}>
        {/* Botão para exibir as tarefas abertas */}
        <Pressable 
          style={[style.button, !status && style.selectButton]} 
          onPress={() => handleAction(false)}
        > 
            <Text style={style.buttonText}>Abertas</Text>
        </Pressable>

        {/* Botão para exibir as tarefas finalizadas */}
        <Pressable 
          style={[style.button, status && style.selectButton]} 
          onPress={() => handleAction(true)}
        > 
            <Text style={style.buttonText}>Finalizadas</Text>
        </Pressable>
      </View>
    )
}

// Estilos para o componente
const style = StyleSheet.create({
    // Estilo do container que envolve os botões
    buttons:{
        flexDirection: "row",
        justifyContent: 'space-around', 
        gap: 8, 
        marginTop: 12, 
        marginBottom: 8
    },

    // Estilo base para os botões
    button:{
        padding: 4, 
        paddingRight: 8, 
        paddingLeft: 8, 
    },

    // Estilo do texto dentro dos botões
    buttonText:{
        color: '#fff'
    },
     
    selectButton: {
        borderBottomColor: '#fff',
        borderStyle: 'solid',
        borderBottomWidth: 3
    }
})


                