// 宮原リハ（架空の訪問リハビリ事業所）のサイト共通データ。
// 設計図 第1節「事業所の前提（ダミー設定）」に対応。すべてダミー値。
export const site = {
  name: "宮原リハ",
  tagline: "訪問リハビリテーション",
  address: "静岡県伊東市〇〇町 1-2-3",
  area: "伊東市を中心とした近隣地域",
  tel: "0557-00-0000",
  hours: "平日 9:00–18:00",
};

// 内部リンクを base（astro.config の base）付きに変換するヘルパー。
// GitHub Pages のプロジェクトサイトでは base="/claude-course-astro-demo" が付くため、
// 絶対パス（"/service" 等）はそのままだとリンク切れになる。必ずこの url() を通す。
// 開発時（base 未設定）は BASE_URL="/" なのでそのまま動く。
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, ""); // 末尾スラッシュを除去
  if (path === "/") return `${base}/`;
  return `${base}${path}`;
}

// 設計図 4-1 ヘッダーのグローバルナビ。
// 第1弾では「トップ」「サービス内容」「お問い合わせ」のみ実体があるため、
// 未実装ページ（流れ・エリア・スタッフ・アクセス）はトップ内アンカーへ暫定リンク。
// 各ページ実装時に href を差し替える。
export const nav = [
  { label: "トップ", href: "/" },
  { label: "サービス内容", href: "/service" },
  { label: "ご利用の流れ", href: "/#flow" },
  { label: "対応エリア", href: "/#area" },
  { label: "アクセス", href: "/#access" },
  { label: "お問い合わせ", href: "/#contact" },
];
