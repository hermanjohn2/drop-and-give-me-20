import React from 'react';
import { View, Text } from 'react-native';

import universalStyles from '../../universalStyles';

interface Props {
  user: {
    name: string;
  };
}

const Profile: React.FC<Props> = ({ user }) => {
  return (
    <View>
      <Text style={universalStyles.whiteText}>{`Profile for, ${user.name}`}</Text>
    </View>
  );
};

export default Profile;
