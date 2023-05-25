/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    roots: [
        '<rootDir>/src'
    ],
    moduleDirectories: ['node_modules', 'src'],
    transformIgnorePattern: [
        '<rootDir>/node_modules/(?!axios)/'
    ],
    moduleNameMapper: {
        '^axios$': require.resolve('axios'),
    },
    preset: 'ts-jest',
    testEnvironment: 'node'
}
