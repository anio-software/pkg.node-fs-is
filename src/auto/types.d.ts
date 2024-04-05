
/**
 * @brief Asynchronously check if a path is a file.
 * @description
 * Asynchronously checks whether `path` points to a file.
 * @param path The path to check.
 */
export function isFile(path : string) : Promise<boolean>

/**
 * @brief Synchronously check if a path is a file.
 * @description
 * Synchronously checks whether `path` points to a file.
 * @param path The path to check.
 */
export function isFileSync(path : string ) : boolean


/**
 * @brief Asynchronously check if a path is a regular file.
 * @description
 * Asynchronously checks whether `path` points to a regular file.
 * @param path The path to check.
 */
export function isRegularFile(path : string) : Promise<boolean>

/**
 * @brief Synchronously check if a path is a regular file.
 * @description
 * Synchronously checks whether `path` points to a regular file.
 * @param path The path to check.
 */
export function isRegularFileSync(path : string ) : boolean


/**
 * @brief Asynchronously check if a path is a directory.
 * @description
 * Asynchronously checks whether `path` points to a directory.
 * @param path The path to check.
 */
export function isDirectory(path : string) : Promise<boolean>

/**
 * @brief Synchronously check if a path is a directory.
 * @description
 * Synchronously checks whether `path` points to a directory.
 * @param path The path to check.
 */
export function isDirectorySync(path : string ) : boolean


/**
 * @brief Asynchronously check if a path is a regular directory.
 * @description
 * Asynchronously checks whether `path` points to a regular directory.
 * @param path The path to check.
 */
export function isRegularDirectory(path : string) : Promise<boolean>

/**
 * @brief Synchronously check if a path is a regular directory.
 * @description
 * Synchronously checks whether `path` points to a regular directory.
 * @param path The path to check.
 */
export function isRegularDirectorySync(path : string ) : boolean

