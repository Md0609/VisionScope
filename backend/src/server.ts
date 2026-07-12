import Fastify from 'fastify';
import cors from '@fastify/cors';
import multipart from '@fastify/multipart';
import fs from 'fs';
import path from 'path';
import { HealthResponse, UploadResult } from './shared/types';

const PORT = Number(process.env.PORT || 3000);
const server = Fastify({ logger: true });

// Register plugins
server.register(cors, { origin: true });
server.register(multipart, { attachFieldsToBody: true });

server.get('/health', async (_req, reply) => {
  const res: HealthResponse = { status: 'ok' };
  return reply.code(200).send(res);
});

// Upload endpoint: accepts a single file field named 'image'
server.post('/upload', async (req, reply) => {
  const parts = req.parts ? req.parts() : null;
  // fastify-multipart provides file stream via req.file() also — use file() for single file
  try {
    const file = await req.file();
    if (!file) {
      const err: UploadResult = { status: 'error', message: 'No file uploaded' };
      return reply.code(400).send(err);
    }

    const uploadsDir = path.resolve(process.cwd(), 'uploads');
    if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true });

    const filename = `${Date.now()}-${file.filename}`;
    const filepath = path.join(uploadsDir, filename);
    const writeStream = fs.createWriteStream(filepath);

    // pipe the incoming file stream to disk
    file.file.pipe(writeStream);

    // Wait until stream finishes
    await new Promise((resolve, reject) => {
      writeStream.on('finish', resolve);
      writeStream.on('error', reject);
    });

    const stats = fs.statSync(filepath);
    const res: UploadResult = { status: 'success', filename, size: stats.size };
    return reply.code(200).send(res);
  } catch (err: any) {
    const res: UploadResult = { status: 'error', message: err?.message ?? String(err) };
    return reply.code(500).send(res);
  }
});

server.listen({ port: PORT, host: '0.0.0.0' }).then(() => {
  console.log(`API http://localhost:${PORT}`);
}).catch((err) => {
  server.log.error(err);
  process.exit(1);
});
