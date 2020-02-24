import nodeResolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import { string } from "rollup-plugin-string";

export default [{
    input: 'src/client/index.ts',
    treeshake: true,
    output: {
        file: 'src/client/index.js',
        format: 'esm',
        module: 'es2015'
    },
    plugins: [
        postcss({
            extract: false,
            modules: false,
            use: [
                ['sass', {
                    includePaths: ['src/client/style']
                }]
            ],
            minimize: true
        }),
        string({
            include: ["**/*.html"],
        }),
        nodeResolve({
            mainFields: ['module', 'jsnext']
        }),
        typescript()
    ],
    onwarn: function (message) {

        console.log(message);

    }
}]