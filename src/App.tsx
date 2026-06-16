import React from 'react';
import { HashRouter as Router } from 'react-router-dom'; // Using HashRouter is highly recommended for GitHub Pages deployments
import { ThemeModeProvider } from './theme/ThemeContext';
import { Layout } from './components/layout/Layout';
import { AppRoutes } from './routes';

function App() {
  return (
    <ThemeModeProvider>
      <Router>
        <Layout>
          <AppRoutes />
        </Layout>
      </Router>
    </ThemeModeProvider>
  );
}

export default App;
