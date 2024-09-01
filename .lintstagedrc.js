const path = require('path')

const buildEslintCommand = filenames =>
  `next lint --fix --file ${filenames.map(f => path.relative(process.cwd(), f)).join(' --file ')}`

const buildJestCommand = filenames =>
  `npm run test -- --onlyChanged ${filenames.map(f => path.relative(process.cwd(), f)).join(' --file ')}`

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand, buildJestCommand]
}
