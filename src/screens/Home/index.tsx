import { Text, StyleSheet, SafeAreaView, StatusBar,View } from "react-native"
import { FormTask } from "../../Components/Form";
import { Tasks } from "../../Components/Tasks";
import { useState } from "react";
import { Action } from "../../Components/Action";

// Componente principal da tela Home
export function Home(){

    // Declaração de estado para controlar o filtro
    const [filter, setFilter] = useState(false)

    return(
      <>
        {/* Configuração da StatusBar com cor de fundo e estilo do texto */}
        <StatusBar backgroundColor={"#21305c"} barStyle={"light-content"}/>

        {/* SafeAreaView garante que o conteúdo esteja dentro das margens seguras da tela */}
        <SafeAreaView style={styles.container}>
          <View style={styles.textTittle}>
            {/* Título da tela */}
            <Text style={styles.tittle}>NOTAS</Text>
            
            {/* Texto descritivo abaixo do título */}
            <Text style={styles.text}>Crie adicione e altere notas e to do list</Text>
          </View>

          {/* Componente de formulário para criar novas tarefas */}
          <FormTask/>

          {/* Componente de ação que altera o estado do filtro */}
          <Action filter={filter} setFilter={ (status) => setFilter(status) }/>

          {/* Renderiza a lista de tarefas com base no estado do filtro */}
          {filter && (<Tasks filter={filter}/>)}
          {!filter && (<Tasks filter={filter}/>)}
        </SafeAreaView>
      </>
    )
}

// Estilos para os elementos da tela
const styles = StyleSheet.create({
    // Estilo do container principal
    container: {
      flex: 1,
      backgroundColor: '#888',
      paddingLeft: 14,
      paddingRight: 14,
      paddingTop: 14,
    },

    // Estilo para o título
    tittle: {
      color: "#fff",
      fontSize: 24,
      fontWeight: 'bold'
    },

    // Estilo para o texto descritivo
    text:{
      color: "#e4e4e7",
    },
    
    textTittle:{
      flexDirection: "column",
      alignItems: "center"
    }
});
