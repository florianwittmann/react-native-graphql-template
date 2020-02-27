import React from 'react';
import {Text, View} from 'react-native';
import {Button} from '../../components';
import screenNames from '../../navigation/screenNames';

const HomeScreen = ({navigation}) => (
  <View testID="home_screen">
    <Text>Home</Text>
    <Button
      testID="show_detail_button"
      onPress={() => {
        navigation.navigate(screenNames.DETAILPAGE);
      }}
      title="Goto Detail"
    />
  </View>
);

export default HomeScreen;
