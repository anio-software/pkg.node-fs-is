export default function() {
	return async function(vipen_session) {
		let code = ``

		code += `import async_impl from "./async.mjs"\n`
		code += `import sync_impl from "./sync.mjs"\n`
		code += `\n`

		const functions = [
			"isFile",
			"isRegularFile",
			"isDirectory",
			"isRegularDirectory"
		]

		for (const fn of functions) {
			code += `export function ${fn}(path) {\n`
			code += `    return async_impl("${fn}", path);\n`
			code += `}\n\n`
		}

		code += `\n`

		for (const fn of functions) {
			code += `export function ${fn}Sync(path) {\n`
			code += `    return sync_impl("${fn}", path);\n`
			code += `}\n\n`
		}

		return code
	}
}
