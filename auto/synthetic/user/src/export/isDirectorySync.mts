import {createContext} from "@fourtune/realm-js/v0/runtime"

import {isDirectorySyncFactory as factory} from "#~synthetic/user/export/isDirectorySyncFactory.mts"

export function isDirectorySync(input_path: string) : boolean {
	const __fnImplementation = factory(createContext())

	return __fnImplementation(input_path)
}
