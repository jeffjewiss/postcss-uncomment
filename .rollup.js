import babel from 'rollup-plugin-babel';

export default {
	input: 'index.js',
	output: { file: 'index.bundle.js', format: 'cjs' },
	plugins: [
		babel({
      babelrc: false,
			presets: [
        ['@babel/preset-env', { modules: false }]
			]
		})
	]
};
