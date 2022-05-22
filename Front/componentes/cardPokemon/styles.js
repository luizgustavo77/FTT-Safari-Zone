import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    areaCard: {
        flexDirection: 'row',
        height: 125,
        width: '95%',
        alignItems: 'center',
        justifyContent: 'space-around',
        margin: 10,
        paddingHorizontal: 8,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    imgPokemon: {
        width: '40%',
        height: 100,
    }
});


export default styles;