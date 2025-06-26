import {
	type EnkoreJSRuntimeContextOptions,
	createContext
} from "@anio-software/enkore.js-runtime"

import type {AnioJsDependencies} from "#~synthetic/async.sync/Dependencies.d.mts"
//>import type {AnioJsDependencies} from "#~synthetic/async.sync/DependenciesSync.d.mts"

export type {AnioJsDependencies}

export async function __implementation(
//>export function __implementationSync(
	contextOptions: EnkoreJSRuntimeContextOptions,
	dependencies: AnioJsDependencies,
	input_path: string
) : Promise<boolean> {
//>) : boolean {
	const context = createContext(contextOptions, 0)

	const path_type = await dependencies.getTypeOfPath(input_path)
//>	const path_type = dependencies.getTypeOfPath(input_path)

	if (path_type === "regularFile") return true
	if (path_type === "linkToFile") return true

	return false
}
