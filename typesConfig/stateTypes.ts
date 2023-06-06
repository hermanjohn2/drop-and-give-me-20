export type User = {
  age: number;
  height: string;
  name: string;
  weight: number;
} | null;

export type SelectedComponent = 'overview' | 'stats' | 'profile' | 'settings';

export type ShowDropdown = boolean;
