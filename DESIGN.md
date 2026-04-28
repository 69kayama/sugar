# DESIGN.md — デザイン仕様書

## コンセプト
耽美・退廃的な世界観。ミニマルで静謐。イラストが主役になるUI。
余白を大切に、装飾より「引き算」のデザインを心がける。


## 技術要件

使用技術:	HTML / CSS / JavaScript（バニラ、フレームワークなし）
レスポンシブ:	スマホ（〜768px）/ タブレット（769〜1024px）/ PC（1025px〜）
アニメーション:	左下ウィジェット：スクロール検知 → フェードイン（opacity + translateY）
		ツールチップ：CSS hover
		Worksギャラリー：ホバー時オーバーレイ（opacity transition）
		ページ遷移：なし

## 共通UI

### ヘッダー（全ページ固定）

左側：丸アイコン（アバター画像）＋ ヘッダー表示名 → HOME（index.html）へのリンク
右側：ナビゲーション（Home / Works / Commission / About）
現在ページをアクセントカラーで強調
スマホ：ハンバーガーメニュー（クリックでドロップダウン）

### ページ上部（HOME以外の全ページ）

ページタイトル＆説明文：中央揃え

### 左下固定ウィジェット（HOME以外のページ）

表示条件：scrollY > 100px でフェードイン
位置：position: fixed; bottom: 16px; left: 16px;
構成：[丸アイコン] 名前
　　[X][Xfolio][Skeb][Mail]（SVGアイコン横並び）　←各アイコンにホバーでツールチップ

### フッター（全ページ）
著作権表記を画面中央に表示。border-top なし。

```css
height: 48px;
display: flex;
align-items: center;
justify-content: center;
/* border-top: なし */
margin-top: 60px;
```

---

## ページデザイン

### HOME（index.html）

PC：メニュー＋左右2分割＋フッター。スクロールなしで全情報が収まること。
ヘッダーとコンテンツエリアの間：padding-top: 20px（home-wrapper に指定）
左カラム：名刺エリア（幅 300px）
・アバター画像（丸形）
・名前・肩書き
・バッジ
・SNSアイコン横並び：X / クロスフォリオ / Skeb / Mail

　ホバー時にツールチップでサービス名表示
　※ バッジ↔アイコン間の区切り線なし
・更新履歴（名刺エリア下部に `position: absolute; bottom: 12px` で固定配置）

フッター（HOMEのみ）：height 48px（余白確保のため32px→48px、`align-items: flex-end`）

右カラム：イラスト表示（ヒーロースライダー）。最大幅 \~600px・max-height: 900px

スマホレイアウト（縦スクロール）：
1. イラスト（full-width, height: 50vh）
2. 名刺エリア（アバター・名前・バッジ・SNSアイコン、padding: 20px 24px 16px）
3. Works / Commission / About プレビューセクション（各ページへの view more リンク付き）
4. フッター

### Works（works.html）

・グリッドレイアウト（PC：4列 / タブレット：3列 / スマホ：2列）
・サムネイルのアスペクト比：3:4（縦長）
・ホバー時：オーバーレイ＋作品タイトル表示
・作品データはJSの配列で管理（タイトル・画像パス・カテゴリ・キャプション）
・カテゴリフィルター機能

#### ライトボックス

