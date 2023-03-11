import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react'
import { StyleSheet,Button, Text, View } from 'react-native';

export default function App() {
  const [clicks,setClicks] = useState(0)

  function addOne(){
    setClicks(clicks + 1)
  }
  const removeOne =()=> setClicks(clicks - 1);
  

  return (
    <>
    <View style={styles.container}>
      <Text style={{color: 'purple'}}>Times clicked: {clicks}</Text>
      <Button
          title='Add'
          style={styles.button}
          onPress={addOne}
        />
      <Button
        title='Remove'
        onPress={removeOne}
      />  
    </View>
      
    

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    flex: 1,
    color: 'red',
  }
});
