import React from 'react';
import { View, Text } from 'react-native';

import universalStyles from '../../universalStyles';

interface Props {
  user: {
    name: string;
  };
}

const Overview: React.FC<Props> = ({ user }) => {
  return (
    <View>
      <Text style={universalStyles.whiteText}>{`Welcome, ${user.name}`}</Text>
    </View>
  );
};

// const styles = StyleSheet.create({
//   text: {
//     color: 'whitesmoke'
//   }
// });

export default Overview;
