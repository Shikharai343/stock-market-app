import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RouteNames} from '../navigation/routes';
import Airtable from 'airtable';
import axios from 'axios';
import {NavigationActions, StackActions} from 'react-navigation';

interface IState {
    dataSource: object;
    stockData: object[];
}

interface IProps {
    navigation: {
        navigate: (route: string, data: object) => void;
        dispatch: any;
    };
}

class TopPannelConatiner extends Component<IProps, IState> {
    public state = {
        dataSource: {},
        stockData: [],
    };

    public componentDidMount() {
        axios.get('https://api.airtable.com/v0/appaf01a2JbZoZNee/stock%20market?api_key=keyiMCbcYlCf5VXsP')
            .then((res) => {
                this.setState({
                    stockData: res.data.records,
                });

            });

        const items = Array.apply(null, Array(30)).map((v, i) => {
            return (i + 1);
        });
        this.setState({
            dataSource: items,
        });
    }

    public handlePress = (item: object, itemPrice?: undefined | string, updateState?: any, deleteData?: any) => {
        this.props.navigation.navigate(RouteNames.stock, {
            item,
            itemPrice,
            updateState,
            deleteData,
        });
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
                extraData={this.state.stockData.length}
            />
            </View>
        );
    }

    private renderListItem = ({item}: {item: any}): React.ReactElement => {
        const itemPrice = this.state.stockData
                                    .find((input: any) => item === new Date(input.fields.Date).getDate());

        const updateState = (text: any) => {
            const base = new Airtable({apiKey: 'keyiMCbcYlCf5VXsP'}).base('appaf01a2JbZoZNee');

            if(itemPrice !== undefined){
                base('stock market').update(itemPrice.id, {
                    "Close": text
                }, function(err: any, record: any) {
                    if (err) {
                        console.error(err);
                        return;
                    }
                });
            }else {
                base('stock market').create({
                    "Date": `2019-06-${item}`,
                    "Close": text,
                }, function(err: any, record: any) {
                    if (err) {
                        console.error(err);
                        return;
                    }
                });
            }

            const resetAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'Home' })],
            });
            this.props.navigation.dispatch(resetAction);
        };

        const deleteData = () => {
            var base = new Airtable({apiKey: 'keyiMCbcYlCf5VXsP'}).base('appaf01a2JbZoZNee');

            if(itemPrice !== undefined) {
                base('stock market').destroy(itemPrice.id, function(err: any, deletedRecord: any) {
                    if (err) {
                        console.error(err);
                        return;
                    }
                });
            }

            const resetAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'Home' })],
            });
            this.props.navigation.dispatch(resetAction);
        };

        const handleItemPress = () => this.handlePress(
            item,
            itemPrice && itemPrice.fields.Close,
            updateState, deleteData
        );

        return (
            <TouchableOpacity style={styles.dateContainer} onPress={handleItemPress}>
                <View style={styles.box}>
                    <Text style={styles.itemStyle}>
                        {item}
                    </Text>
                    {
                        itemPrice &&
                        <Text>
                            ${itemPrice.fields.Close}
                        </Text>
                    }
                </View>
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
        marginBottom: 5,
        backgroundColor: '#5b73ba'
    },
    textStyle: {
        fontFamily: 'Georgia-Bold',
        color: 'white',
        fontSize: 25,
        letterSpacing: 0.13,
    },
    box: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d2d4d2',
        height: 70,
        margin: 1,
    },
    itemStyle: {
        fontSize: 20,
    },
});

export default TopPannelConatiner;
