import { env } from '$env/dynamic/public';

/**
 * 應用相關設定
 */
export const APP_CONFIG = {
    // 應用名稱
    name: env.PUBLIC_APP_NAME || 'Vite Svelte Kit',
    // 應用描述
    description: env.PUBLIC_APP_DESCRIPTION || 'A SvelteKit template.',
    // 應用網址
    url: env.PUBLIC_APP_URL || 'https://your-domain.com',
    // 預設作者
    author: env.PUBLIC_APP_AUTHOR || 'Your Name',
    // 預設關鍵字
    keywords: env.PUBLIC_APP_KEYWORDS || 'svelte, sveltekit, vite, typescript',
    // 預設 OG 圖片
    ogImage: env.PUBLIC_APP_OG_IMAGE || '/assets/og-image.jpg',
    // 預設語言
    lang: env.PUBLIC_APP_LANG || 'zh-Hant'
};
