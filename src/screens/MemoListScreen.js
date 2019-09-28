import React from 'react';
import { StyleSheet, View } from 'react-native';
import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';
import firebase from 'firebase';
import 'firebase/firestore';

class MemoListScreen extends React.Component {
    state = {
        memoList: [],
    }
    componentWillMount() {
        const { currentUser } = firebase.auth();
        firebase.firestore().collection(`users/${currentUser.uid}/memos`)
            .onSnapshot((snapshot) => {
                const tempList = [];
                snapshot.forEach((doc) => {
                    tempList.push({ ...doc.data(), key: doc.id } ); // ... concatenate
                });
                this.setState({ memoList: tempList });  
            });
            /*
            .get()
            .then((querySnapshot) => {
                const tempList = [];
                querySnapshot.forEach((doc) => {
                    tempList.push({ ...doc.data(), key: doc.id } ); // ... concatenate
                });
                this.setState({ memoList: tempList });
            })
            .catch((error) => {
                console.log(error);
            });
            */
    }

    handlePress() {
        const { params } = this.props.navigation.state;
        console.log('params of MemoListScreen');
        console.log(params);
        this.props.navigation.navigate('MemoCreate');
    }

    render() {
        return (
            <View style={styles.container}>
                <MemoList memoList={this.state.memoList} navigation={this.props.navigation} />
                <CircleButton
                    onPress={this.handlePress.bind(this)}>
                    {'\uf067'}
                </CircleButton>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    }
});

export default MemoListScreen;