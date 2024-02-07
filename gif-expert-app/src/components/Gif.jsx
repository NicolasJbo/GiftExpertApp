

export const Gif = ({ title, url, id }) => {

    return (
      <div className="card">
          <img src={ url } alt={ title } />
          <p>{ title }</p>
      </div>
    )
  }