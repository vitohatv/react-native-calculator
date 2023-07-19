import { Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from "react-native";
import styles from "./Main.css";
import { useState } from "react";

const Main = () => {
    const [result, setResult] = useState("");

    const handleClick = (value) => {
        if (value == 'AC') {
            setResult('')
        } else if (value == '<') {
            setResult(result.slice(0, -1));
        } else if (value == '=' && value !== '') {
            setResult(eval(result));
        } else if (result.length > 20) {
            alert('To long number!');
            setResult(result.substring(0,20));
        } else if (value === '%') {
            setResult(eval(result / 100).toString())
        } else {
            setResult(result + value);
        }
    }

    const CalcBtn = ({num}) => (
        <View>
            <TouchableOpacity onPress={() => handleClick(num)}>
                <Text style={styles.calcButton}>{num}</Text>
            </TouchableOpacity>
        </View>
    )
        

    return <>
        <StatusBar style="auto" backgroundColor='#265588' />
        <View style={styles.container}> 
            <Text style={styles.valueCounter}>{result}</Text> 
        </View>

        <View style={styles.calcButtonsContainer}>
            <CalcBtn num='AC'/>
            <CalcBtn num='%'/>
            <CalcBtn num='<'/>
            <CalcBtn num='/'/>
            <CalcBtn num='7'/>
            <CalcBtn num='8'/>
            <CalcBtn num='9'/>
            <CalcBtn num='*'/>
            <CalcBtn num='4'/>
            <CalcBtn num='5'/>
            <CalcBtn num='6'/>
            <CalcBtn num='-'/>
            <CalcBtn num='1'/>
            <CalcBtn num='2'/>
            <CalcBtn num='3'/>
            <CalcBtn num='+'/>
            <CalcBtn num='0'/>
            <CalcBtn num='00'/>
            <CalcBtn num='.'/>
            <CalcBtn num='='/>
        </View>
    </>
}
export default Main;