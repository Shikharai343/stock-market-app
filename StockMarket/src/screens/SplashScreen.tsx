import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {RouteNames} from '../navigation/routes';

interface IProps {
    navigation: any;
}

export default class SplashScreen extends React.Component<IProps, any> {

    public componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate(RouteNames.app);
        }, 1000);
    }


    public render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Stock Market</Text>
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
    text: {
        color: 'blue',
        fontSize: 25,
    }
});
