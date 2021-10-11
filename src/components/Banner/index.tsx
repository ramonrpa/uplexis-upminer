import Button from '../Button';
import { Banner as IBanner } from '~/store/reducers/banners.reducer';
import { Container, Description, Logo, Price, Title } from './styles';
import { useHistory } from 'react-router';

const Banner: React.FC<IBanner> = ({
  background,
  logo,
  nameColor,
  descriptionColor,
  name,
  description,
  price,
}) => {
  const history = useHistory();

  return (
    <Container image={background}>
      <span>
        <Logo src={logo} />
        <Title color={nameColor}>{name}</Title>
      </span>
      <Description color={descriptionColor}>{description}</Description>
      <span>
        <Price color={nameColor}>
          <small>R$</small>
          {price.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </Price>
        <Button
          borderRadius="0.3rem"
          onClick={() =>
            history.push({
              pathname: 'appInfo',
              state: { name, description, price },
            })
          }
        >
          Saiba mais
        </Button>
      </span>
    </Container>
  );
};

export default Banner;
