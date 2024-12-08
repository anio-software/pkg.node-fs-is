import {createContext} from "@fourtune/realm-js/v0/runtime"

// vvv--- types needed for implementation
/* couldn't find a user defined type named 'Promise' at the top level */
// ^^^--- types needed for implementation

import {isRegularDirectoryFactory as factory} from "#~synthetic/user/export/isRegularDirectoryFactory.mts"

const fn = factory(createContext())

export async function isRegularDirectory(input_path: string) : Promise<boolean> {
	return await fn(input_path)
}
