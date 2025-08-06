// /src/pages/api/updateFavo.ts
import { updateCharacter } from '../../lib/microcms';
import type { APIContext } from 'astro';

export async function POST({ request }: APIContext) {
  const { id, favo_count } = await request.json();

  await updateCharacter(id, { favo_count });

  return new Response(JSON.stringify({ status: 'OK' }), { status: 200 });
}
