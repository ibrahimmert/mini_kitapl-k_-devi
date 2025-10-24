function KitapKart({ kitap, favorideMi, favoriEkleKaldir }) {
  return (
    <div className="kart">
      <div>
        <strong>{kitap.baslik}</strong><br />
        {kitap.yazar} · {kitap.kategori}
      </div>
      <button onClick={() => favoriEkleKaldir(kitap)}>
        {favorideMi ? 'Favoride' : 'Favori Ekle'}
      </button>
    </div>
  )
}
export default KitapKart
