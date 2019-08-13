import React, { Component } from 'react';
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RouteNames} from '../navigation/routes';

interface IState {
    dataSource: {};
}

interface IProps {
    navigation: {
        navigate: (route: string) => void;
    };
}

class TopPannelConatiner extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            dataSource: {},
        };
    }
    public componentDidMount() {
        const items = Array.apply(null, Array(30)).map((v, i) => {
            return { id: i, src: 'http://placehold.it/50x50?text=' + (i + 1) };
        });
        this.setState({
            dataSource: items,
        });
    }

    public handlePress = () => {
        this.props.navigation.navigate(RouteNames.stock);
    };

    public render() {
        return (
            <View style={styles.container}>
            <FlatList
                data={this.state.dataSource}
                renderItem={this.renderListItem}
                ListHeaderComponent={this.renderHeader}
                numColumns={3}
                keyExtractor={this.keyExtractor}
            />
            </View>
        );
    }

    private renderListItem = ({item}: {item: any}): React.ReactElement => {
        return (
            <TouchableOpacity style={styles.dateContainer} onPress={this.handlePress}>
                <Image style={styles.imageThumbnail} source={{ uri: item.src }} />
            </TouchableOpacity>
        );
    }

    private renderHeader = () => {
        return (
            <View style={styles.header}>
                <Text style={styles.textStyle}>
                    JUNE 2019
                </Text>
            </View>
        );
    }

    private keyExtractor = (item: any, index: number) => index.toString();
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
    },
    imageThumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
    },
    dateContainer: {
        flex: 1,
        flexDirection: 'column',
        margin: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
    },
    textStyle: {
        fontFamily: 'Georgia-Bold',
        fontSize: 25,
        letterSpacing: 0.13,
    },
});

export default TopPannelConatiner;
