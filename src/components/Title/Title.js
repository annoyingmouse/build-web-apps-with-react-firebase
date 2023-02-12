import './Title.scss'

export const Title = ({ title, subtitle }) => (
  <div className="title-block">
    <h1>{title}</h1>
    <br/>
    <h2>{subtitle}</h2>
  </div>
)