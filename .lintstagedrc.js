const path = require('path')
const { ESLint } = require('eslint')

const buildEslintCommand = async (files) => {
  const eslint = new ESLint()
  const isIgnored = await Promise.all(
    files.map((filePath) => {
      return eslint.isPathIgnored(filePath)
    }),
  )
  const filteredFiles = files
    .filter((_, i) => !isIgnored[i])
    .map((f) => path.relative(process.cwd(), f))
  return `next lint --fix --file ${filteredFiles.join(' --file ')}`
}

module.exports = {
  '**/*.{js,jsx,ts,tsx}': async (files) => await buildEslintCommand(files),
  '**/*.{css,scss}': ['yarn lint:style:fix'],
  '**/*.{ts,tsx,css,scss}': ['yarn format'],
}
