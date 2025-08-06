//src/api/updateLike.ts
import { updateCharacter } from '../../lib/microcms';

import type { APIContext } from 'astro';

export async function POST({ request }: APIContext) {
  const { id, like_count } = await request.json();

  await updateCharacter(id, { like_count });

  return new Response(JSON.stringify({ status: 'OK' }), { status: 200 });
}
