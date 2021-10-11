import { lighten } from 'polished';
import styled, { DefaultTheme } from 'styled-components';

interface ContainerProps {
  theme: DefaultTheme;
  active: boolean;
}

export const Name = styled.p`
  font-size: 0.8rem;
  text-align: center;
`;

export const Icon = styled.i`
  font-size: 1.5rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  min-width: 7rem;

  flex: 1;

  padding: 1.5rem 1rem;

  cursor: pointer;

  :first-child {
    border-radius: 0.5rem 0 0 0.5rem;
    margin-left: 2rem;
  }

  :last-child {
    border-radius: 0 0.5rem 0.5rem 0;
    margin-right: 2rem;
  }

  background-color: ${(props: ContainerProps) =>
    props.active
      ? props.theme.colors.primary
      : lighten(0.55, props.theme.colors.secondary)};
  box-shadow: 0 0 6px 0;
  color: ${(props: ContainerProps) =>
    props.active
      ? props.theme.colors.primary
      : lighten(0.55, props.theme.colors.secondary)};

  ${Name},
  ${Icon} {
    transition: 0.3s all;
    color: ${(props: ContainerProps) =>
      props.active ? props.theme.colors.light : props.theme.colors.dark};
  }

  :hover {
    ${Name}, ${Icon} {
      color: ${(props) => props.theme.colors.light};
    }

    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.primary};
  }

  transition: 0.3s all;
`;
