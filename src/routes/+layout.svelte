<script lang="ts">
    import { page } from '$app/state';

    import favicon from '$lib/assets/favicon.ico';
    import { APP_CONFIG } from '$lib/constants/app';

    import './layout.css';

    let { children } = $props();

    const meta = $derived(page.data.meta || {});
    const title = $derived(meta.title ? `${meta.title} | ${APP_CONFIG.name}` : APP_CONFIG.name);
    const description = $derived(meta.description || APP_CONFIG.description);
    const ogImage = $derived.by(() => {
        const imagePath = meta.ogImage || APP_CONFIG.ogImage;
        if (!imagePath) return '';

        // 如果已經是絕對網址 (http:// 或 https://)，直接回傳
        if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
            return imagePath;
        }

        // 確保 APP_CONFIG.url 與 imagePath 之間只有一個斜線
        const baseUrl = APP_CONFIG.url.endsWith('/') ? APP_CONFIG.url.slice(0, -1) : APP_CONFIG.url;
        const normalizedPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;

        return `${baseUrl}${normalizedPath}`;
    });
    const ogUrl = $derived.by(() => {
        const baseUrl = APP_CONFIG.url.endsWith('/') ? APP_CONFIG.url.slice(0, -1) : APP_CONFIG.url;
        if (meta.slug) {
            return `${baseUrl}/posts/${meta.slug}`;
        }
        return `${baseUrl}${page.url.pathname}`;
    });
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="author" content={APP_CONFIG.author} />
    <meta name="keywords" content={APP_CONFIG.keywords} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content={meta.slug ? 'article' : 'website'} />
    <meta property="og:url" content={ogUrl} />
    <meta property="og:image" content={ogImage} />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={ogImage} />

    <link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
