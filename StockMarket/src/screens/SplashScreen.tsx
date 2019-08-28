import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {RouteNames} from '../navigation/routes';

interface IProps {
    navigation: any;
}

export default class SplashScreen extends React.Component<IProps, any> {

    public componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate(RouteNames.app);
        }, 2000);
    }


    public render() {
        return (
            <View style={styles.container}>
                <Image source={require('../assets/pic2.jpg')}/>
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
