import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import CircleButton from '../elements/CircleButton';
import firebase from 'firebase';
import 'firebase/firestore';

class MemoEditScreen extends React.Component {
    state = {
        body: '',
        key: '',
    }

    componentWillMount() {
        console.log('MemoEditScreen', this.props.navigation.state.params);
        const { params } = this.props.navigation.state;
        // this.setState({ body: params.memo.body, key: params.memo.key });
        this.setState({ body: params.body, key: params.key });
    }

    handlePress() {
        const { currentUser } = firebase.auth();
        const db = firebase.firestore();
        const newDate = firebase.firestore.Timestamp.now();
        console.log(newDate, '@@@@');
        db.collection(`users/${currentUser.uid}/memos`).doc(this.state.key)
            .update({
                body: this.state.body,
                createdOn: newDate,
            })
            .then(() => {
                console.log('MemoEdit succeeded');
                const { navigation } = this.props;
                navigation.state.params.returnMemo({
                    body: this.state.body,
                    key: this.state.key,
                    createdOn: newDate,
                });
                navigation.goBack();
            })
            .catch((error) => {
                console.log('MemoEdit error', error);
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.memoEditInput}
                    multiline
                    value={this.state.body}
                    onChangeText={(text) => {
                        this.setState({ body: text });
                    }}
                />
                <CircleButton onPress={this.handlePress.bind(this)}>
                    {'\uf00c'}
                </CircleButton>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    memoEditInput: {
        backgroundColor: '#fff',
        flex: 1,
        paddingTop: 32,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 16,
        fontSize: 16,
    }

});

export default MemoEditScreen;