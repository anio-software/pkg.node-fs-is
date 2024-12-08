import {useContext, type RuntimeWrappedContextInstance} from "@fourtune/realm-js/runtime"

import type {AnioJsDependencies} from "#~synthetic/async.sync/Dependencies.d.mts"

export type {AnioJsDependencies}

export async function implementation(
	wrapped_context: RuntimeWrappedContextInstance,
	dependencies: AnioJsDependencies,
	input_path: string
) : Promise<boolean> {
	const context = useContext(wrapped_context, 0)

	const path_type = await dependencies.getTypeOfPath(input_path)

	if (path_type === "linkToFile") return true
	if (path_type === "linkToDir") return true
	if (path_type === "brokenLink") return true

	return false
}
