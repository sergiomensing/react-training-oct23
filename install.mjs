import chalk from 'chalk'
import fs from 'fs'
import path from 'path'
import shell from 'shelljs'

import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const ROOT = path.join(__dirname)
const EXERCISES_ROOT = path.join(__dirname, 'exercises')
const API_ROOT = path.join(__dirname, 'api')
// const FINAL_ROOT = path.join(__dirname, 'final')

function installer(target, dir) {
  if (dir[0] === '.') return
  console.log(chalk.yellow(`Installing ${dir}...`))
  shell.cd(target)
  shell.exec('yarn install')
  console.log(chalk.green(`Finished ${dir}...`))
}

shell.exec('npm i --location=global yarn')

shell.cd(ROOT)
installer(API_ROOT, API_ROOT)

// shell.cd(ROOT)
// installer(FINAL_ROOT, FINAL_ROOT)

shell.cd(ROOT)
const exercises = fs.readdirSync(EXERCISES_ROOT)
exercises.forEach((dir, index) => {
  const target = path.join(EXERCISES_ROOT, dir)
  if (fs.existsSync(target)) {
    installer(target, dir)
  }
})
