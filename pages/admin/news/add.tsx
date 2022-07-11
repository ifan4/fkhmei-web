/* eslint-disable react-hooks/rules-of-hooks */
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import Layout from '../../../components/layout/admin'
import { Input, TextArea } from '../../../components/tools/input'
import { useState } from 'react';
import dynamic from "next/dynamic";
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File
import Button from '../../../components/tools/button';
import { useRouter } from 'next/router';
import { request } from '../../../utils/axios-utils';
import { toast } from 'react-toastify';
import ToastContainer from '../../../components/tools/toastContainer';

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

export default function addNews(){
    const router = useRouter()
    const {
        register,
        handleSubmit,
        formState: {errors,isSubmitting},
        reset,
        control
      } = useForm()

      const SubmitHandler:SubmitHandler<any> = async (data)=> {
        try {
              const res = await request({
                  url: `/news/create`,
                  method: 'POST',
                  headers: {"Content-Type": "multipart/form-data"},
                  data: {
                      title: data.title,
                      image: data.image[0],
                      content_news: data.content,
                      creator: 'admin'
                  }
              })
            
            toast.success("Create news succesfully!")
            router.push('.')
          } catch (error) {
              console.log(error);
              
              toast.error("Something wrong...")
          }
      }



      
    return (
        <Layout>
            <ToastContainer/>
            <Button
            name={'<- Back'}
            bgColor = {'black'}
            textColor = {'white'}
            IsActive = {true}
            onClick = {()=>router.push('.')}
            />
            <h4 className='my-3'>Create New News</h4>
            <form className='row g-3' onSubmit={handleSubmit(SubmitHandler)}>
                <div className="col-md-6">
                    <Input
                    label_name = {'Title'}
                    register = {
                        {...register('title', {
                            required: 'Title required'
                        })}
                    }
                    errors = { errors.title }
                    />
                </div>
                <div className="col-md-6">
                    <Input
                    type = {'file'}
                    label_name = {'Upload Thumbnail'}
                    register = {
                        {...register('image', {
                            required: 'Thumbnail required',
                            validate: {
                                lessThan2MB: files => files[0]?.size < 2000000 || 'Max 2MB',
                                acceptedFormats: files =>
                                  ['image/jpeg', 'image/png', 'image/gif'].includes(
                                    files[0]?.type
                                  ) || 'Only PNG, JPEG e GIF',
                              },
                        })}
                    }
                    errors = { errors.image }
                    />
                </div>
                <div className="col-md-12">
                    <Controller
                    control={control}
                    {...register('content', {
                        required: "Content News Required"
                    })}
                    render={({ field })=> {
                        return(
                            <SunEditor
                            onChange={field.onChange}
                            height = {"300px"}
                            />
                        )
                    }}
                    />
                     {
                        errors.content && 
                        <div className="invalid">Content Required</div>
                    }
                </div>
                <div className="col-md-3">
                    <Button 
                    name={'Submit'}                    
                    bgColor = {'black'}
                    textColor = {'white'}
                    isLoading ={ isSubmitting }
                    />
                </div>
            </form>
        </Layout>
    )
}