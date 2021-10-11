import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import Button from '~/components/Button';
import Carousel from '~/components/Carousel';
import ImageCard from '~/components/ImageCard';
import { Application } from '~/store/reducers/applications.reducer';
import { Body, CardList, Container, Description, Price, Title } from './style';
import TimeLineImage from '~/assets/images/timeline.png';

const AppInfo = () => {
  const { state } = useLocation<Application>();
  const history = useHistory();

  useEffect(() => {
    if (!state) history.push('/');
  }, [history, state]);

  return state ? (
    <Container>
      <Title onClick={() => history.push('/')}>
        <i className="fas fa-chevron-left"></i>
        {state.name}
      </Title>
      <Carousel
        withArrow={true}
        values={[
          <CardList key="0">
            <ImageCard
              image={TimeLineImage}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <ImageCard
              image={TimeLineImage}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </CardList>,
          <CardList key="0">
            <ImageCard
              image={TimeLineImage}
              description="Lorem2 ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <ImageCard
              image={TimeLineImage}
              description="Lorem2 ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </CardList>,
        ]}
      />
      <Body>
        <Description>
          {state.description ?? 'Sem nenhuma descrição fornecida.'}
        </Description>
        <span>
          <Price>
            <small>R$</small>
            {state.price.toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </Price>
          <Button borderRadius="0.3rem" padding="0.5rem 1.5rem">
            Habilitar
          </Button>
        </span>
      </Body>
    </Container>
  ) : null;
};

export default AppInfo;
