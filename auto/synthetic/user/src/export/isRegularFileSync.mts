import {createContext} from "@fourtune/realm-js/v0/runtime"

import {isRegularFileSyncFactory as factory} from "#~synthetic/user/export/isRegularFileSyncFactory.mts"

const fn = factory(createContext())

export function isRegularFileSync(input_path: string) : boolean {
	return fn(input_path)
}
