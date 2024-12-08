import {generateFactoryFiles} from "@fourtune/realm-js/v0/autogenerate"

let autogenerate = {}

for (const method of ["isFile", "isRegularFile", "isDirectory", "isRegularDirectory"]) {
	autogenerate = {
		...autogenerate,
		...generateFactoryFiles({
			source_file: `src/__${method}XXX.as.mts`,
			export_name: `${method}XXX`,
			destination: "src/export"
		})
	}
}

export default {
	realm: {
		name: "js",
		type: "package"
	},

	autogenerate
}
