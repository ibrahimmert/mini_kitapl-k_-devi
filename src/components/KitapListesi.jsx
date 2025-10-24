import KitapKart from './KitapKart'

function KitapListesi({ kitaplar, favoriler, favoriEkleKaldir }) {
  return (
    <div className="kitaplar">
      {kitaplar.map(k => (
        <KitapKart
          key={k.id}
          kitap={k}
          favorideMi={favoriler.some(f => f.id === k.id)}
          favoriEkleKaldir={favoriEkleKaldir}
        />
      ))}
    </div>
  )
}
export default KitapListesi
