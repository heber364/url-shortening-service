export declare class ShortenService {
    generateShortUrl(originalUrl: string): Promise<{
        original: string;
        shortcode: string;
    }>;
    getOriginalUrl(shortcode: string): Promise<{
        url: string;
    }>;
}
//# sourceMappingURL=shorten.service.d.ts.map