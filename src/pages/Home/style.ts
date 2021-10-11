import styled from 'styled-components';
import { Container as ContainerCard } from '~/components/ApplicationCard/style';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  gap: 2rem;
`;

export const CategoryList = styled.section`
  display: flex;
  overflow-x: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ApplicationList = styled.section`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  flex: 1;
  align-content: flex-start;
  margin-bottom: 2rem;
  padding: 2rem;

  ${ContainerCard} {
    width: calc(25% - 2rem);
    flex: none;

    @media (max-width: 1024px) {
      width: calc(33.33% - 2rem);
    }

    @media (max-width: 768px) {
      width: calc(50% - 2rem);
    }

    @media (max-width: 480px) {
      width: 100%;
    }
  }
`;
