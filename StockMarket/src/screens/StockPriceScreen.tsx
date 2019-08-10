import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface IProps {
    navigation: any;
}

export default class StockPriceScreen extends Component<IProps, any> {

    public render() {
        return (
            <View style={styles.container}>
                <Text>Add Stocks</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
