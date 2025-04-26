"use client"
import AddNewUser from '@/components/add-new-user'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { addNewInitialFormState, AddNewUserFormControl } from '@/utils'
import { useState } from 'react'

export default function UserManagement() {

  const [openPopup, setOpenPopup] = useState(false);
  const [addNewUserFormData, setAddNewUserFormData] = useState(addNewInitialFormState);

  console.log(addNewUserFormData);

  function handleSaveButtonValid(){
       return Object.keys(addNewUserFormData).every((key)=>addNewUserFormData[key].trim() !=="")
  }
  

  return (
    <div className='p-20 max-width-6l  '  >
      <div className='flex justify-between' >
        <h1>User management</h1>
        <Button onClick={()=>setOpenPopup(true)} >Add New User</Button>
        <Dialog 
        open={openPopup} 
        onOpenChange = {()=>{
          setOpenPopup(false)
          setAddNewUserFormData(addNewInitialFormState)
        }}
        // onOpenChange={setOpenPopup}
         >
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add new user</DialogTitle>
     
        </DialogHeader>
          <div className="">
   
   
            {
              AddNewUserFormControl.map((e)=>(
                <div className='mb-5'  key={e.name} >
                  
             <     Label htmlFor={e.name} className="text-right">
              {e.label}
            </Label>
            <Input id={e.name} 
             name={e.name}
             placeholder={e.placeholder}
             type={e.type}
             value={addNewUserFormData[e.name]}
             onChange={(event)=>setAddNewUserFormData({
              ...addNewUserFormData,
              [e.name]:event.target.value
             }
            )}
             className="col-span-3" />

                </div>
              ))
            }
         
        </div>
        <DialogFooter>
          <Button
          className='disabled:opacity-45'
          disabled={!handleSaveButtonValid()} type="submit">Save </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
      </div>
    </div>
  )
}
