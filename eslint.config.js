// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    type: 'lib',
    pnpm: true,
    rules: {
      "style/quotes": "off",
      "style/comma-dangle": "off",
      "style/no-tabs": "off",
      "style/semi": "off",
      "vue/singleline-html-element-content-newline": "off",
      "vue/html-indent": "off",
      "ts/explicit-function-return-type": "off",
      "pnpm/yaml-no-duplicate-catalog-items": "off",
    }
  },
)
