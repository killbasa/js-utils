module.exports = {
	extends: ['@killbasa/eslint-config'],
	parserOptions: {
		project: './tsconfig.json',
		tsconfigRootDir: __dirname
	}
};
