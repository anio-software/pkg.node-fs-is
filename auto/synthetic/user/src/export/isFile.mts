import {createContext} from "@fourtune/realm-js/v0/runtime"

// vvv--- types needed for implementation
/* couldn't find a user defined type named 'Promise' at the top level */
// ^^^--- types needed for implementation

import {isFileFactory as factory} from "#~synthetic/user/export/isFileFactory.mts"

export async function isFile(input_path: string) : Promise<boolean> {
	const __fnImplementation = factory(createContext())

	return await __fnImplementation(input_path)
}
