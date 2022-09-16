import React from 'react';
import { View, Text, Button, StyleSheet, TextInput, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import History from './History';

export default function Calculator({ navigation }) {

    const [text, changeText] = React.useState('');
    const [text2, changeText2] = React.useState('');
    const [result, setResult] = React.useState(null);
    const [history, setHistory] = React.useState([]);

    const increment = () => {
        setResult(null);
        let sum = Number(text) + Number(text2);

        setResult(sum);
        concateAll(`${text} + ${text2} = ${sum} `);
        setHistory([...history, { key: `${text} + ${text2} = ${sum} ` }]);
        changeText('');
        changeText2('');


    }

    const decrement = () => {
        sum = Number(text) - Number(text2);
        setResult(sum);
        concateAll(`${text} - ${text2} = ${sum} `);
        setHistory([...history, { key: `${text} - ${text2} = ${sum} ` }]);
        changeText('');
        changeText2('');

    }

    return (


        <>
            <View style={styles.maincontainer}>
                <View style={styles.container}>
                    <Text style={{marginBottom:20, fontWeight:'bold'}}>Result: {result}</Text>
                    <TextInput style={styles.input} onChangeText={text => changeText(text)} value={text} keyboardType="number-pad"></TextInput>
                    <TextInput style={styles.input} onChangeText={text => changeText2(text)} value={text2} keyboardType="number-pad" ></TextInput>
                </View>

                <View style={styles.buttonContainer}>
                    <View style={{ marginHorizontal: 10, height: 40 }}>
                        <Button title="+" onPress={increment}></Button>
                    </View>
                    <View style={{ marginHorizontal: 10, height: 40 }}>
                        <Button title="-" onPress={decrement}></Button>

                    </View>
                    <View style={{ marginHorizontal: 10, height: 40 }}>

                        <Button
                            title="History"
                            onPress={() => navigation.navigate('History', {

                                history: history
                            })}
                        />
                    </View>
                </View>
                <View style={styles.listContainer}>
                    
                </View>
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    container: {
        flex: 0.8,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 5

    },
    input: {
        width: 200,
        borderColor: 'black',
        borderWidth: 1,

    },
    buttonContainer: {
        marginTop: 20,
        flexDirection: "row",
        backgroundColor: '#fff',
        justifyContent: "space-between",
        alignContent: 'center',
        alignItems: 'center'
    },
    listContainer: {
        justifyContent: 'flex-start',
        flex: 0.5,
        marginTop: 20
    },
    boldText: {
        fontWeight: 'bold'
    }
});