import React from 'react'
import { Stack, Typography, Box, TextField, Button } from "@mui/material"
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast'
import axios from "axios"
export default function Inscription() {

const { register, handleSubmit,reset,formState:{erros}} = useForm()

const onSubmit = async (data) => {
    if(data.password !== data.passwordConfirm){
        toast.error("Désole les mots de passes ne correspondent !")
    }else {
       await axios.post('http://localhost:5000/api/user', data).then((res) => {
                    toast.success("Inscription reussie !")
                    reset()
                })
    }
    
}

  return (
    <Stack 
            alignItems={'center'}
            justifyContent={'center'}
            width={"100%"}
            height={"100vh"}
            backgroundColor={"#f5f5f5"}
        >
            <Box
                width={400}
                sx={{
                    backgroundColor: "#fff",
                    padding: 3

                }}
            >
                <Typography variant='h4'>Inscription</Typography>
                
                <form action=""  style={{marginTop: 4}} onSubmit={handleSubmit(onSubmit)}> 
                    <Stack direction={'column'} gap={2}> 
                    
                        <TextField id='filled-basic'
                            label='Nom complet'
                            variant='outlined' 
                            fullWidth size='small' 
                            {...register("name", {required: "*" })}
                            sx={{marginTop: 1}}>
                        </TextField>

                        <TextField id='filled-basic'
                         label='votre email' 
                         variant='outlined'
                          fullWidth size='small' 
                          type='email'
                          {...register("email", {required: "*"})}
                           sx={{marginTop: 1}}>
                        </TextField>

                        <TextField id='filled-basic'
                        label='Mot de pass'
                        variant='outlined'
                        fullWidth size='small'
                        type='password'
                        {...register("password", {required: "*"})}
                        sx={{marginTop: 1}}>
                        </TextField>

                        <TextField id='filled-basic' label='Confirmez le mot de pass' variant='outlined' 
                        fullWidth size='small' 
                        {...register("passwordConfirm", {required: "*"})}
                        sx={{marginTop: 1}} type='password'>
                        </TextField>
                    </Stack>
                    <Button variant="contained" sx={{marginTop: 1}} type='submit' >Inscrire</Button>
                </form>
               
            </Box>
        </Stack>
  )
}
