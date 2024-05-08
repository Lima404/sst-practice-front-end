import "./index.css"

const Card = ({ professional, company, employee }: { professional: string, company: string, employee: string }) => {
  return (
    <div className="card-company-container">
      <p>{professional}</p>
      <p>{company}</p>
      <p>{employee}</p>
    </div>
  )
}

export default Card;