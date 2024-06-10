// import {
//     generateUploadButton,
//     generateUploadDropzone,
//   } from "@uploadthing/react";
   
// import type { OurFileRouter } from "@/app/api/uploading/core";
   
//   export const UploadButton = generateUploadButton<OurFileRouter>();
//   export const UploadDropzone = generateUploadDropzone<OurFileRouter>();

// import { generateReactHelpers } from "@uploadthing/react/hooks";
 
// import type { OurFileRouter } from "@/app/api/uploading/core";
 
// export const { useUploadThing, uploadFiles } = generateReactHelpers<OurFileRouter>();

// import {
//     generateUploadButton,
//     generateUploadDropzone,
//   } from "@uploadthing/react";
   
// import type { OurFileRouter } from "@/app/api/uploading/core";
   
//   export const UploadButton = generateUploadButton<OurFileRouter>();
//   export const UploadDropzone = generateUploadDropzone<OurFileRouter>();


  import { generateReactHelpers } from "@uploadthing/react/hooks";
 
  import type { OurFileRouter } from "@/app/api/uploading/core";
   
  export const { useUploadThing, uploadFiles } = generateReactHelpers<OurFileRouter>();