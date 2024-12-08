import {useContext, type RuntimeWrappedContextInstance} from "@fourtune/realm-js/runtime"

import type {AnioJsDependencies} from "#~synthetic/async.sync/Dependencies.d.mts"
//>import type {AnioJsDependencies} from "#~synthetic/async.sync/DependenciesSync.d.mts"

export type {AnioJsDependencies}

export async function implementation(
//>export function implementation(
	wrapped_context: RuntimeWrappedContextInstance,
	dependencies: AnioJsDependencies,
	input_path: string
) : Promise<boolean> {
//>) : boolean {
	const context = useContext(wrapped_context, 0)

	const path_type = await dependencies.getTypeOfPath(input_path)
//>	const path_type = dependencies.getTypeOfPath(input_path)

	if (path_type === "regularFile") return true

	return false
}
