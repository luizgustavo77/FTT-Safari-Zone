import {
    Image, View, TouchableOpacity, Text
} from 'react-native';
import styles from './styles';

export default function CardPokemon({ pokemon, capturar }) {

    return (
        <TouchableOpacity onPress={() => capturar(pokemon)}>
            <View style={styles.areaCard} >
                < Image
                    style={styles.imgPokemon}
                    source={{
                        uri: pokemon.sprites.front_default,
                    }}
                />
                <Text>{pokemon.name}</Text>
            </View>
        </TouchableOpacity>
    );

};