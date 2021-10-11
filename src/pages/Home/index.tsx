import CategoryWidget from '~/components/CategoryWidget';
import { CategoryList, Container, ApplicationList } from './style';
import { useEffect, useState } from 'react';
import { useAppSelector } from '~/store/hooks';
import { getCategories } from '~/services/categories.service';
import SelectInput from '~/components/SelectInput';
import ApplicationCard from '~/components/ApplicationCard';
import { getApplications } from '~/services/applications.service';

const Home = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const [orderBy, setOrderBy] = useState<number>(3);
  const { categories, applications } = useAppSelector((state) => state);

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    getApplications(activeCategory, orderBy);
  }, [activeCategory, orderBy]);

  return (
    <Container>
      <CategoryList>
        {categories.map((category) => (
          <CategoryWidget
            key={category.id}
            {...category}
            active={category.id === activeCategory}
            onClick={() => setActiveCategory(category.id)}
          />
        ))}
      </CategoryList>
      <SelectInput
        label="ordenar"
        defaultValue={orderBy}
        options={[
          {
            value: 0,
            name: 'Preço Mais Baixo',
          },
          {
            value: 1,
            name: 'Preço Mais Alto',
          },
          { value: 2, name: 'Lançamento Mais Recente' },
          { value: 3, name: 'Lançamento Mais Antigo' },
        ]}
        onChange={(key) => setOrderBy(key)}
      />
      <ApplicationList>
        {applications.map((application) => (
          <ApplicationCard key={application.id} {...application} />
        ))}
      </ApplicationList>
    </Container>
  );
};

export default Home;
