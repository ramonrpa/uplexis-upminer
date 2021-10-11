import { useCallback, useEffect, useRef, useState } from 'react';
import { Arrow, CarouselItem, CarouselList, Container } from './styles';

interface Props {
  values: JSX.Element[];
  active?: number;
  withArrow?: boolean;
}

const Carousel: React.FC<Props> = ({
  values,
  active = 0,
  withArrow = false,
}) => {
  const changeSelectedTimeout: { current: NodeJS.Timeout | null } =
    useRef(null);
  const [selectedItem, setSelectedItem] = useState<number>(active);
  const [previousItem, setPreviousItem] = useState<number>(-1);
  const [cooldown, setCooldown] = useState<boolean>(false);

  const handleArrow = useCallback(
    (offset: number) => {
      let newIndex = selectedItem + offset;
      if (values.length - 1 < newIndex) newIndex = 0;
      if (newIndex < 0) newIndex = values.length - 1;

      setPreviousItem(selectedItem);
      setSelectedItem(newIndex);
      setTimeout(() => {
        setPreviousItem(-1);
      }, 800);
    },
    [selectedItem, values.length],
  );

  useEffect(() => {
    changeSelectedTimeout.current = setTimeout(() => {
      handleArrow(1);
    }, 10000);
  }, [handleArrow, selectedItem, values.length]);

  useEffect(() => {
    if (cooldown)
      setTimeout(() => {
        setCooldown(false);
      }, 900);
  }, [cooldown]);

  return (
    <Container>
      {withArrow && (
        <Arrow>
          <i
            className="fas fa-arrow-left"
            onClick={() => {
              if (cooldown) return;
              changeSelectedTimeout.current &&
                clearInterval(changeSelectedTimeout.current);
              handleArrow(-1);
              setCooldown(true);
            }}
          ></i>
        </Arrow>
      )}
      <CarouselList withArrow={withArrow}>
        {values.map((item, index) => (
          <CarouselItem
            key={index}
            active={index === selectedItem}
            previous={index === previousItem}
          >
            {item}
          </CarouselItem>
        ))}
      </CarouselList>
      {withArrow && (
        <Arrow>
          <i
            className="fas fa-arrow-right"
            onClick={() => {
              if (cooldown) return;
              changeSelectedTimeout.current &&
                clearInterval(changeSelectedTimeout.current);
              handleArrow(1);
              setCooldown(true);
            }}
          ></i>
        </Arrow>
      )}
    </Container>
  );
};

export default Carousel;
