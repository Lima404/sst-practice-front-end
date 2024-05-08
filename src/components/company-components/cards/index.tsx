import "./index.css"

const Card = ({ professional, company, employee }: { professional: string, company: string, employee: string }) => {
  return (
    <div className="card-company-container">
      <h2>Novo documento cadastrado</h2>
      <p>id profissional {professional}</p>
      <p>id empresa {company}</p>
      <p>id colaborador {employee}</p>
    </div>
  )
}

export default Card;