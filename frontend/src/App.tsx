export default function App() {
    return (
        <div style={{ padding: 40, fontFamily: 'sans-serif' }}>
            <h1>VisionScope</h1>
            <input type="file" accept="image/*" />
            <button style={{ marginLeft: 10 }}>Analizar</button>
            <hr />
            <p>Resultados aparecerán aquí.</p>
        </div>
    );
}