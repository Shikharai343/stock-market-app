import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PriceContainer from '../containers/PriceContainer';

interface IProps {
    navigation: any;
}

export default class StockPriceScreen extends Component<IProps, any> {

    protected static navigationOptions = {
        title: 'Add Stock Price',
    };

    public render() {
        return (
            <View style={styles.container}>
                <PriceContainer />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
});
