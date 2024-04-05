import async_impl from "./async.mjs"
import sync_impl from "./sync.mjs"

export function isFile(path) {
    return async_impl("isFile", path);
}

export function isRegularFile(path) {
    return async_impl("isRegularFile", path);
}

export function isDirectory(path) {
    return async_impl("isDirectory", path);
}

export function isRegularDirectory(path) {
    return async_impl("isRegularDirectory", path);
}


export function isFileSync(path) {
    return sync_impl("isFile", path);
}

export function isRegularFileSync(path) {
    return sync_impl("isRegularFile", path);
}

export function isDirectorySync(path) {
    return sync_impl("isDirectory", path);
}

export function isRegularDirectorySync(path) {
    return sync_impl("isRegularDirectory", path);
}

