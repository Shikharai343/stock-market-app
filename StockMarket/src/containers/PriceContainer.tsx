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
                <TextInput
                    style={styles.inputStyle}
                    onChangeText={this.onChange}
                    value={this.state.price}
                    keyboardType={'numeric'}
                />
                <Button title={'Save'} onPress={this.handleClick} />
            </Fragment>
        );
    }
}

const styles = StyleSheet.create({
  inputStyle: {
      height: 30,
      width: 150,
      borderColor: 'black',
      borderWidth: 2,
      borderRadius: 5,
      marginTop: '5%',
      marginBottom: '5%',
  },
});

export default PriceContainer;
