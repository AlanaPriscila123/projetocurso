import Header from "./componentes/Header";
import Main from "./componentes/Main";
import Footer from "./componentes/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Error from "./componentes/Error";
import Equipe from "./Equipe";
import DisciplinasCurriculares from "./componentes/DisciplinasCurriculares";
import DisciplinasTecnicas from "./componentes/ListaDisciplinaTecnica";
import SobreCurso from "./componentes/SobreCurso";
import ListaDisciplinaCurricular from "./ListaDisciplinaCurricular";


function App() {
  return( 
    <BrowserRouter>
    <>
    <Header />
    <Routes >
    <Route path="*" element={<Error />}/>
    <Route path="/" element={<Main />}/>
    <Route path="/SobreCurso" element={<SobreCurso />} />
    <Route path="/disciplinasTecnicas" element={<DisciplinasTecnicas/>}/>
    <Route path="/disciplinasCurriculares" element={<DisciplinasCurriculares/>}/>

    <Route path="/disciplinaTecnica/:id" element={<ListaDisciplinaTecnica/>}/>
    <Route path="/disciplinaCurricular/:id" element={<DisciplinasCurricular/>}/>

    <Route path="/equipe" element={<Equipe/>}/>
    </Routes>
    <Footer />
    </>
    </BrowserRouter>
    
  );
  }

export default App;
