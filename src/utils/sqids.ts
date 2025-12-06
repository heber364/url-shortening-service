import Sqids from 'sqids';

const ALPHABET = process.env.SQIDS_ALPHABET || 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

export const sqids = new Sqids({
  alphabet: ALPHABET,
  minLength: 6,
});

export const generateShortCode = (id: number): string => {
  return sqids.encode([id]);
};

export const decodeShortCode = (code: string): number  => {
  const decoded = sqids.decode(code);
  return decoded[0] as number;
};