// src/types/news.ts
export type NewsItem = {
  id: string;
  title: string;
  description: string;
  newsImage?: {
    url: string;
  };
};
