import React from 'react';
import { Text, View, FlatList, Image, TouchableWithoutFeedback } from 'react-native';

export class Video extends React.Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = { listLoaded: false};
    };

    componentDidMount() {
        return fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=pluralsight&type=video&key=AIzaSyArKk_8pR9Cmsh8ZghmihNSH0giZdxXC8U`)
            .then(response => response.json())
            .then(resJson => {
                this.setState({
                    listLoaded: true,
                    videoList: Array.from(resJson.items)
                })
            })
            .catch(err => console.error(err));
    }

    render() {
        const { navigate } = this.props.navigation;
        return(
            <View>
                { this.state.listLoaded && (
                    <View style={{ paddingTop: 30 }}>
                        <FlatList 
                            data={ this.state.videoList}
                            renderItem={({item}) =>
                                <TubeItem
                                    navigate={navigate}
                                    id={item.id.videoId}
                                    title={item.snippet.title}
                                    imageSrc={item.snippet.thumbnails.high.url}
                                />                            
                            }
                        />
                    </View>
                )}

                { !this.state.listLoaded && (
                    <View style={{ paddingTop: 30}}>
                        <Text>LOADING</Text>
                    </View>
                )}

            </View>
        )
    }
}

export class TubeItem extends React.Component {
    onPress = () => {
        this.props.navigate('VideoDetailRT', {ytubeId: this.props.id} );
    };

    render() {
        return (
            <TouchableWithoutFeedback onPress={this.onPress}>
                <View style={{ padding: 20, alignItems: 'center'}}>
                    <Image 
                        style={{width: '100%', height: 200}}
                        source={{ uri: this.props.imageSrc}}
                    />
                    <Text>
                        {this.props.title}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}