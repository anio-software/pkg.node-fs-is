import {implementation, type AnioJsDependencies} from "#~synthetic/async.sync/isDirectory.mts"
import type {RuntimeWrappedContextInstance} from "@fourtune/realm-js/runtime"
import {getProject} from "@fourtune/realm-js/v0/project"

// vvv dependencies declared via AnioJsDependencies type
import {getTypeOfPathFactory} from "@aniojs/node-fs-path-type"
// ^^^ dependencies declared via AnioJsDependencies type

// vvv--- types needed for implementation
/* couldn't find a user defined type named 'Promise' at the top level */
// ^^^--- types needed for implementation

declare function isDirectory(
	input_path: string
) : Promise<boolean>

/**
 * @brief
 * Create an instance of the function 'isDirectory'.
 *
 * @param user
 * Options object (see @fourtune/realm-js/v0/runtime) or an already
 * created context with createContext().
 * This parameter is optional.
 *
 * @return
 * An instance of the function 'isDirectory'.
 */
export function isDirectoryFactory(context: RuntimeWrappedContextInstance) : typeof isDirectory {
	const dependencies : AnioJsDependencies = {
		getTypeOfPath: getTypeOfPathFactory(context)
	}

	const project = getProject()
	const local_context : RuntimeWrappedContextInstance = {
		...context,
		_package: {
			name: project.package_json.name,
			version: project.package_json.version,
			author: project.package_json.author,
			license: project.package_json.license
		}
	}

	return async function isDirectory(input_path: string) : Promise<boolean> {
		return await implementation(local_context, dependencies, input_path)
	}
}
