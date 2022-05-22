import {
    Image, View, TouchableOpacity, Text
} from 'react-native';
import styles from './styles';

export default function CardPokemon({ pokemon, capturar, detail = false }) {

    return (
        <TouchableOpacity onPress={() => capturar(pokemon)}>
            <View style={styles.areaCard} >
                <View style={styles.areaCardContainer} >
                    < Image
                        style={styles.imgPokemon}
                        source={{
                            uri: pokemon.sprites.front_default,
                        }}
                    />
                    <Text style={styles.areaTextos}>Nome: {pokemon.name.toUpperCase()} </Text>
                </View>
                <View style={styles.areaCardContainer} >
                    {
                        detail &&
                        <Text style={styles.areaTextos} >Área: {pokemon.area}  </Text>
                    }
                </View>
            </View>
        </TouchableOpacity >
    );

};