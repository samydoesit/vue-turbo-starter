module.exports = {
  // settings: {
  //   emphasis: '_',
  //   bullet: '*',
  //   rule: '-',
  // },
  plugins: [
    "remark-lint",
    "remark-lint-no-table-indentation",
    "remark-lint-rule-style",
    "remark-lint-table-cell-padding",
    "remark-lint-table-pipe-alignment",
    "remark-lint-table-pipes",
    "remark-preset-lint-consistent",
    "remark-preset-lint-markdown-style-guide",
    "remark-preset-lint-recommended",
    ["remark-lint-list-item-content-indent", false],
    ["remark-lint-list-item-indent", false],
    ["remark-lint-list-item-spacing", false],
    ["remark-lint-maximum-line-length", false],
    ["remark-lint-no-file-name-mixed-case", false],
    ["remark-lint-ordered-list-marker-value", "ordered"],
    ["remark-lint-unordered-list-marker-style", "consistent"],
  ]
}
