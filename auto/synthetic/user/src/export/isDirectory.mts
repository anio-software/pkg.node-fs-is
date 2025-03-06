import {createContext} from "@fourtune/realm-js/v0/runtime"

// vvv--- types needed for implementation
/* couldn't find a user defined type named 'Promise' at the top level */
// ^^^--- types needed for implementation

import {isDirectoryFactory as factory} from "#~synthetic/user/export/isDirectoryFactory.mts"

let __fnImplementation: any = null

export async function isDirectory(input_path: string) : Promise<boolean> {
	if (__fnImplementation === null) __fnImplementation = factory(createContext());

	return await __fnImplementation(input_path)
}
