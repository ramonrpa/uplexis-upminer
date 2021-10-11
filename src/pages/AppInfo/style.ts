import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem 5.5rem;

  @media (max-width: 480px) {
    padding: 2rem 2rem;
  }
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.colors.primary};
  font-size: 1.2rem;
  font-weight: 500;

  i {
    margin-right: 0.6rem;
  }

  cursor: pointer;

  margin-bottom: 3rem;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;

  padding: 3rem 1rem;

  gap: 2rem;

  span {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

export const Description = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.secondary};
`;

export const Price = styled.p`
  color: ${(props) => props.theme.colors.dark};

  font-size: 1.8rem;

  small {
    margin-right: 0.3rem;
    font-size: 1rem;
  }
`;

export const CardList = styled.div`
  display: flex;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;
