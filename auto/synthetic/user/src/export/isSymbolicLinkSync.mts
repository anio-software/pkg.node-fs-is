import {createContext} from "@fourtune/realm-js/v0/runtime"

import {isSymbolicLinkSyncFactory as factory} from "#~synthetic/user/export/isSymbolicLinkSyncFactory.mts"

const fn = factory(createContext())

export function isSymbolicLinkSync(input_path: string) : boolean {
	return fn(input_path)
}