・サムネイルクリック → フルスクリーンオーバーレイで拡大表示
・背景: linear-gradient(to bottom, #FFFFFF 0%, var(--color-border) 100%)（上白→下グレー）
・中央: 作品画像（max-height: 75vh / max-width: 80vw, object-fit: contain）
・画像下: キャプション（注釈）font-size: 11px, --color-text-sub
・右上: × 閉じるボタン（SVGアイコン）
・左右: ＜＞ 前後ナビゲーション（最初/最後は非表示）
・閉じる操作: ×クリック / Escキー / 背景クリック
・キーボード: ←→矢印キーでナビゲーション
・遷移: opacity 0.25s ease
・z-index: 200

### Commission（commission.html）

PRICEセクション： 料金カード
　オプション（小カード・料金カード下に横並び）
　注釈（オプション下）
PROCESSセクション（TERMSと横並び・左側・PC）：
・ステップ番号：丸バッジ（アクセントカラー）
・お支払いタイミング：¥マークの丸バッジ（サーフェスカラー）で視覚的に区別
TERMSセクション（カードリスト・Processの右横）：
・重要項目はアクセントカラーで強調
・Terms セクションに `id="terms"` を付与（フォームリンクのアンカー用）
CONTACTセクション：
・プライマリボタン＆ボタン下に注釈

### About（about.html）

プロフィール文・使用ソフト・活動履歴

---

## カラーパレット

CSS変数として `style.css` の `:root` に定義すること。

```css
:root {
  --color-bg:        #F6F3F2; /* ページ背景（赤みニュートラル） */
  --color-surface:   #EEE9E8; /* カード・アイコン背景・サブボタン */
  --color-text:      #2E2E2E; /* 本文・ナビ */
  --color-text-sub:  #7A7580; /* キャプション・タグライン・注釈 */
  --color-accent:    #8B3A3A; /* プライマリボタン・強調テキスト・ステップ番号 */
  --color-accent-lt: #C47A7A; /* ボーダー・区切り線・矢印・ドット */
  --color-border:    #D8D0CE; /* セクション区切り・カード枠 */
  --color-dark:      #1E1A1C; /* HOMEイラストエリア背景 */
}
```

---

## タイポグラフィ

```css
/* Google Fonts で読み込む */
@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;1,400\\\\\\\&family=Noto+Sans+JP:wght@400;500\\\\\\\&display=swap');

/* 英字見出し・ページタイトル・セクション名 */
font-family: 'EB Garamond', Georgia, serif;

/* 本文・UI・日本語 */
font-family: 'Noto Sans JP', 'Hiragino Kaku Gothic ProN', sans-serif;
```

|用途|font-family|size|weight|color|letter-spacing|
|-|-|-|-|-|-|
|ページタイトル（WORKS等）|serif|11px|500|`--color-text-sub`|0.14em|
|セクションタイトル（PRICE等）|sans|11px|500|`--color-text`|0.1em|
|名前|sans|15〜22px|500|`--color-text`|0.02em|
|本文|sans|13〜14px|400|`--color-text`|-|
|注釈・キャプション|sans|9〜10px|400|`--color-text-sub`|-|
|copyright|sans|9〜10px|400|`--color-text-sub`|-|

---

## コンポーネント仕様

### ヘッダー

```css
height: 42px;
background: var(--color-bg);
/* border-bottom: なし（線なし） */
padding: 0 20px;
position: fixed;
top: 0;
z-index: 100;
display: flex;
align-items: center;
```

### プライマリボタン

```css
background: var(--color-accent);
color: var(--color-bg);
border-radius: 7px;
padding: 10px 20px;
font-size: 12px;
font-weight: 500;
border: none;
cursor: pointer;
```

### サブボタン（リンクボタン）

```css
background: var(--color-surface);
border: 0.5px solid var(--color-accent-lt);
color: var(--color-text);
border-radius: 7px;
padding: 8px 14px;
font-size: 12px;
```

### SNSアイコン

```css
position: relative;
width: 20px;
height: 20px;
display: flex;
align-items: center;
justify-content: center;
/* SVGアイコン: stroke: var(--color-accent), width: 16px */

/* hover時はsvgのみ opacity: 0.55（tooltipに継承させない） */
.sns-icon:hover svg { opacity: 0.55; }
```

### ツールチップ

```css
position: absolute;
bottom: 34px;
left: 50%;
transform: translateX(-50%);
background: var(--color-text);
color: var(--color-bg);
font-size: 8px;
padding: 3px 6px;
border-radius: 3px;
white-space: nowrap;
opacity: 0;
pointer-events: none;
transition: opacity 0.15s;

/* hover時 */
opacity: 1;
```

### バッジ

```css
font-size: 9px;
color: var(--color-accent);
border: 0.5px solid var(--color-accent-lt);
border-radius: 20px;
padding: 2px 8px;
background: var(--color-bg);
```

### セクション区切り（タイトル＋ライン）

```css
.section-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}
.section-line {
  flex: 1;
  height: 0.5px;
  background: var(--color-accent-lt);
  opacity: 0.3;
}
```

### 更新履歴

```css
.card-updates {
  position: absolute;
  bottom: 12px;
  left: 24px;
  right: 24px;
  border-top: 0.5px solid var(--color-border);
  padding-top: 7px;
}
.card-update-title {
  font-size: 8px;
  letter-spacing: 0.1em;
  color: var(--color-text-sub);
  margin-bottom: 5px;
  font-family: 'EB Garamond', Georgia, serif;
}
.card-update-list { list-style: none; padding: 0; margin: 0; }
.card-update-item {
  display: flex;
  gap: 8px;
  font-size: 9px;
  color: var(--color-text-sub);
  line-height: 1.7;
}
.card-update-date { color: var(--color-accent-lt); flex-shrink: 0; }
```

### 料金カード

```css
background: var(--color-surface);
border-radius: 7px;
padding: 11px;
/* ハイライトカード（一枚絵）のみ追加 */
border: 0.5px solid var(--color-accent-lt);
```

### オプションカード

```css
background: var(--color-bg);
border: 0.5px solid var(--color-border);
border-radius: 6px;
padding: 8px 10px;
display: flex;
justify-content: space-between;
align-items: center;
```

### PROCESSステップ番号

```css
/* 通常ステップ */
width: 22px; height: 22px;
border-radius: 50%;
background: var(--color-accent);
color: var(--color-bg);
font-size: 10px;
font-weight: 500;

/* 支払いステップ */
background: var(--color-surface);
border: 1px solid var(--color-accent-lt);
color: var(--color-accent);
```

### TERMSカード

```css
background: var(--color-surface);
border-radius: 5px;
padding: 7px 10px;
display: flex;
gap: 8px;
/* ドット */
.term-dot {
  width: 4px; height: 4px;
  border-radius: 50%;
  background: var(--color-accent-lt);
  flex-shrink: 0;
  margin-top: 5px;
}
/* 重要テキスト強調 */
span { color: var(--color-accent); font-weight: 500; }
```

### 左下固定ウィジェット

```css
position: fixed;
bottom: 16px;
left: 16px;
z-index: 90;
opacity: 0;
transform: translateY(8px);
transition: opacity 0.3s ease, transform 0.3s ease;

/* 表示時（JS で .is-visible を付与） */
.is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

### スマホHOMEレイアウト

```css
/* モバイル時: home-wrapperの高さ制限を解除 */
.home-wrapper { height: auto; max-height: none; padding-top: 0; }
.home-main    { flex: 0 0 auto; overflow: visible; }
.home-illust  { order: -1; flex: 0 0 50vh; }      /* イラストを上 */
.home-card    { order: 0; flex: 0 0 auto; }        /* 名刺を下 */

/* プレビューセクション（デスクトップでは display:none） */
.home-mobile-sections { display: none; padding: 0 20px; }
.home-preview { padding: 18px 0; border-top: 0.5px solid var(--color-border); }
.home-preview-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
.home-preview-title  { font-family: 'EB Garamond', serif; font-size: 11px; font-weight: 500; color: var(--color-text-sub); letter-spacing: 0.14em; }
.home-preview-more   { font-size: 9px; color: var(--color-accent); text-decoration: none; }
.home-preview-desc   { font-size: 12px; color: var(--color-text-sub); line-height: 1.7; }
.home-preview-thumbs { display: grid; grid-template-columns: repeat(3, 1fr); gap: 3px; margin-top: 10px; }
.home-preview-thumb  { aspect-ratio: 3/4; object-fit: cover; width: 100%; background: var(--color-surface); }

@media (max-width: 768px) {
  .home-mobile-sections { display: block; }
}
```


---

## レスポンシブ方針

```css
/* スマホ */
@media (max-width: 768px) {
  /* HOME：縦スクロール（イラスト上・名刺下・プレビューセクション） */
  /* Works：2列グリッド */
  /* Commission：カード縦積み・PROCESS+TERMS縦積み */
  /* 左下ウィジェット：非表示（HOMEが常に見える想定） */
}

/* タブレット */
@media (min-width: 769px) and (max-width: 1024px) {
  /* Works：3列グリッド */
  /* Commission：料金カード2列×2行 */
}

  /* PC */
@media (min-width: 1025px) {
  /* HOME：左右2分割 */
  /* Works：4列グリッド */
  /* Commission：料金カード4列・PROCESS+TERMS横並び */
}
```

