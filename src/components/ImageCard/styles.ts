import styled from 'styled-components';

export const Container = styled.div`
  margin: 1rem;
  padding: 1rem;
  box-shadow: 0 0 25px 0 ${(props) => props.theme.colors.light};
  border-radius: 0.5rem;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const Description = styled.p`
  @media (max-width: 1024px) {
    padding: 1rem;
    font-size: 0.8rem;
  }
  font-size: 1rem;
  padding: 2rem 3rem;
  color: ${(props) => props.theme.colors.primary};
`;
