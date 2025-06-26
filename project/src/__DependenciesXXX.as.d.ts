import {getTypeOfPath} from "@aniojs/node-fs-path-type"
//>import {getTypeOfPathSync as getTypeOfPath} from "@aniojs/node-fs-path-type"

export type AnioJsDependencies = {
	getTypeOfPath: typeof getTypeOfPath
}
