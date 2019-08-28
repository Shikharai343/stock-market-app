import React, {Component, Fragment} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

interface IProps {
    navigation: {
        getParam: (query: string) => any;
    };
}

class PriceContainer extends Component <IProps> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            text: this.props.navigation.getParam('itemPrice'),
        };
    }

    render() {
        return (
            <Fragment>
                <TextInput
                    style={styles.inputStyle}
                    onChangeText={(text)=> this.setState({text})}
                    value={this.state.text}
                    keyboardType={'numeric'}
                />
                <View style={styles.buttons}>
                    <Button
                        title='Save'
                        onPress={() => this.props.navigation.getParam('updateState')(this.state.text)}
                    />
                    <Button
                        title='Delete'
                        color='#b8092c'
                        onPress={this.props.navigation.getParam('deleteData')} />
                </View>
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
        textAlign: 'center'
    },
    buttons: {
        flexDirection: 'row',
    }
});

export default PriceContainer;
