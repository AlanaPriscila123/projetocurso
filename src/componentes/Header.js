import { Link } from "react-router-dom";

function Header(){
    return (
        <header>
        <div className="headerTopo">
        <h1>Curso Técnico Desenvolvimento de Sistemas</h1>
        </div>
        <nav className="headerMenu">
            <ul>
                 <li><Link to ="/"></Link>Home</li>
                 <li><Link to ="/SobreCurso"></Link>Curso</li>
                 <li><Link to ="/disciplinasTecnicas"></Link>Disciplinas Básicas</li>
                 <li><Link to ="/disciplinasCurriculares"></Link>Disciplinas Técnicas</li>
                 <li><Link to ="/equipe"></Link>Equipe</li>
            </ul>
        </nav>
        </header>
    )
}

export default Header;