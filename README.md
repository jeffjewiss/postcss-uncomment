# PostCSS Uncomment [<img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS Logo" width="90" height="90" align="right">][PostCSS]

[![NPM Version][npm-img]][npm-url]
[![Linux Build Status][cli-img]][cli-url]

[PostCSS Uncomment] lets you turn a comment into a CSS declaration.

```scss
// #uncomment @import "skip-sass.css";

/* becomes */

@import "skip-sass.css";
```

```css
/* #uncomment @import "special-import"; */

/* becomes */

@import “special-import”;
```


This plugin was created while working on migrating a project from Sass to Postcss. Challenges arose due to the two types of imports being incompatible. The goal of this plugin is to avoid the situation of having to convert all of your styles in one change.

This plugin allows you to have imports for Sass and CSS files at the same time by hiding the CSS imports, running Node-Sass, un-hiding the CSS imports (by running this plugin) and finally running Postcss plugins (including `postcss-import`) on the remaining styles.

You could have imports that look like:

```scss
@import "sass-file";
// #uncomment @import "css-file.css";
```

and by running: `postcss-sass` -> `postcss-uncomment` -> `postcss-import` -> `...`

these files could be properly processed with an expected output.


[npm-url]: https://www.npmjs.com/package/postcss-uncomment
[npm-img]: https://img.shields.io/npm/v/postcss-uncomment.svg
[cli-url]: https://travis-ci.org/jeffjewiss/postcss-uncomment
[cli-img]: https://img.shields.io/travis/jeffjewiss/postcss-uncomment.svg
[PostCSS Uncomment]: https://github.com/jeffjewiss/postcss-uncomment
[PostCSS]: https://github.com/postcss/postcss
