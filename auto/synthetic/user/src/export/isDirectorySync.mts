import {createContext} from "@fourtune/realm-js/v0/runtime"

import {isDirectorySyncFactory as factory} from "#~synthetic/user/export/isDirectorySyncFactory.mts"

let __fnImplementation: any = null

export function isDirectorySync(input_path: string) : boolean {
	if (__fnImplementation === null) __fnImplementation = factory(createContext());

	return __fnImplementation(input_path)
}
