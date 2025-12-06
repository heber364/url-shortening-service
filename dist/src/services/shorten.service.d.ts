export declare class ShortenService {
    create(originalUrl: string): Promise<{
        original: string;
        shortcode: string;
    }>;
    get(shortcode: string): Promise<{
        url: string;
    }>;
    update(shortcode: string): Promise<void>;
    delete(shortcode: string): Promise<void>;
    getStats(shortcode: string): Promise<void>;
}
//# sourceMappingURL=shorten.service.d.ts.map