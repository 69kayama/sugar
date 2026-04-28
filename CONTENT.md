# CONTENT.md — テキストコンテンツ定義

HTMLの各ページに表示するテキストをすべてここで管理します。
コンテンツを変更する場合はこのファイルを先に更新し、HTMLに反映してください。

---

## ファイル構成
```
  /
  ├── index.html
  ├── works.html
  ├── commission.html
  ├── about.html
  ├── css/
  │   ├── style.css          # 共通（ヘッダー・ウィジェット・変数定義）
  │   ├── home.css
  │   ├── works.css
  │   ├── commission.css
  │   └── about.css
  ├── js/
  │   ├── main.js            # 共通（ヘッダー・左下ウィジェット）
  │   └── works.js           # ギャラリー・フィルター
  └── assets/
      ├── avatar.png         # アバター画像（差し替え用）
      └── works/             # 作品画像フォルダ
```
---

## 共通（全ページ）

### サイト情報
```
サイト名（タブタイトル用）: sugar
著作権表記:               © 2026 鹿山ろく
```

### ナビゲーション
```
Home        → index.html
Works       → works.html
Commission  → commission.html
About       → about.html
```

### ヘッダー（左側ブランド）
```
アバター画像: assets/avatar.png
表示名:       sugar - ROKU KAYAMA
```

### SNSリンク（ヘッダー名刺・左下ウィジェット共通）
```
X:      https://x.com/69kayama
Xfolio: https://xfolio.jp/portfolio/69kayama
Skeb:   https://skeb.jp/@yourname        （差し替え）
Mail:   69kayama@gmail.com
```

---

## HOME（index.html）

### 名刺エリア（左カラム）
```
アバター画像: assets/avatar.png
名前:         鹿山ろく / Roku KAYAMA
肩書き1:      Illustrator
バッジ1:      お仕事受付中
バッジ2:      Skeb受付中
```

### 更新履歴（名刺エリア下部）
```
2026.04  サイトをオープンしました
```

### ヒーロースライダー（右カラム）
```
スライド1: assets/works/hero.png         （差し替え）
スライド2: assets/works/hero.png         （差し替え）
スライド3: assets/works/hero.png         （差し替え）
```

### スマホ追加セクション（モバイルのみ表示）

#### WORKS プレビュー
```
説明文:         お仕事絵やファンアートなど
サムネイル:     assets/works/hero.png × 3（差し替え）
リンクテキスト: view more
リンク先:       works.html
```

#### COMMISSION プレビュー
```
説明文:         イラストのご依頼を受け付け中です。
リンクテキスト: view more
リンク先:       commission.html
```

#### ABOUT プレビュー
```
説明文:         キャラクターの内面や空気感を大切に、退廃的で静謐な世界観を描いています。
リンクテキスト: view more
リンク先:       about.html
```
---

## WORKS（works.html）

### ページタイトル
```
WORKS
```

### 説明文
```
お仕事絵やファンアートなど​
```

### カテゴリフィルター
```
全て
お仕事        （category: commission）
オリジナル    （category: original）
ファンアート  （category: fanart）
```

### 作品データ（works.js で管理）
```
No.01  タイトル: 作品タイトル 01  画像: assets/works/hero.png  カテゴリ: fanart    （差し替え）
No.02  タイトル: 作品タイトル 02  画像: assets/works/hero.png  カテゴリ: original  （差し替え）
No.03  タイトル: 作品タイトル 03  画像: assets/works/hero.png  カテゴリ: commission（差し替え）
No.04  タイトル: 作品タイトル 04  画像: assets/works/hero.png  カテゴリ: fanart    （差し替え）
No.05  タイトル: 作品タイトル 05  画像: assets/works/hero.png  カテゴリ: original  （差し替え）
No.06  タイトル: 作品タイトル 06  画像: assets/works/hero.png  カテゴリ: fanart    （差し替え）
No.07  タイトル: 作品タイトル 07  画像: assets/works/hero.png  カテゴリ: commission（差し替え）
No.08  タイトル: 作品タイトル 08  画像: assets/works/hero.png  カテゴリ: fanart    （差し替え）
No.09  タイトル: 作品タイトル 09  画像: assets/works/hero.png  カテゴリ: original  （差し替え）
No.10  タイトル: 作品タイトル 10  画像: assets/works/hero.png  カテゴリ: commission（差し替え）
No.11  タイトル: 作品タイトル 11  画像: assets/works/hero.png  カテゴリ: fanart    （差し替え）
No.12  タイトル: 作品タイトル 12  画像: assets/works/hero.png  カテゴリ: original  （差し替え）
```

