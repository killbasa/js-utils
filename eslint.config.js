import eslintConfig from '@killbasa/eslint-config';

/**
 * @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigArray}
 */
const config = [
	...eslintConfig,
	{
		name: 'base-ignore',
		ignores: ['.husky/', 'node_modules/', '**/dist/', '**/*.d.ts']
	}
];

export default config;
