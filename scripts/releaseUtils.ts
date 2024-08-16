/**
 * modified from https://github.com/vuejs/core/blob/master/scripts/release.js
 */
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import colors from 'picocolors'
import type { ReleaseType } from 'semver'
import { inc as semverInc } from 'semver'
import minimist from 'minimist'
import type { Options as ExecaOptions, ResultPromise } from 'execa'
import { execa } from 'execa'

export const args = minimist(process.argv.slice(2))

export const isDryRun = !!args.dry

if (isDryRun) {
  console.log(colors.inverse(colors.yellow(' DRY RUN ')))
  console.log()
}

export const apps = [
  'nuxt',
  'storybook',
]

export const realPackages = [
  'ui',
  'vitest',
  'pinia-store',
  'eslint-config',
  'tsconfig',
  'css-preset',
]
export const packages = [
  ...apps,
  ...realPackages,
]

export const versionIncrements: ReleaseType[] = [
  'patch',
  'minor',
  'major',
  // 'prepatch',
  // 'preminor',
  // 'premajor',
  // 'prerelease'
]

export async function getPackageInfo(pkgName: string) {
  const projectPath = realPackages.includes(pkgName) ? 'packages/' : 'apps/'
  const pkgDir = path.resolve(__dirname, `../${projectPath}${pkgName}`)

  if (!existsSync(pkgDir))
    throw new Error(`Package ${pkgName} not found`)

  const pkgPath = path.resolve(pkgDir, 'package.json')
  const pkg: {
    name: string
    version: string
    private?: boolean
  } = await import(pkgPath)
  const currentVersion = pkg.version

  if (pkg.private)
    throw new Error(`Package ${pkgName} is private`)

  return {
    pkg,
    pkgName,
    pkgDir,
    pkgPath,
    currentVersion,
  }
}

export function run<EO extends ExecaOptions>(
  bin: string,
  args: string[],
  opts?: EO,
): ResultPromise<EO & (keyof EO extends 'stdio' ? unknown : { stdio: 'inherit' })> {
  return execa(bin, args, { stdio: 'inherit', ...opts }) as any
}

export async function dryRun<EO extends ExecaOptions>(
  bin: string,
  args: string[],
  opts?: EO,
) {
  return console.log(
    colors.blue(`[dryrun] ${bin} ${args.join(' ')}`),
    opts || '',
  )
}

export const runIfNotDry = isDryRun ? dryRun : run

export function step(msg: string) {
  return console.log(colors.cyan(msg))
}

export function getVersionChoices(currentVersion: string) {
  const currentBeta = currentVersion.includes('beta')

  const inc: (i: ReleaseType) => string = i =>
    semverInc(currentVersion, i, 'beta')!

  const versionChoices = [
    {
      title: 'next',
      value: inc(currentBeta ? 'prerelease' : 'patch'),
    },
    ...(currentBeta
      ? [
          {
            title: 'stable',
            value: inc('patch'),
          },
        ]
      : [
          {
            title: 'beta-minor',
            value: inc('preminor'),
          },
          {
            title: 'beta-major',
            value: inc('premajor'),
          },
          {
            title: 'minor',
            value: inc('minor'),
          },
          {
            title: 'major',
            value: inc('major'),
          },
        ]),
    { value: 'custom', title: 'custom' },
  ].map((i) => {
    i.title = `${i.title} (${i.value})`
    return i
  })

  return versionChoices
}

export function updateVersion(pkgPath: string, version: string): void {
  const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8'))
  pkg.version = version
  writeFileSync(pkgPath, `${JSON.stringify(pkg, null, 2)}\n`)
}

export async function publishPackage(
  pkdDir: string,
  tag?: string,
): Promise<void> {
  const publicArgs = ['publish', '--access', 'public']
  if (tag)
    publicArgs.push('--tag', tag)

  await runIfNotDry('npm', publicArgs, {
    stdio: 'pipe',
    cwd: pkdDir,
  })
}

export async function getLatestTag(pkgName: string) {
  const tags = (await run('git', ['tag'], { stdio: 'pipe' })).stdout
    .split(/\n/)
    .filter(Boolean)
  const prefix = pkgName === 'vite' ? 'v' : `${pkgName}@`
  return tags
    .filter(tag => tag.startsWith(prefix))
    .sort()
    .reverse()[0]
}

export async function logRecentCommits(pkgName: string) {
  const tag = await getLatestTag(pkgName)
  if (!tag)
    return
  const sha = await run('git', ['rev-list', '-n', '1', tag], {
    stdio: 'pipe',
  }).then(res => res.stdout.trim())
  console.log(
    colors.bold(
      `\n${colors.blue('i')} Commits of ${colors.green(
        pkgName,
      )} since ${colors.green(tag)} ${colors.gray(`(${sha.slice(0, 5)})`)}`,
    ),
  )
  await run(
    'git',
    [
      '--no-pager',
      'log',
      `${sha}..HEAD`,
      '--oneline',
      '--',
      `packages/${pkgName}`,
    ],
    { stdio: 'inherit' },
  )
  console.log()
}
