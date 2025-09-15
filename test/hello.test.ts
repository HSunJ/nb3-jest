import { expect, test, describe } from '@jest/globals';
import { hello } from '../src/hello';

// describe('hello function tests', () => {
//     test('return Hello Jest', () => {
//         const value = hello();
//         expect(value).toEqual('Hello Jest');
//     });

//     test('return Hello <name>', () => {
//         const value = hello('TypeScript');
//         expect(value).toEqual('Hello TypeScript');
//     });
// });

describe('Truthy 테스트', () => {
    test('null', () => {
        const n = null;
        expect(n).toBeNull();
        expect(n).toBeDefined();
        expect(n).not.toBeUndefined();
        expect(n).not.toBeTruthy();
        expect(n).toBeFalsy();
    });

    test('zero', () => {
        const z = 0;
        expect(z).not.toBeNull();
        expect(z).toBeDefined();
        expect(z).not.toBeUndefined();
        expect(z).not.toBeTruthy();
        expect(z).toBeFalsy();
    });
})