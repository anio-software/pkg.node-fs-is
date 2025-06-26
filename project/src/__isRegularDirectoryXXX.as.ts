import type {EnkoreJSRuntimeContextOptions} from "@anio-software/enkore.js-runtime"

import type {__EnkoreFunctionDependencies} from "#~src/Dependencies.ts"
//>import type {__EnkoreFunctionDependencies} from "#~src/DependenciesSync.ts"

export type {__EnkoreFunctionDependencies}

export async function __implementation(
//>export function __implementationSync(
	contextOptions: EnkoreJSRuntimeContextOptions,
	dependencies: __EnkoreFunctionDependencies,
	input_path: string
) : Promise<boolean> {
//>) : boolean {
	const path_type = await dependencies.getTypeOfPath(input_path)
//>	const path_type = dependencies.getTypeOfPath(input_path)

	if (path_type === "dir:regular") return true

	return false
}
