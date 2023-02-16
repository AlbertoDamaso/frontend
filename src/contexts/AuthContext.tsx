import React from "react";
import { createContext, ReactNode, useState, useEffect } from "react";
import { destroyCookie, parseCookies, setCookie } from "nookies";
import  Router  from "next/router";
import { api } from "../services/apiClient";
import { toast } from "react-toastify";


type AuthContextData = {
    signOut: () => void
}

type AuthProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData)



export function signOut(){
    try{
        // destroyCookie(undefined, '@nextauth.token')
        Router.push('/')
    }catch{
        console.log('erro a deslogar')
    }
}

export function AuthProvider({ children }: AuthProviderProps){

    useEffect(() => {
        api.get('/me').then(response => {
            const { id, name, email } = response.data;
        })

    }, [])
    
    return(
        <AuthContext.Provider value={{ signOut }}>
            {children}
        </AuthContext.Provider>
    )
}