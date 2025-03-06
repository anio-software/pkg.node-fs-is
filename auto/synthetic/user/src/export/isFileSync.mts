import {createContext} from "@fourtune/realm-js/v0/runtime"

import {isFileSyncFactory as factory} from "#~synthetic/user/export/isFileSyncFactory.mts"

export function isFileSync(input_path: string) : boolean {
	const __fnImplementation = factory(createContext())

	return __fnImplementation(input_path)
}
