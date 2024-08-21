
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from "react-native"

export function Home(){
    return(
      <>
        <StatusBar backgroundColor={"#0f172a"} barStyle={"light-content"}/>

        <SafeAreaView style={styles.container}>
          <Text>oi!</Text>
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
  });