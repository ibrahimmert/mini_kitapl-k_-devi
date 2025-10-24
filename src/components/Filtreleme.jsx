function Filtreleme({ kategori, setKategori }) {
  return (
    <select value={kategori} onChange={(e) => setKategori(e.target.value)}>
      <option value="Tümü">Tümü</option>
      <option value="Web">Web</option>
      <option value="CS">CS</option>
      <option value="Tasarım">Tasarım</option>
    </select>
  )
}
export default Filtreleme
