import { useEffect, useState } from 'react';
import { SafeAreaView, Text } from 'react-native';

import { initializedb } from './src/services/db';
import { Home } from './src/screens/Home';

export default function App() {
  const [dbInitialized, setDbInitialized] = useState(false);


  useEffect(()=>{
    const setup = async () => {
      await initializedb();
      setDbInitialized(true)
    }

    setup()
  }, [])


  if(!dbInitialized){
    return(
      <SafeAreaView>
        <Text>carregando...</Text>
      </SafeAreaView>
    )
  }

  return (
    <Home/>
  );
}

