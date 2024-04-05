import {getTypeOfPathSync} from "@anio-fs/path-type"

const map = {
	"isFile": ["file", "link->file"],
	"isRegularFile": ["file"],

	"isDirectory": ["dir", "link->dir"],
	"isRegularDirectory": ["dir"]
}

export default function(method, path) {
	const expected_types = map[method]
	const type = getTypeOfPathSync(path)

	return expected_types.includes(type)
}
