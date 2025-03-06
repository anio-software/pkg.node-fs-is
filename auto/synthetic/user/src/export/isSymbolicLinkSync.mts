import {createContext} from "@fourtune/realm-js/v0/runtime"

import {isSymbolicLinkSyncFactory as factory} from "#~synthetic/user/export/isSymbolicLinkSyncFactory.mts"

export function isSymbolicLinkSync(input_path: string) : boolean {
	const __fnImplementation = factory(createContext())

	return __fnImplementation(input_path)
}
