// /lib/microcms.ts
import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: import.meta.env.VITE_MICROCMS_SERVICE_ID,
  apiKey: import.meta.env.VITE_MICROCMS_API_KEY,
}) as ReturnType<typeof createClient>;

// 🧠 内容の更新（PATCH）関数
export async function updateCharacter(
  id: string,
  payload: Record<string, any>,
) {
  try {
    await client.update({
      endpoint: 'character',
      contentId: id,
      content: payload,
    });
  } catch (error) {
    console.error('MicroCMS更新失敗:', error);
    throw error;
  }
}
