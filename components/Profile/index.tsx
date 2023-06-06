import React from 'react';
import { View, Text, Button } from 'react-native';

import handleClearUser from '../../utils/handleClearUser';
import universalStyles from '../../universalStyles';
import { NavigationType } from '../../typesConfig/NavigationTypes';

interface Props {
  user: {
    name: string;
  };
  navigation: NavigationType;
}

const Profile: React.FC<Props> = ({ user, navigation }) => {
  return (
    <View>
      <Text style={universalStyles.whiteText}>{`Profile for, ${user.name}`}</Text>
      <Button title='Delete Account' onPress={() => handleClearUser(navigation)} />
    </View>
  );
};

export default Profile;
