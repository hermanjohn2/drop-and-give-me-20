import React from 'react';

import Overview from '../../components/Overview';
import Stats from '../../components/Stats';
import Profile from '../../components/Profile';
import Settings from '../../components/Settings';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

import { User, SelectedComponent } from '../../typesConfig/stateTypes';
import { NavigationType } from '../../typesConfig/NavigationTypes';

interface Props {
  component: SelectedComponent;
  user: User;
  navigation: NavigationType;
}

const ComponentSelector: React.FC<Props> = ({ component, user, navigation }) => {
  if (user && component) {
    switch (component) {
      case 'overview': {
        return <Overview user={user} />;
      }
      case 'stats': {
        return <Stats user={user} />;
      }
      case 'profile': {
        return <Profile user={user} navigation={navigation} />;
      }
      case 'settings': {
        return <Settings user={user} />;
      }

      default: {
        return <Error navigation={navigation} />;
      }
    }
  } else {
    return <Loading />;
  }
};

export default ComponentSelector;
