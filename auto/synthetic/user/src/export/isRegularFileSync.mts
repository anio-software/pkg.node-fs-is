import {createContext} from "@fourtune/realm-js/v0/runtime"

import {isRegularFileSyncFactory as factory} from "#~synthetic/user/export/isRegularFileSyncFactory.mts"

let __fnImplementation: any = null

export function isRegularFileSync(input_path: string) : boolean {
	if (__fnImplementation === null) __fnImplementation = factory(createContext());

	return __fnImplementation(input_path)
}
