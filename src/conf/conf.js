const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteUserCollectionId: String(import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID),
    appwriteCropCollectionId: String(import.meta.env.VITE_APPWRITE_CROP_COLLECTION_ID),
    appwriteBestmatchCollectionId: String(import.meta.env.VITE_APPWRITE_BESTMATCHES_COLLECTION_ID),
}

export default conf