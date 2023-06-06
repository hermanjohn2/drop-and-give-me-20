import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import styles from './styles';

type Props = {
  size?: 'small' | 'large';
  color?: string;
};

const Loading: React.FC<Props> = ({ size = 'large', color = '#000000' }) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

export default Loading;
