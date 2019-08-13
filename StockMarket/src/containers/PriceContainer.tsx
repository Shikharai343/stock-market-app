import React, {Component, Fragment} from 'react';
import {Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons';

interface IState {
    price: string;
}

class PriceContainer extends Component<any, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            price: '',
        };
    }

    public onChange = (price: any) => {
        this.setState({price});
    }

    public handleClick = () => {
        // Todo
    }

    public render() {
        return (
            <Fragment>
                <View style={styles.sectionStyle}>
                    <Image
                        source={{uri: 'https://image.flaticon.com/icons/png/128/126/126179.png'}}
                        style={{width: 20, height: 20}}
                    />
                    <TextInput
                        style={{flex: 1}}
                        onChangeText={this.onChange}
                        value={this.state.price}
                        keyboardType={'numeric'}
                    />
                </View>
                <Button title={'Save'} onPress={this.handleClick} />
            </Fragment>
        );
    }
}

const styles = StyleSheet.create({
    sectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#000',
        height: 40,
        borderRadius: 5,
        margin: 10,
    },
});

export default PriceContainer;
