
'use server'

import connectToDb from "@/database/page"

// add user action

// fetch user action

//edit user action

//delete user action

//Add new user action

export async function AddNewUserAction(formData){
    await connectToDb();

    try {
        //validate using joi/other package you can use
        const newelyCreatedUser = await User.create(formData);
        if (newelyCreatedUser) {
            return {
                success:true,
                message:"user added successfully!"
            }
         
            }
            else{
                return {
                    success:false,
                    message:"something went wrong! please try again "
                }
        }

        
    } catch (error) {
        console.log(error);
        return {
            success:false,
            message:"something went wrong! please try again "
        }
        
    }
}