---

## COMMISSION（commission.html）

### ページタイトル
```
COMMISSION
```

### 説明文
```
お仕事のご依頼について
ご依頼はフォームまたはメールよりお願いします
```


### PRICE — 料金カード
```
メニュー:   上半身イラスト（キャラのみ）← ハイライトカード
用途:       配信サムネ / SNSヘッダー / 歌ってみた
料金:       ¥8,000〜¥15,000

メニュー:   全身イラスト（キャラのみ）  ← ハイライトカード
用途:       配信立ち絵 / TRPG立ち絵 / キャラデザ
料金:       ¥15,000〜¥30,000

メニュー:   一枚絵（背景あり）          ← ハイライトカード
用途:       キービジュアル / MV用 / ファンクラブ特典
料金:       ¥20,000〜¥50,000

メニュー:   顔アイコン（キャラのみ）
用途:       SNSアイコン
料金:       ¥3,000〜¥5,000

メニュー:   簡易イラスト（キャラのみ）
用途:       SNS投稿 / 落書き風
料金:       ¥5,000〜¥10,000

メニュー:   ミニキャラ（1.5-3等身キャラ）
用途:       SNSアイコン / グッズ / スタンプ
料金:       顔のみ：¥4,000〜¥6,000
	　　全身：¥9,000〜¥14,000
	　　一枚絵：¥18,000〜¥25,000
```

### PRICE — オプション
```
差分          ¥2,000〜 / 種
背景追加      ¥5,000〜
複数キャラ    ¥3,000〜 / 人    備考: 2人目以降
商用利用      +30%
動くイラスト  応相談            備考: ループアニメーション
特急対応      応相談
```

### PRICE — 注釈
```
※ 上記用途・金額は一例です
※ 打合せ不要のおまかせイラストのご依頼はSkebをご利用ください
```

### PROCESS
```
Step 1  ヒアリング・お見積り     　　　→ 内容・料金をすり合わせ
Step 2  仮ラフ制作                     → 方向性のご確認
        ¥ お支払い（半額または全額）
Step 3  本ラフ制作                     → 細部のご確認・調整
Step 4  清書
        ¥ お支払い（あれば残額）
Step 5  納品
        ※ ラフは確認用のため納品物に含まれません
```

### TERMS（id="terms"）
```
・内容・用途により料金が変動します。
  配信・動画・グッズ等の収益が発生する用途は商用利用扱い（+30%）となります。  ← 強調

・ラフ段階（Process 2〜3）での調整・修正は柔軟に対応します。
  清書後の大幅な修正は1回までとします。

・清書開始後のキャンセルはお受けしかねます（返金対応不可）。  ← 強調

・納期は内容・状況により変動しますが、通常ご依頼確定より30日以上いただきます。特急対応は応相談。

・web用PNG形式で納品いたします。PSDやタイプラプスは別途応相談。
　印刷用途は依頼時に必ずその旨をお伝えください。

・著作権の譲渡は行っておりません。  ← 強調
  無断での二次配布・改変・AI学習は固く禁止いたします。

・制作実績として公開させていただきます。公開時期をご指定いただけます。
  公開不可の場合は事前にご相談ください。

・成人向けは別名義にて承りますのでご相談ください。

・上記・メニューに記載のない内容は都度ご相談ください。
```

### CONTACT
```
ボタンテキスト: 依頼フォームはこちら ↗
リンク先:       https://forms.gle/uMex8CxiBvQkbam7A
注釈:           ご依頼の前に利用規約をご確認ください　←「利用規約」に#termsセクションのリンク
```

---

## ABOUT（about.html）

### ページタイトル
```
ABOUT
```

### プロフィール
```
アバター画像: assets/avatar.png
名前:         鹿山ろく / Roku KAYAMA
肩書き:       Illustrator

プロフィール文1:
  キャラクターの内面や空気感を大切に、退廃的で静謐な世界観を描いています。

プロフィール文2:
  VTuber・配信者向けの立ち絵・サムネイル制作から、キービジュアル・MV用イラストまで幅広く対応しています。
  ご依頼詳細はCommissionページよりどうぞ。
```

### SOFTWARE
```
Clip Studio Paint
Spine
```

### HISTORY
```
2026  活動を開始
```
