import { neon } from '@neondatabase/serverless';

export default async function handler(request, response) {
  try {
    const databaseUrl = process.env.NEON_DATABASE_URL || process.env.DATABASE_URL;

    if (!databaseUrl) {
      return response.status(500).json({
        ok: false,
        error: 'Missing NEON_DATABASE_URL or DATABASE_URL environment variable.',
      });
    }

    const sql = neon(databaseUrl);
    const result = await sql`SELECT 1 AS ok`;

    return response.status(200).json({
      ok: true,
      database: 'connected',
      result,
    });
  } catch (error) {
    return response.status(500).json({
      ok: false,
      error: error instanceof Error ? error.message : 'Failed to connect to Neon.',
    });
  }
}