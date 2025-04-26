import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import ArticleCard from './components/ArticleCard';
import ArticlePage from './pages/ArticlePage';
import CategoryPage from './pages/CategoryPage';
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { ThemeProvider } from './context/ThemeContext';
import { mockArticles } from './data/mockArticles';
import { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 5;
  const totalPages = Math.ceil(mockArticles.length / articlesPerPage);

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow container py-8">
            <Routes>
              <Route
                path="/"
                element={
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    <div className="lg:col-span-3">
                      <div className="space-y-6">
                        {mockArticles.map(article => (
                          <ArticleCard key={article.id} {...article} />
                        ))}
                      </div>
                      {totalPages > 1 && (
                        <div className="flex justify-center gap-2 mt-8">
                          {Array.from({ length: totalPages }, (_, i) => (
                            <button
                              key={i + 1}
                              onClick={() => setCurrentPage(i + 1)}
                              className={`btn ${currentPage === i + 1 ? 'btn-primary' : 'btn-secondary'}`}
                              aria-label={`Page ${i + 1}`}
                            >
                              {i + 1}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="lg:col-span-1">
                      <Sidebar />
                    </div>
                  </div>
                }
              />
              <Route path="/article/:id" element={<ArticlePage />} />
              <Route path="/category/:category" element={<CategoryPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
