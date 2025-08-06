// src/utils/metaManager.ts
export function getMeta(pathname: string) {
  switch (pathname) {
    case '/pages/world/':
      return {
        generator: 'この世界について：World.content｜RUCKY-PANN WORLD',
        title: 'この世界について：World.content｜RUCKY-PANN WORLD',
      };

    case '/pages/about/':
      return {
        generator: 'RUCKY-PANNとは：About.content｜RUCKY-PANN WORLD',
        title: 'RUCKY-PANNとは：About.content｜RUCKY-PANN WORLD',
      };
    case '/pages/areaMap/':
      return {
        generator: 'エリアマップ紹介：AreaMap.content｜RUCKY-PANN WORLD',
        title: 'エリアマップ紹介：AreaMap.content｜RUCKY-PANN WORLD',
      };
    case '/pages/areaMap/koala/':
      return {
        generator:
          'エリア紹介：AreaMap.content｜エリア：コアラロイド｜RUCKY-PANN WORLD',
        title: 'エリア：コアラロイド|エリア紹介|RUCKY-PANN WORLD',
      };

    case '/pages/areaMap/panda/':
      return {
        generator:
          'エリア紹介：AreaMap.content｜エリア：パンダロイド｜RUCKY-PANN WORLD',
        title: 'エリア：パンダロイド|エリア紹介|RUCKY-PANN WORLD',
      };

    case '/pages/areaMap/bear/':
      return {
        generator:
          'エリア紹介：AreaMap.content｜エリア：ベアーロイド｜RUCKY-PANN WORLD',
        title: 'エリア：ベアーロイド|エリア紹介|RUCKY-PANN WORLD',
      };

    case '/pages/areaMap/cat/':
      return {
        generator:
          'エリア紹介：AreaMap.content｜エリア：キャットロイド｜RUCKY-PANN WORLD',
        title: 'エリア：キャットロイド|エリア紹介｜RUCKY-PANN WORLD',
      };
    // 他のパスも追加

    case '/pages/areaMap/dog/':
      return {
        generator:
          'エリア紹介：AreaMap.content｜エリア：ドッグロイド｜RUCKY-PANN WORLD',
        title: 'エリア：ドッグロイド｜エリア紹介｜RUCKY-PANN WORLD',
      };

    case '/pages/areaMap/hipo/':
      return {
        generator:
          'エリア紹介：AreaMap.content｜エリア：ヒッポロイド｜RUCKY-PANN WORLD',
        title: 'エリア：ヒッポロイド｜エリア紹介｜RUCKY-PANN WORLD',
      };

    case '/pages/areaMap/tanuki/':
      return {
        generator:
          'エリア紹介：AreaMap.content｜エリア：タヌキロイド｜RUCKY-PANN WORLD',
        title: 'エリア：タヌキロイド｜エリア紹介｜RUCKY-PANN WORLD',
      };

    case '/pages/areaMap/penguin/':
      return {
        generator:
          'エリア紹介：AreaMap.content｜エリア：ペンギンロイド｜RUCKY-PANN WORLD',
        title: 'エリア：ペンギンロイド｜エリア紹介｜RUCKY-PANN WORLD',
      };

    case '/pages/areaMap/other/':
      return {
        generator:
          'エリア紹介：AreaMap.content｜エリア：アザーロイド｜RUCKY-PANN WORLD',
        title: 'エリア：アザーロイド｜エリア紹介｜RUCKY-PANN WORLD',
      };

    case '/pages/areaMap/rp/':
      return {
        generator: 'エリア紹介：AreaMap.content｜エリア：R-P｜RUCKY-PANN WORLD',
        title: 'エリア：R-P｜エリア紹介｜RUCKY-PANN WORLD',
      };

    case '/pages/areaMap/companion/':
      return {
        generator:
          'エリア紹介：AreaMap.content｜エリア：コンパニオンロイド｜RUCKY-PANN WORLD',
        title: 'エリア：コンパニオンロイド｜エリア紹介｜RUCKY-PANN WORLD',
      };

    case '/pages/areaMap/dark/':
      return {
        generator:
          'エリア紹介：AreaMap.content｜エリア：ダークガードロイド｜RUCKY-PANN WORLD',
        title: 'エリア：ダークガードロイド｜エリア紹介｜RUCKY-PANN WORLD',
      };

    case '/pages/areaMap/event/':
      return {
        generator:
          'エリア紹介：AreaMap.content｜エリア：イベント｜RUCKY-PANN WORLD',
        title: 'エリア：イベント｜エリア紹介｜RUCKY-PANN WORLD',
      };

    case '/pages/charaList/':
      return {
        generator: 'キャラクター一覧：CharacterList.content｜RUCKY-PANN WORLD',
        title: 'キャラクター一覧：CharacterList.content｜RUCKY-PANN WORLD',
      };

    case '/pages/charaIntro/':
      return {
        generator: 'キャラクター紹介：CharacterIntro.content｜RUCKY-PANN WORLD',
        title: 'キャラクター紹介：CharacterIntro.content｜RUCKY-PANN WORLD',
      };

    case '/pages/join/':
      return {
        generator: 'この世界に参加：join.content｜RUCKY-PANN WORLD',
        title: 'この世界に参加：join.content｜RUCKY-PANN WORLD',
      };

    case '/pages/navitour/':
      return {
        generator: 'サイトの使い方：NaviTour.content｜RUCKY-PANN WORLD',
        title: 'サイトの使い方：NaviTour.content｜RUCKY-PANN WORLD',
      };

    case '/pages/production/':
      return {
        generator:
          'PROJECT企画課管理委員会：Production.content｜RUCKY-PANN WORLD',
        title: 'PROJECT企画課管理委員会：Production.content｜RUCKY-PANN WORLD',
      };

    case '/pages/sitemap/':
      return {
        generator: 'サイトマップ：SiteMap.content｜RUCKY-PANN WORLD',
        title: 'サイトマップ：SiteMap.content｜RUCKY-PANN WORLD',
      };

    case '/pages/form/':
      return {
        generator: 'お問い合わせ：From.content｜RUCKY-PANN WORLD',
        title: 'お問い合わせ：From.content｜RUCKY-PANN WORLD',
      };

    case '/pages/':
      return {
        generator: 'RUCKY-PANN WORLD-ThePlanetUI-｜RUCKY-PANN WORLD',
        title: 'RUCKY-PANN WORLD-ThePlanetUI-｜RUCKY-PANN WORLD',
      };

    default:
      return {
        generator: 'RUCKY-PANN WORLD-ThePlanetUI-｜RUCKY-PANN WORLD',
        title: 'RUCKY-PANN WORLD-ThePlanetUI-｜RUCKY-PANN WORLD',
      };
  }
}
