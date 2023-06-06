import React from 'react';
import { View, Text } from 'react-native';

import universalStyles from '../../universalStyles';

interface Props {
  user: {
    name: string;
  };
}

const Stats: React.FC<Props> = ({ user }) => {
  return (
    <View>
      <Text style={universalStyles.whiteText}>{`Stats for, ${user.name}`}</Text>
    </View>
  );
};

export default Stats;
