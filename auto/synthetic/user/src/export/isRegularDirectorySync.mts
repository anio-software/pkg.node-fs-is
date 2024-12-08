import {createContext} from "@fourtune/realm-js/v0/runtime"

import {isRegularDirectorySyncFactory as factory} from "#~synthetic/user/export/isRegularDirectorySyncFactory.mts"

const fn = factory(createContext())

export function isRegularDirectorySync(input_path: string) : boolean {
	return fn(input_path)
}
