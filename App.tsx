import React, { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ClaimHome from './src/ClaimHome';
import VerifyAddressScreen from './src/VerifyAddressScreen';
import ChatScreen from './src/ChatScreen';
import HomeInformation from './src/HomeInformation';


const Stack = createStackNavigator();

function App() {


  return (
    <>
      
        
            <SafeAreaProvider>
              <NavigationContainer>
              <Stack.Navigator >
              <Stack.Screen name="ClaimHome" component={ClaimHome}  options={{ 
    headerShown: true, // Ensure the header is shown
    headerTitleAlign: 'center' // Center the title
  }}  />
  <Stack.Screen name="Home Information" component={HomeInformation} options={{ 
    headerShown: true, // Ensure the header is shown
    headerTitleAlign: 'center' // Center the title
  }}/>
  <Stack.Screen name="ChatScreen" component={ChatScreen} options={{ 
    headerShown: true, // Ensure the header is shown
    headerTitleAlign: 'center' // Center the title
  }} />
              <Stack.Screen name="VerifyAddressScreen" component={VerifyAddressScreen} options={{ headerShown: false }} />
              </Stack.Navigator>
              </NavigationContainer>
            </SafeAreaProvider>
            
        
      
    </>
  );
}

export default App;
