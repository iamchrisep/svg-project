/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    roots: [
        '<rootDir>/src'
    ],
    moduleDirectories: ['node_modules', 'src'],
    preset: 'ts-jest',
    testEnvironment: 'node'
}
