import {createContext} from "@fourtune/realm-js/v0/runtime"

import {isDirectorySyncFactory as factory} from "#~synthetic/user/export/isDirectorySyncFactory.mts"

const fn = factory(createContext())

export function isDirectorySync(input_path: string) : boolean {
	return fn(input_path)
}
