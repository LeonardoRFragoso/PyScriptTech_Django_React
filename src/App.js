// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/navbar'; // Verifique se o caminho e nome do arquivo estão corretos
import HomePage from './pages/HomePage/HomePage'; // Certifique-se que o caminho e nome do arquivo estão corretos
import ServicesPage from './pages/Services/ServicesPage'; // Verifique se o caminho e nome do arquivo estão corretos
import ProjectsPage from './pages/ProjectsPage/ProjectsPage'; // Certifique-se que o caminho e nome do arquivo estão corretos
import Footer from './components/Footer/footer'; // Verifique se o caminho e nome do arquivo estão corretos e o arquivo existe

// Importação dos estilos do carrossel
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <Router>
      <div className="app-container"> {/* Envolva todo o conteúdo em um container */}
        <Navbar /> {/* Navbar que navega entre as páginas */}
        <main> {/* Tag semântica para o conteúdo principal */}
          <Routes>
            <Route path="/" element={<HomePage />} /> {/* Página inicial */}
            <Route path="/services" element={<ServicesPage />} /> {/* Página de serviços */}
            <Route path="/projects" element={<ProjectsPage />} /> {/* Página de projetos */}
            {/* Adicione outras rotas conforme cria os arquivos correspondentes */}
          </Routes>
        </main>
        <Footer /> {/* Rodapé da página */}
      </div>
    </Router>
  );
};

export default App;
