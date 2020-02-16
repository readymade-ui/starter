import nodeResolve from 'rollup-plugin-node-resolve';

module.exports = {
    input: 'out-tsc/client/index.js',
    output: {
      file: 'out-tsc/client/index.js',
      format: 'es'
    },
    plugins: [
        nodeResolve({
            mainFields: ['module', 'jsnext']
        })
    ]
  };