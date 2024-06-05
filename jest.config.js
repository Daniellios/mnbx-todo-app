export default {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '\\.(css|less)$': '<rootDir>/node_modules/tailwindcss',
    },
    setupFilesAfterEnv: ['<rootDir>/src/jest.setup.ts'],
};
