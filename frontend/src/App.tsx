import UploadForm from './components/UploadForm';

export default function App() {
  return (
    <div style={{ padding: 40, fontFamily: 'sans-serif' }}>
      <h1>VisionScope</h1>
      <UploadForm />
      <hr />
      <p>Resultados aparecerán aquí.</p>
    </div>
  );
}