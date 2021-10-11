import { Container, Icon, Name } from './styles';

interface Props {
  active: boolean;
  name: string;
  icon: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const CategoryWidget: React.FC<Props> = ({ active, name, icon, onClick }) => (
  <Container active={active} onClick={onClick}>
    <Icon className={icon} />
    <Name>{name}</Name>
  </Container>
);

export default CategoryWidget;
