// src/utils/getCharacters.ts
import { client } from '../lib/microcms';
import type { Character, RawCharacter } from '@/types/character';

export async function getCharacters(): Promise<Character[]> {
  try {
    const data = await client.get({
      endpoint: 'character',
      queries: { limit: 50, depth: 2 },
    });

    console.log('取得成功:', data);

    return data.contents.map(
      (char: RawCharacter): Character => ({
        name: char.name,
        slug: char.slug,
        content: char.content ?? '',
        thumbnail: { url: char.thumbnail?.url ?? '' },
        charaimage: { url: char.charaimage?.url ?? '' },
        description: char.description,
        category: {
          id: char.category?.id ?? 'unknown',
          name: char.category?.name ?? 'カテゴリ不明',
        },
        categoryId: char.category?.id ?? 'unknown',
        rating_label: Number(char.rating_label) ?? 0,
        subtitle: char.subtitle ?? '',
        profile: char.profile ?? '',
        energy: char.energy ?? 0,
        favo_count: char.favo_count ?? 0,
        like_count: char.like_count ?? 0,
        rank: char.rank ?? undefined,
      }),
    );
  } catch (error) {
    console.error('❌ getCharacters() エラー:', error);
    return []; // ← ビルドが止まらないようにする
  }
}
