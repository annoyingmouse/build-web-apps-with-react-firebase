import './Title.scss'

export default function Title({title, subtitle}) {
  return (
    <div className="title-block">
        <h1>{title}</h1>
        <br/>
        <h2>{subtitle}</h2>
    </div>
  );
}