import type {EnkoreJSRuntimeContextOptions} from "@anio-software/enkore.js-runtime"

import type {__EnkoreFunctionDependencies} from "#~src/Dependencies.ts"
//>import type {__EnkoreFunctionDependencies} from "#~src/DependenciesSync.ts"

export type {__EnkoreFunctionDependencies}

export async function __implementation(
//>export function __implementationSync(
	contextOptions: EnkoreJSRuntimeContextOptions,
	dependencies: __EnkoreFunctionDependencies,
	inputPath: string
) : Promise<boolean> {
//>) : boolean {
	const pathType = await dependencies.getTypeOfPath(inputPath)
//>	const pathType = dependencies.getTypeOfPath(inputPath)

	if (pathType === "file:regular") return true
	if (pathType === "link:file") return true

	return false
}
