import {createContext} from "@fourtune/realm-js/v0/runtime"

import {isFileSyncFactory as factory} from "#~synthetic/user/export/isFileSyncFactory.mts"

const fn = factory(createContext())

export function isFileSync(input_path: string) : boolean {
	return fn(input_path)
}
