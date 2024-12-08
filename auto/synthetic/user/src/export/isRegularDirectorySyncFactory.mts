import {implementation, type AnioJsDependencies} from "#~synthetic/async.sync/isRegularDirectorySync.mts"
import type {RuntimeWrappedContextInstance} from "@fourtune/realm-js/runtime"
import {getProject} from "@fourtune/realm-js/v0/project"

// vvv dependencies declared via AnioJsDependencies type
import {getTypeOfPathSyncFactory} from "@aniojs/node-fs-path-type"
// ^^^ dependencies declared via AnioJsDependencies type

declare function isRegularDirectorySync(
	input_path: string
) : boolean

/**
 * @brief
 * Create an instance of the function 'isRegularDirectorySync'.
 *
 * @param user
 * Options object (see @fourtune/realm-js/v0/runtime) or an already
 * created context with createContext().
 * This parameter is optional.
 *
 * @return
 * An instance of the function 'isRegularDirectorySync'.
 */
export function isRegularDirectorySyncFactory(context: RuntimeWrappedContextInstance) : typeof isRegularDirectorySync {
	const dependencies : AnioJsDependencies = {
		getTypeOfPath: getTypeOfPathSyncFactory(context)
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

	return function isRegularDirectorySync(input_path: string) : boolean {
		return implementation(local_context, dependencies, input_path)
	}
}
