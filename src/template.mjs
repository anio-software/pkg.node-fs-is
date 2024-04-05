import {getTypeOfPath} from "@anio-fs/path-type"

const map = {
	"isFile": ["file", "link->file"],
	"isRegularFile": ["file"],

	"isDirectory": ["dir", "link->dir"],
	"isRegularDirectory": ["dir"]
}

export default async function(method, path) {
	const expected_types = map[method]
	const type = await getTypeOfPath(path)

	return expected_types.includes(type)
}
