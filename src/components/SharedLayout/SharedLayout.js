import { Outlet } from "react-router-dom";
import { Container, Header, Link } from "./SharedLayout.styled";
import { Suspense } from 'react';

export const SharedLayout = () => {
    return (
      <Container>
        <Header>
          <nav>
                <Link to="/" end> Home </Link>
                <Link to="/movies">Movies</Link>
          </nav>
        </Header>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    );
  };