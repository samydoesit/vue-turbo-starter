// loop over package.jsons, patch local rollercoaster package dependency versions back to workspace:* protocol
import { writeFileSync } from 'node:fs'

import { type Project, findWorkspacePackagesNoCheck } from '@pnpm/find-workspace-packages'

async function main() {
  const packages: Record<string, Project['manifest']> = {}

  const workspacePackages = (await findWorkspacePackagesNoCheck('.')).filter(pkg => pkg.dir !== '.') // exclude root package.json

  const versionMap = workspacePackages.map((pkg) => {
    packages[pkg.dir] = pkg.manifest
    return { [pkg.manifest.name]: pkg.manifest.version }
  }).reduce((acc, cur) => ({ ...acc, ...cur }), {})

  // Loop over and patch versions
  Object.entries(packages).forEach(([pkgDir, pkgJson]) => {
    if (pkgJson.dependencies) {
      pkgJson.dependencies = Object.assign(
        pkgJson.dependencies,
        ...Object.entries(pkgJson.dependencies).map(([name, version]) => ({
          [name]: versionMap[name] ? 'workspace:*' : version,
        })),
      )
    }

    if (pkgJson.devDependencies) {
      pkgJson.devDependencies = Object.assign(
        pkgJson.devDependencies,
        ...Object.entries(pkgJson.devDependencies).map(([name, version]) => ({
          [name]: versionMap[name] ? 'workspace:*' : version,
        })),
      )
    }

    writeFileSync(
    `${pkgDir}/package.json`,
    `${JSON.stringify(pkgJson, undefined, 2)}\n`,
    )
  })
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
