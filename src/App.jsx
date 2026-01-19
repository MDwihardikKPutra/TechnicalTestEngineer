import { useRef, memo } from 'react'
import './App.css'

const ScoreInput = memo(({ mahasiswaId, aspekId, defaultValue = '1' }) => {
  const scores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  
  return (
    <select
      name={`mahasiswa_${mahasiswaId}-aspek_${aspekId}`}
      defaultValue={defaultValue}
      data-mahasiswa={mahasiswaId}
      data-aspek={aspekId}
    >
      {scores.map((score) => (
        <option key={score} value={score}>
          {score}
        </option>
      ))}
    </select>
  )
})

const StudentRow = memo(({ mahasiswaId, aspekCount, defaultValues = {} }) => {
  const cells = []
  
  for (let i = 0; i < aspekCount; i++) {
    const aspekId = i + 1
    const defaultValue = defaultValues[aspekId] || '1'
    cells.push(
      <td key={aspekId}>
        <ScoreInput
          mahasiswaId={mahasiswaId}
          aspekId={aspekId}
          defaultValue={defaultValue}
        />
      </td>
    )
  }

  return (
    <tr>
      <td>Mahasiswa {mahasiswaId}</td>
      {cells}
    </tr>
  )
})

function App() {
  const formRef = useRef(null)
  const outputRef = useRef(null)

  const defaultValues = {
    1: { 1: '1', 2: '2', 3: '6', 4: '10' },
    10: { 1: '1', 2: '2', 3: '6', 4: '10' },
  }

  const handleSave = () => {
    if (!formRef.current) return

    const formData = new FormData(formRef.current)
    const result = {
      aspek_penilaian_1: {},
      aspek_penilaian_2: {},
      aspek_penilaian_3: {},
      aspek_penilaian_4: {},
    }

    for (let mhsId = 1; mhsId <= 10; mhsId++) {
      for (let aspId = 1; aspId <= 4; aspId++) {
        const fieldName = `mahasiswa_${mhsId}-aspek_${aspId}`
        const nilai = parseInt(formData.get(fieldName), 10)
        result[`aspek_penilaian_${aspId}`][`mahasiswa_${mhsId}`] = nilai
      }
    }

    const jsonOutput = JSON.stringify(result, null, 2)
    console.log('Output JSON:', jsonOutput)

    if (outputRef.current) {
      outputRef.current.textContent = jsonOutput
    }
  }

  const renderStudents = () => {
    const rows = []
    for (let i = 0; i < 10; i++) {
      const mhsId = i + 1
      const defaults = defaultValues[mhsId] || {}
      rows.push(
        <StudentRow
          key={mhsId}
          mahasiswaId={mhsId}
          aspekCount={4}
          defaultValues={defaults}
        />
      )
    }
    return rows
  }

  return (
    <div className="app">
      <h1>Aplikasi Penilaian Mahasiswa</h1>
      
      <form ref={formRef}>
        <div className="form-container">
          <table>
            <thead>
              <tr>
                <th>Mahasiswa</th>
                <th>Aspek penilaian 1</th>
                <th>Aspek penilaian 2</th>
                <th>Aspek penilaian 3</th>
                <th>Aspek penilaian 4</th>
              </tr>
            </thead>
            <tbody>
              {renderStudents()}
            </tbody>
          </table>
          
          <div className="button-container">
            <button type="button" onClick={handleSave}>
              Simpan
            </button>
          </div>
        </div>
      </form>

      <div className="output-section">
        <h2>Output JSON</h2>
        <pre ref={outputRef}></pre>
      </div>
    </div>
  )
}

export default App
