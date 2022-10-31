import React  from 'react';
import {Platform, Pressable} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home,Result,CaptureImage} from './screens';
import { SVG } from './constants';
import { RootSiblingParent } from 'react-native-root-siblings';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <RootSiblingParent>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{
        headerTitle: "AI Text Converter",
        headerStyle: { height:Platform.OS=='android'? 80 : 60}, 
        headerTitleAlign: 'center',
        headerShadowVisible: false,
      }}>
        <Stack.Screen name="Home" component={Home} initialParams={{ CapturedImage: '' }} options={{
          headerLeft: () => {
            return (
              <Pressable onPress={()=>console.log('menu Opening')}>
                <SVG.MenuIcon/>
            </Pressable>
          )
        }}}/>
        <Stack.Screen name="Result" component={Result} initialParams={{imageUri:''}} options={{headerShown:true,headerTitleAlign:'left',headerBackButtonMenuEnabled:true}}/>
        <Stack.Screen name="CaptureImage" component={CaptureImage} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  </RootSiblingParent>
  );
}

export default App;