import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: StatusBar.currentHeight,
    },
    areaScroolView: {
        width: '95%',
    },
    waiting: {
        marginTop: 100,
    },
    imgPokemon: {
        width: '50%',
        height: 50,
    },
    containerFooter: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        height: 60,
        backgroundColor: '#6b798f',
        alignItems: 'center',
        borderBottomColor: '#000',
    },
    textoBotao: {
        color: '#FFF',
        fontSize: 20,
    },
    botao: {
        width: '40%',
        height: 50,
        borderColor: "#000",
        borderWidth: 2,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#040d59',
    },
    containerHeader: {
        width: '100%',
        height: 95,
        backgroundColor: '#6b798f',
        alignItems: 'center',
        borderBottomColor: '#000',
        borderBottomWidth: 5,
        marginBottom: 15,
    },
    cirtuloBotao: {
        width: 75,
        textAlign: 'center',
        height: 75,
        backgroundColor: '#39404c',
        borderRadius: 50,
        paddingLeft: 2,
        fontSize: 44
    },
    botaoHeader: {
        marginTop: 10,
    }
});
export default styles;