import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RouteNames} from '../navigation/routes';

interface IProps {
    navigation: any;
}

export default class HomeScreen extends Component<IProps, any> {

    protected static navigationOptions = {
        header: null,
    };

    public handlePress = () => {
        this.props.navigation.navigate(RouteNames.stock);
    }

    public render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.handlePress}>
                    <Text>Home Screen</Text>
                </TouchableOpacity>
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
