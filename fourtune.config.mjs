import {generateFromTemplate} from "fourtune/autogenerate"
import generateIndexFile from "./generateIndexFile.mjs"
import generateTypesFile from "./generateTypesFile.mjs"

const asyncToSync = {
	"import {getTypeOfPath} from \"@anio-fs/path-type\"": "import {getTypeOfPathSync} from \"@anio-fs/path-type\"",
	"export default async function(": "export default function(",
	"await getTypeOfPath": "getTypeOfPathSync"
}

export default {
	realm: "js",
	type: "package",

	autogenerate: {
		"sync.mjs": generateFromTemplate("src/template.mjs", asyncToSync),
		"async.mjs": generateFromTemplate("src/template.mjs", {}),
		"index.mjs": generateIndexFile(),
		"types.d.ts": generateTypesFile()
	}
}
