import { useQuery } from '@tanstack/react-query';

const TRACKING_URL = "https://assets.mailerlite.com/jsonp/2055231/forms/177848637564389359/takel";

export function useMailerLiteTracker() {
    return useQuery({
        queryKey: ['mailerLiteTracker'],
        queryFn: async () => {
            // Use no-cors to allow the request to potentially fail silently if CORS is blocked, 
            // but still attempt the network call which is what the tracker counts.
            // Note: JSONP usually requires script injection, but the original code used fetch.
            const res = await fetch(TRACKING_URL);
            if (!res.ok) {
                // MailerLite might return opaque responses or 404s for pixels, but we'll try/catch standard
                throw new Error('Tracker fetch failed');
            }
            return res.text();
        },
        // Only fire this once per session/mount lifecycle ideally
        staleTime: Infinity,
        gcTime: 1000 * 60 * 60, // Keep in cache for an hour
        retry: 0,
    });
}
