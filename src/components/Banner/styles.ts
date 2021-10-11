import { lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;

  border-bottom: 5px solid ${(props) => props.theme.colors.primary};

  display: flex;
  flex-direction: column;

  background-image: url(${(props: { image: string }) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  padding: 2.5rem 5rem;

  gap: 1.5rem;

  @media (max-width: 480px) {
    padding: 2.5rem 2.5rem;
  }

  span {
    display: flex;
    align-items: center;
    gap: 1rem;

    button {
      @media (max-width: 480px) {
        padding: 0.5rem;
      }
    }
  }
`;

export const Logo = styled.img`
  width: 8rem;
  height: auto;

  @media (max-width: 480px) {
    width: 5rem;
  }
`;

export const Title = styled.h1`
  color: ${(props: { color: string }) => props.color};
  border-left: 1px solid
    ${(props: { color: string }) => lighten(0.5, props.color)};
  padding-left: 1rem;
  font-size: 2rem;

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

export const Description = styled.p`
  color: ${(props: { color: string }) => props.color};
  max-width: 32rem;
  font-size: 0.98rem;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const Price = styled.p`
  color: ${(props: { color: string }) => props.color};

  font-size: 2rem;

  small {
    margin-right: 0.3rem;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;
