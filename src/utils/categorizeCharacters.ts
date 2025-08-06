import type { Character } from '@/types/character';
import type { Category } from '@/types/category';

type Categorized = {
  id: string;
  title: string;
  subtitle: string;
  characters: Character[];
};

export function categorizeCharacters(
  characters: Character[],
  categoryList: Category[],
): Categorized[] {
  const map = new Map<string, Categorized>();

  // カテゴリを先に初期化（subtitleは空で仮置き）
  for (const cat of categoryList) {
    map.set(cat.id, {
      id: cat.id,
      title: cat.title,
      subtitle: cat.subtitle ?? '', // ←ココで反映！
      characters: [],
    });
  }

  // キャラクターをカテゴリに振り分けつつ、副題も設定
  for (const char of characters) {
    const category = map.get(char.categoryId);
    if (category) {
      category.characters.push(char);

      // 最初のキャラのsubtitleをカテゴリのsubtitleに設定
      if (!category.subtitle && char.subtitle) {
        category.subtitle = char.subtitle;
      }
    }
  }

  return Array.from(map.values()).filter((cat) => cat.characters.length > 0);
}
