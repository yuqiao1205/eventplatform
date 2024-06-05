import { Dispatch, SetStateAction } from "react";
import { useDropzone } from "@uploadthing/react";
import { generateClientDropzoneAccept } from "uploadthing/client";
 
import { useUploadThing } from "@/lib/uploadthing";
import { useCallback } from "react";

type FileUploaderProps = {
    onFieldChange: (url: string) => void;
    imageUrl: string; 
    setFiles: Dispatch<SetStateAction<File[]>>
    
}

// Note: `useUploadThing` is IMPORTED FROM YOUR CODEBASE using the `generateReactHelpers` function
 
export function FileUploader({  onFieldChange, imageUrl, setFiles }: FileUploaderProps) {
//   const [files, setFiles] = useState<File[]>([]);
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
  }, []);


  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*' ? generateClientDropzoneAccept(['image/*']) : undefined,
  });
 
  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <div>
        {files.length > 0 && (
          <button onClick={() => startUpload(files)}>
            Upload {files.length} files
          </button>
        )}
      </div>
      Drop files here!
    </div>
  );
}

export default FileUploader