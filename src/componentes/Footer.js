function Footer(){

    return (
        <footer>
        <div className="menuFooter">
            <ul>
            <li><Link to ="/SobreCurso"></Link>Curso</li>
                 <li><Link to ="/disciplinasTecnicas"></Link>Disciplinas Básicas</li>
                 <li><Link to ="/disciplinasCurriculares"></Link>Disciplinas Técnicas</li>
                 <li><Link to ="/equipe"></Link>Equipe</li>
            </ul>
        </div>
        <div className="credencias">
            <h1>Desenvolvido por: Alana Priscila Marques Ramos - 2026</h1>
        </div>
        </footer>
            
    )
}

export default Footer;

