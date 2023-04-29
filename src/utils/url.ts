const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH;

export const url = (pathname: string): string => `${BASE_URL}${BASE_PATH}${pathname}`;
