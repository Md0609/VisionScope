import React, { useState } from 'react';
import type { UploadResult } from '@/types';

export default function UploadForm() {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<string | null>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files && e.target.files[0];
    setFile(f || null);
  };

  const onSubmit = async () => {
    if (!file) {
      setStatus('Please choose a file first.');
      return;
    }
    setStatus('Uploading...');
    const form = new FormData();
    form.append('image', file);

    try {
      const res = await fetch('http://localhost:3000/upload', {
        method: 'POST',
        body: form,
      });
      const json: UploadResult = await res.json();
      if (json.status === 'success') {
        setStatus(`Uploaded ${json.filename} (${json.size} bytes)`);
      } else {
        setStatus(`Error: ${json.message || 'unknown'}`);
      }
    } catch (err: any) {
      setStatus(`Upload failed: ${err?.message ?? err}`);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <input type="file" accept="image/*" onChange={onChange} />
      <button onClick={onSubmit} style={{ marginLeft: 10 }}>
        Upload
      </button>
      <div style={{ marginTop: 10 }}>{status}</div>
    </div>
  );
}
