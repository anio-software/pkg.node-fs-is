import {createContext} from "@fourtune/realm-js/v0/runtime"

import {isRegularDirectorySyncFactory as factory} from "#~synthetic/user/export/isRegularDirectorySyncFactory.mts"

export function isRegularDirectorySync(input_path: string) : boolean {
	const __fnImplementation = factory(createContext())

	return __fnImplementation(input_path)
}
