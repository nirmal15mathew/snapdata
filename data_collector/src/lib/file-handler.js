// create function using the file system api to create a directory for a new project

/**
 * @param {string} project_id
 * @param {FileSystemDirectoryHandle} directory_handle
 */

export function createProject(project_id, directory_handle) {
    const dirName = "projects/" + project_id;


    // handle to the subdirectory
    const subDir = directory_handle.getDirectoryHandle(dirName, { create: true });
}

// Path: data_collector/src/lib/file-handler.js