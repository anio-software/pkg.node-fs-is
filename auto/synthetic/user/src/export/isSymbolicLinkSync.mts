import {createContext} from "@fourtune/realm-js/v0/runtime"

import {isSymbolicLinkSyncFactory as factory} from "#~synthetic/user/export/isSymbolicLinkSyncFactory.mts"

let __fnImplementation: any = null

export function isSymbolicLinkSync(input_path: string) : boolean {
	if (__fnImplementation === null) __fnImplementation = factory(createContext());

	return __fnImplementation(input_path)
}
