import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
`;

export const Icon = styled.i`
  font-size: 1.8rem;
  color: ${(props) => props.theme.colors.primary};
`;

export const Name = styled.h3`
  text-align: center;
  font-size: 1rem;
  color: ${(props) => props.theme.colors.secondary};
`;

export const Description = styled.p`
  text-align: center;
  font-size: 0.8rem;
  color: ${(props) => props.theme.colors.secondary};
  line-height: 1.2rem;
`;

export const Body = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  padding: 1.5rem;

  min-height: 15rem;

  box-shadow: 0 0 20px 0 ${(props) => darken(0.05, props.theme.colors.light)};
`;
