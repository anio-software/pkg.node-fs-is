import {createContext} from "@fourtune/realm-js/v0/runtime"

import {isRegularFileSyncFactory as factory} from "#~synthetic/user/export/isRegularFileSyncFactory.mts"

export function isRegularFileSync(input_path: string) : boolean {
	const __fnImplementation = factory(createContext())

	return __fnImplementation(input_path)
}
