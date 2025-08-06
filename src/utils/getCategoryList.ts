// src/utils/getCategoryList.ts
import { client } from '../lib/microcms'; // ←正しいclientの読み込み

export const getCategoryList = async () => {
  try {
    const data = await client.get({
      endpoint: 'category',
      queries: { limit: 50 },
    });
    console.log('取得成功', data);
    return data.contents;
  } catch (e) {
    console.error('getCategoryListエラー:', e);
    return [];
  }
};
