import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center'
      },
      calcButtonsContainer: {
        display: 'flex',
        flex: 2,
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        backgroundColor: '#000'
      },
      calcButton: {
        backgroundColor: '#313131',
        color: 'white',
        width: 76,
        height: 76,
        margin: 7,
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 100,
        fontSize: 38,
        textAlignVertical: "center",
        borderColor: 'gray',
        borderWidth: 1
      },
      valueCounter: {
        fontSize: 32,
        color: 'white',
        padding: 10
      }
});

export default styles;