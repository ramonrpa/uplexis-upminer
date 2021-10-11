import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

interface CarouselItemProps {
  active: boolean;
  previous: boolean;
}

export const CarouselList = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
  position: relative;

  margin: ${(props: { withArrow: boolean }) =>
    props.withArrow ? '0 1rem' : '0'};
`;

export const CarouselItem = styled.div`
  width: 100%;

  position: ${(props: CarouselItemProps) =>
    props.active ? 'relative' : 'absolute'};
  left: ${(props: CarouselItemProps) =>
    props.active ? '0' : props.previous ? '-100%' : '100%'};
  z-index: ${(props: CarouselItemProps) => (props.active ? '1' : '-1')};

  opacity: ${(props: CarouselItemProps) =>
    props.active ? '1' : props.previous ? '1' : '0'};

  transition: 0.5s left;
`;

export const Arrow = styled.div`
  display: flex;
  align-items: center;
  i {
    font-size: 1.4rem;
    font-weight: 510;
    cursor: pointer;
    color: ${(props) => props.theme.colors.secondary};
  }
`;
