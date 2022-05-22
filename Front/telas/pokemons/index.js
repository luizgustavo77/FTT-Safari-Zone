import { useEffect, useState } from 'react';
import {
    Alert, ScrollView, Text, TouchableOpacity, View
} from 'react-native';
import CardPokemon from '../../componentes/cardPokemon/index';
import api from '../../service/api';
import pokeApi from '../../service/pokeApi';
import styles from './styles';

export default function PokemonList({ navigation }) {

    const [lista, setLista] = useState([]);
    const [load, setLoad] = useState(false);

    useEffect(
        () => {
            carregaLista();
        }, []);

    async function carregaLista() {
        try {
            setLoad(true);

            if (lista) {
                let index = lista.length;
                for (let i = 0; i < index; i++) {
                    lista.pop(i);
                }
            }

            let pokemonList = await api.get('/pokemonControll/pokemon');

            for (let i = 0; i < pokemonList.data.length; i++) {
                let pokemon = await pokeApi.get('/' + pokemonList.data[i].externalNumber);
                pokemon.data._id = pokemonList.data[i]._id;
                pokemon.data.area = pokemonList.data[i].area;
                pokemon.data.hora = pokemonList.data[i].hora;
                lista.push(pokemon.data);
            }
            setLoad(false);
        } catch (e) {
            Alert.alert(e.toString());
        }
    }

    function capturar(pokemon) {
        Alert.alert('Atenção', 'Deseja libertar o ' + pokemon.name + ' ?',
            [
                {
                    text: 'Sim',
                    onPress: () => deletePokemon(pokemon._id),
                },
                {
                    text: 'Não',
                    style: 'cancel',
                }
            ]);
    }

    async function deletePokemon(_id) {
        {
            console.log('code ' + _id)
            await api.delete('/pokemonControll/pokemon/' + _id)
                .then(() => carregaLista())
                .catch(error => console.log(error));
        }
    }

    function safari() {
        navigation.navigate('Safari');
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                {
                    <TouchableOpacity style={styles.botaoHeader} onPress={() => safari(true)}>
                        <Text style={styles.cirtuloBotao}>
                            🏕️
                        </Text>
                    </TouchableOpacity>
                }
            </View>

            <ScrollView style={styles.areaScroolView}>
                {
                    lista.map((pokemon, index) => (
                        <CardPokemon key={index.toString()} pokemon={pokemon} capturar={capturar} detail={true}></CardPokemon>
                    )
                    )
                }
            </ScrollView >
        </View >
    );
}