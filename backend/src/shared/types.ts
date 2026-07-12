export interface HealthResponse {
  status: 'ok' | 'error';
}

export interface UploadResult {
  status: 'success' | 'error';
  filename?: string;
  size?: number;
  message?: string;
}
