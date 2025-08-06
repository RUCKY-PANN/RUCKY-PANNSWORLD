// 型定義 src/types/character.ts

// 未加工データ（RawCharacter）
export type RawCharacter = {
  name: string;
  slug: string;
  content?: string;
  thumbnail?: { url?: string };
  charaimage?: { url?: string };
  description: string;
  category?: {
    id?: string;
    name?: string;
  };
  rating_label?: string;
  subtitle?: string;
  profile?: string;
  energy?: number;
  favo_count?: number;
  like_count?: number;
  rank?: 'leader' | 'hero' | 'UR' | 'ultra'; // ← 追加済み
};

// 加工後の統一データ（Character）
export type Character = {
  name: string;
  slug: string;
  content: string;
  thumbnail: { url: string };
  charaimage: { url: string };
  description: string;
  category: {
    id: string;
    name: string;
  };
  categoryId: string;
  subtitle: string;
  profile: string;
  energy: number;
  favo_count: number;
  like_count: number;
  rank?: 'leader' | 'hero' | 'UR' | 'ultra';
  rating_label: number;
};

// 個別取得関数
import { client } from '../lib/microcms';

export async function getCharacters(): Promise<Character[]> {
  const data = await client.get({
    endpoint: 'character',
    queries: { depth: 2 },
  });

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
}

export async function getCharacterBySlug(
  slug: string,
): Promise<Character | null> {
  const data = await client.get({
    endpoint: 'character',
    queries: { filters: `slug[equals]${slug}`, depth: 1 },
  });

  const char: RawCharacter | undefined = data.contents?.[0];
  if (!char) return null;

  return {
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
    rating_label: Number(char.rating_label) ?? 0, // ← ここ！
    subtitle: char.subtitle ?? '',
    profile: char.profile ?? '',
    energy: char.energy ?? 0,
    favo_count: char.favo_count ?? 0,
    like_count: char.like_count ?? 0,
    rank: char.rank ?? undefined, // ← 忘れず追加！
  };
}
