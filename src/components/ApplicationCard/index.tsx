import React from 'react';
import { useHistory } from 'react-router';
import { Application } from '~/store/reducers/applications.reducer';
import Button from '../Button';
import { Body, Container, Description, Icon, Name } from './style';

const ApplicationCard: React.FC<Application> = ({
  id,
  icon,
  name,
  description,
  price,
}) => {
  const history = useHistory();

  return (
    <Container>
      <Body>
        <Icon className={icon} />
        <Name>{name}</Name>
        {description && <Description>{description}</Description>}
      </Body>
      <section>
        <Button
          onClick={() =>
            history.push({
              pathname: 'appInfo',
              state: { id, icon, name, description, price },
            })
          }
          fontWeight="bold"
          width="100%"
          borderRadius="0 0 0.2rem 0.2rem"
        >
          <span>
            {price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
          <span>Saiba Mais</span>
        </Button>
      </section>
    </Container>
  );
};

export default ApplicationCard;
