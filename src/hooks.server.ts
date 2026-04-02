import { dev } from '$app/environment';
import { APP_CONFIG } from '$lib/constants/app';

export async function handle({ event, resolve }) {
    if (dev && event.url.pathname === '/.well-known/appspecific/com.chrome.devtools.json') {
        return new Response(undefined, { status: 404 });
    }

    const response = await resolve(event, {
        transformPageChunk: ({ html }) => html.replace('%lang%', APP_CONFIG.lang)
    });

    return response;
}
