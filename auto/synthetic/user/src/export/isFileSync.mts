import {createContext} from "@fourtune/realm-js/v0/runtime"

import {isFileSyncFactory as factory} from "#~synthetic/user/export/isFileSyncFactory.mts"

let __fnImplementation: any = null

export function isFileSync(input_path: string) : boolean {
	if (__fnImplementation === null) __fnImplementation = factory(createContext());

	return __fnImplementation(input_path)
}
