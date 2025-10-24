function FavorilerPaneli({ favoriler, favoriEkleKaldir }) {
  return (
    <div className="favoriler">
      <h3>Favoriler ({favoriler.length})</h3>
      {favoriler.map(f => (
        <div key={f.id} className="favori-item">
          {f.baslik}
          <button onClick={() => favoriEkleKaldir(f)}>Kaldır</button>
        </div>
      ))}
    </div>
  )
}
export default FavorilerPaneli
