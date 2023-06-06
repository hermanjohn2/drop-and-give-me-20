import { SelectedComponent } from '../typesConfig/stateTypes';

export type ComponentSelectionOptions = {
  iconName: 'person-outline' | 'stats-chart-outline' | 'home-outline' | 'settings-outline';
  selection: SelectedComponent;
  text: string;
};

export const componentSelectionOptions: ComponentSelectionOptions[] = [
  {
    iconName: 'settings-outline',
    selection: 'settings',
    text: 'Edit Settings'
  },
  {
    iconName: 'person-outline',
    selection: 'profile',
    text: 'View Profile'
  },
  {
    iconName: 'stats-chart-outline',
    selection: 'stats',
    text: 'Stats'
  },
  {
    iconName: 'home-outline',
    selection: 'overview',
    text: 'Home'
  }
];
