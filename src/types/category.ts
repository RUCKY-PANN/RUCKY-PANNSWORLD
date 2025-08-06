// 型定義 src/types/category.ts

export type Category = {
  id: string; // 一意なID
  name: string; // 管理用途の名前（英語/内部用）
  title: string; // 表示用のタイトル（UIに出す見出し）
  subtitle?: string; // キャッチコピー的な補足（任意）
  color?: string; // バッジ・背景色など視覚に使うHEX値
  icon?: string; // アイコンURLまたはクラス名
  order?: number; // 表示の順番制御
  isFeatured?: boolean; // 特集カテゴリかどうか
  description?: string; // 長文説明（詳細ページ等）
  code: string;
};
