import multer from 'multer';

const storage = multer.memoryStorage();
export const singleUpload = multer({storage}).single("file");






// The client sends a POST request with multipart/form-data containing a file.
// The singleUpload middleware processes the request:
// Extracts the file from the form data.
// Stores the file temporarily in memory (req.file).
// Passes control to the next middleware or route handler.
// In the route handler, the uploaded file can be accessed via req.file.