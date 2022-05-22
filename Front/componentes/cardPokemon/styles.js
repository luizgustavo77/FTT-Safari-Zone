import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    areaCard: {
        flexDirection: 'row',
        height: 120,
        width: '95%',
        alignItems: 'center',
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
    areaCardContainer: {
        flexDirection: 'row',
        height: 125,
        width: '80%',
        alignItems: 'center',
    },
    imgPokemon: {
        width: '40%',
        height: 100,
    },
    areaTextos: {
        width: '100%',
    },
});


export default styles;