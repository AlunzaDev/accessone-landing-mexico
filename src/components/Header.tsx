import { Header as SharedHeader } from '@alunzadev/accessone-ui';
import { brand, navigation } from '../config/brand';

interface HeaderProps { revealAfterScene?: boolean }

export default function Header({ revealAfterScene = false }: HeaderProps) {
  return <SharedHeader brand={brand} links={navigation} revealAfterScene={revealAfterScene} />;
}
