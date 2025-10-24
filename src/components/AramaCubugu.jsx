function AramaCubugu({ aramaMetni, setAramaMetni }) {
  return (
    <input
      type="text"
      placeholder="Başlık veya yazar ara..."
      value={aramaMetni}
      onChange={(e) => setAramaMetni(e.target.value)}
    />
  )
}
export default AramaCubugu
