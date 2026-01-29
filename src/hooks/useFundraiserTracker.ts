import { useQuery } from '@tanstack/react-query';

const TRACKING_URL = "https://assets.mailerlite.com/jsonp/2055231/forms/177851631105214065/takel";

export function useFundraiserTracker() {
    return useQuery({
        queryKey: ['fundraiserTracker'],
        queryFn: async () => {
            const res = await fetch(TRACKING_URL);
            if (!res.ok) {
                throw new Error('Tracker fetch failed');
            }
            return res.text();
        },
        staleTime: Infinity,
        gcTime: 1000 * 60 * 60, // Keep in cache for an hour
        retry: 0,
    });
}
