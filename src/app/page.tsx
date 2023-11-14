'use client';
import { BodyCards, Container } from './Styled';
import Cards from './components/cards/cards';
import Header from './components/header/header';
import React, { useEffect, useState } from 'react';
import API from './services/API';
import { Provider } from 'react-redux';
import store from './Redux/Store';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await API.get('/products', {
          params: {
            page: 1,
            rows: 8,
            sortBy: 'id',
            orderBy: 'ASC',
          },
        });
        setProducts(response.data.products);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div>
      <Provider store={store}>
        <Header />
        <Container>
          <BodyCards>
            <Cards products={products}></Cards>
          </BodyCards>
        </Container>
      </Provider>
    </div>
  );
}
