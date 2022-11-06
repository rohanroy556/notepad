export interface DecodedToken<T> {
    header: {
        alg: string;
        typ: string;
    };
    payload: T;
    signature: string;
}
