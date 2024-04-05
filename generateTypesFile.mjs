function generateDocComment(method, is_sync) {
	let a = is_sync ? "Synchronously" : "Asynchronously"
	let b = is_sync ? a.toLowerCase() : a.toLowerCase()
	let c = method.slice(2).toLowerCase()

	if (c.startsWith("regular")) {
		c = "regular " + c.slice("regular".length)
	}

	return `
/**
 * @brief ${a} check if a path is a ${c}.
 * @description
 * ${a} checks whether \`path\` points to a ${c}.
 * @param path The path to check.
 */
`
}

export default function() {
	return async function(vipen_session) {
		let types = ``

		const functions = [
			"isFile",
			"isRegularFile",
			"isDirectory",
			"isRegularDirectory"
		]

		for (const fn of functions) {
			types += generateDocComment(fn)
			types += `export function ${fn}(path : string) : Promise<boolean>\n`
			types += generateDocComment(fn, true)
			types += `export function ${fn}Sync(path : string ) : boolean\n`
			types += `\n`
		}

		return types
	}
}
