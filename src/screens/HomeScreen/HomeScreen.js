import React from 'react';
import {Text, View} from 'react-native';
import {Button} from '../../components';
import screenNames from '../../navigation/screenNames';

const HomeScreen = ({navigation}) => (
  <View>
    <Text>Home</Text>
    <Button
      onPress={() => {
        navigation.navigate(screenNames.DETAILPAGE);
      }}
      title="Goto Detail"
    />
  </View>
);

export default HomeScreen;
