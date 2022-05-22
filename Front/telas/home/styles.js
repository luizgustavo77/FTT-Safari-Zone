import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: StatusBar.currentHeight,
        backgroundColor: '#ffcb05',
    },
    texto: {
        fontSize: 30,
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: "bold"
    },
    containerHeader: {
        width: '100%',
        height: 95,
        backgroundColor: '#ffcb05',
        alignItems: 'center',
        borderBottomColor: '#000',
        borderBottomWidth: 5,
        marginBottom: 15,
        marginTop: 80,
    },
    touch: {
        height: "100%"
    }
});
export default styles;