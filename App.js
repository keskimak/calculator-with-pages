
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from'@react-navigation/native';
import { createBottomTabNavigator } from'@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from'@react-navigation/native-stack';
import Ionicons from '@expo/vector-icons/Ionicons';
import Calculator from './Calculator';
import History from './History';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Calculator" component={Calculator}  />

        <Stack.Screen name="History" component={History} />
      </Stack.Navigator>


    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
