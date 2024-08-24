
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from "react-native"
import { FormTask } from "../../Components/Form";
import { Tasks } from "../../Components/Tasks";

export function Home(){
    return(
      <>
        <StatusBar backgroundColor={"#0f172a"} barStyle={"light-content"}/>

        <SafeAreaView style={styles.container}>
          <Text style={styles.tittle}>NOTAS</Text>
          <Text style={styles.text}>Crie notas</Text>

          <FormTask/>

          <Tasks/>
        </SafeAreaView>
      </>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#888',
      paddingLeft: 14,
      paddingRight: 14,
      paddingTop: 14,
    },

    tittle: {
      color: "#fff",
      fontSize: 24,
      fontWeight: 'bold'
    },

    text:{
      color: "#e4e4e7",

    }
  });