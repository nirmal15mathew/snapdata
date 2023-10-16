// place files you want to import through the `$lib` alias in this folder.
async function getFile() {
    // Open file picker and destructure the result the first handle
    const [fileHandle] = await window.showOpenFilePicker();
    const file = await fileHandle.getFile();
    return file;
}


const pickerOpts = {
    types: [
        {
            description: "Images",
            accept: {
                "image/*": [".png", ".gif", ".jpeg", ".jpg"],
            },
        },
    ],
    excludeAcceptAllOption: true,
    multiple: false,
};

async function getTheFile() {
    // Open file picker and destructure the result the first handle
    const [fileHandle] = await window.showOpenFilePicker(pickerOpts);

    // get file contents
    const fileData = await fileHandle.getFile();
}

const dirName = "directoryToGetName";

// assuming we have a directory handle: 'currentDirHandle'
const subDir = currentDirHandle.getDirectoryHandle(dirName, { create: true });

/**
 * 
 * @param {*} directoryHandle 
 * @returns 
 */
async function returnPathDirectories(directoryHandle) {
    // Get a file handle by showing a file picker:
    const [handle] = await self.showOpenFilePicker();
    if (!handle) {
      // User cancelled, or otherwise failed to open a file.
      return;
    }
  
    // Check if handle exists inside directory our directory handle
    const relativePaths = await directoryHandle.resolve(handle);
  
    if (relativePaths === null) {
      // Not inside directory handle
    } else {
      // relativePaths is an array of names, giving the relative path
  
      for (const name of relativePaths) {
        // log each entry
        console.log(name);
      }
    }
  }
  async function saveFile(imgBlob) {
    // create a new handle
    const newHandle = await window.showSaveFilePicker();
  
    // create a FileSystemWritableFileStream to write to
    const writableStream = await newHandle.createWritable();
  
    // write our file
    await writableStream.write(imgBlob);
  
    // close the file and write the contents to disk.
    await writableStream.close();
  }
  
