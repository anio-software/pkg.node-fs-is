import {
	isFile,
	isRegularFile,
	isDirectory,
	isRegularDirectory,
	isSymbolicLink
} from "../dist/default/index.min.mjs"

console.log(await isFile("examples/files/a-file"))
console.log(await isRegularFile("examples/files/link-to-file"))
console.log(await isFile("examples/files/link-to-file"))

console.log("---")

console.log(await isDirectory("examples/files"))
console.log(await isRegularDirectory("examples/files/link-to-dir"))
console.log(await isDirectory("examples/files/link-to-dir"))

console.log("---")

console.log(await isSymbolicLink("examples/files"))
console.log(await isSymbolicLink("examples/files/link-to-dir"))
console.log(await isSymbolicLink("examples/files/link-to-dir"))
console.log(await isSymbolicLink("examples/files/link-broken"))
