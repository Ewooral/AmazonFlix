# APP NAME: SNAPS
# BUILT BY EWOORAL.
# linkedIn: www.linkedin.com/in/boahenelijahowusu
 ................................................


# snaps is a photo sharing social media Application similar to pinterest.

 * Users can login or register through a custom page featuring google authentication.

 * Once logged, you will be greeted with feeds of images posted by users of the application. 

## functionalities
   1. Images posted can be downloaded
   2. Image has a destination URL
   3.  Images can also be saved
   4. Details about an image posted by a user can be seen by clicking on it. You'd be able to see image title, the user's image and name.
   5. You can leave a comment on a users posted image.
   6. Below the image, you can see other images, just like the one you see above.
   7. You can also visit the user who created that pin or uploaded the image.
   8. Snaps has filtering options. You can search by name. There are some categories on the left panel of the homepage that you can also explore.
   9. It is fully mobile responsive 


## Some common erros associated with typescript and React projects/answers
  1. Importing images in TypeScript React - "Cannot find module"
   **Answer**
   - create a file named image.d.ts or 'anyname'.d.ts in the src directory
   - declare the following in the image.d.ts or anyname.d.ts file.
      * declare module '*.jpg';
      * declare module '*.jpeg';
      * declare module '*.png';
      * declare module '*.mp4'; and any other file extensions you'd want to include
   - Add the file path(./src/image.d.ts) to the include path in the tsconfig.json file