import dadosDisciplinasCurriculares from '../dados/dadosDisciplinasCurriculares'
function DisciplinasCurriculares () {

    return(        
                  <section className='disciplinas'>
                <header className='headerDisciplinas'>
                    <h1>DisciplinasCurriculares</h1>
                </header>
            <div className='contentDisciplinas'>
            {
                dadosDisciplinasCurriculares.map(
                    (item, index) => (
                         <article key={index}>
                         <img src={item.link_imagem}
                         alt='{item.nome}'
                         title='{item.nome}'/>
                         {item.nome} - {item.sigla}
                         </article>
                    ) 
                )
            }
            </div>
            </section>
        )
        }
        export default DisciplinasCurriculares    