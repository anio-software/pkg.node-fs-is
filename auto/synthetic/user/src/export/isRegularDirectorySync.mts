import {createContext} from "@fourtune/realm-js/v0/runtime"

import {isRegularDirectorySyncFactory as factory} from "#~synthetic/user/export/isRegularDirectorySyncFactory.mts"

let __fnImplementation: any = null

export function isRegularDirectorySync(input_path: string) : boolean {
	if (__fnImplementation === null) __fnImplementation = factory(createContext());

	return __fnImplementation(input_path)
}
