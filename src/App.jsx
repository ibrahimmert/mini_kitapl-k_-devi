import { useEffect, useState } from 'react'
import AramaCubugu from './components/AramaCubugu'
import Filtreleme from './components/Filtreleme'
import KitapListesi from './components/KitapListesi'
import FavorilerPaneli from './components/FavorilerPaneli'

const sabitKitaplar = [
  { id: 1, baslik: 'React’e Giriş', yazar: 'D. Usta', kategori: 'Web' },
  { id: 2, baslik: 'İleri JavaScript', yazar: 'S. Kılıç', kategori: 'Web' },
  { id: 3, baslik: 'Veri Yapıları', yazar: 'A. Demir', kategori: 'CS' },
  { id: 4, baslik: 'Algoritmalar', yazar: 'E. Kaya', kategori: 'CS' },
  { id: 5, baslik: 'UI/UX Temelleri', yazar: 'N. Akın', kategori: 'Tasarım' },
  { id: 6, baslik: 'Mobil Geliştirme', yazar: 'T. Öz', kategori: 'Mobil' },
  { id: 7, baslik: 'Python ile Programlama', yazar: 'M. Ersoy', kategori: 'CS' },
  { id: 8, baslik: 'Node.js ve Express', yazar: 'F. Çetin', kategori: 'Web' },
  { id: 9, baslik: 'Veritabanı Yönetimi', yazar: 'B. Arslan', kategori: 'CS' },
  { id: 10, baslik: 'Tasarım Düşüncesi', yazar: 'Z. Yıldız', kategori: 'Tasarım' },
]

function App() {
  const [aramaMetni, setAramaMetni] = useState(localStorage.getItem('aramaMetni') || '')
  const [kategori, setKategori] = useState('Tümü')
  const [favoriler, setFavoriler] = useState(JSON.parse(localStorage.getItem('favoriler')) || [])

  useEffect(() => {
    localStorage.setItem('aramaMetni', aramaMetni)
  }, [aramaMetni])

  useEffect(() => {
    localStorage.setItem('favoriler', JSON.stringify(favoriler))
  }, [favoriler])

  const filtrelenmisKitaplar = sabitKitaplar.filter(k => {
    const eslesenBaslik = k.baslik.toLowerCase().includes(aramaMetni.toLowerCase())
    const eslesenYazar = k.yazar.toLowerCase().includes(aramaMetni.toLowerCase())
    const kategoriUygun = kategori === 'Tümü' || k.kategori === kategori
    return (eslesenBaslik || eslesenYazar) && kategoriUygun
  })

  const favoriEkleKaldir = (kitap) => {
    if (favoriler.find(f => f.id === kitap.id)) {
      setFavoriler(favoriler.filter(f => f.id !== kitap.id))
    } else {
      setFavoriler([...favoriler, kitap])
    }
  }

  return (
    <div className="container">
      <h1>Mini Kitaplık</h1>
      <div className="ust">
        <AramaCubugu aramaMetni={aramaMetni} setAramaMetni={setAramaMetni} />
        <Filtreleme kategori={kategori} setKategori={setKategori} />
      </div>
      <div className="icerik">
        <KitapListesi kitaplar={filtrelenmisKitaplar} favoriler={favoriler} favoriEkleKaldir={favoriEkleKaldir} />
        <FavorilerPaneli favoriler={favoriler} favoriEkleKaldir={favoriEkleKaldir} />
      </div>
    </div>
  )
}

export default App
