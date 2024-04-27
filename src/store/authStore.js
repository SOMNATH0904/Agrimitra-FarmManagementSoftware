import {create} from 'zustand'

 export const useAuth = create((set) => ({
   isLoggedIn:false,
   login:() => set({isLoggedIn:true}),
   logout:() => set({isLoggedIn:false})
  }))