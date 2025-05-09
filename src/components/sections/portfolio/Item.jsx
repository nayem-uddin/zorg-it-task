export default function Item({ title, desc, imgSrc }) {
  return (
    <div className="card portfolio-card">
      <div className="card-img-container">
        <img src={imgSrc} className="card-img-top" alt={title} height="100%" />
      </div>

      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <div className="d-flex justify-content-between">
          <div>
            <p className="card-text">{desc}</p>
          </div>
          <div>
            <a href="#" className="btn btn-primary">
              Open
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
