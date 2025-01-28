import {updateClient, deleteClient} from '@/axios/generalApiCalls';
import Button from "@/components/Button";
import CustomInput from "@/components/CustomInput";
import SForm from "@/components/SForm";
import CloseIcon from "@assets/icons/close.svg?react";
import {Box, Modal, Stack} from "@mui/material";
import React, {useContext, useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import UploadIcon from "@assets/icons/upload-rounded.svg?react";
import {errorToast, successToast} from "@components/toasts/toasts.jsx";
import DeleteButton from "@pages/clients/partial/DeleteButton.jsx";
import {GeneralContext} from "@contexts/GeneralContext.jsx";
import SpecStoreIcon from "@/Icons/SpecStoreIcon.jsx";
import FileIcon from "@/Icons/FileIcon.jsx";

function EditClientModal({open, setOpen, client, handleDelete, toHomeOnchange = true}) {
    const { clients, setClients } = useContext(GeneralContext);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [selectedFileName, setSelectedFileName] = useState('');
    const [isDeleteLogo, setIsDeleteLogo] = useState(false);
    const {
        register,
        formState: {errors},
        handleSubmit,
        reset,
    } = useForm({
        mode: "onChange",
        defaultValues: {
            name: client.name ?? '',
            email: client.email ?? ''
        }
    });

    useEffect(() => {
        reset();
    }, [open]);

    const renderErrors = (errors, field) => {
        switch (errors?.type) {
            case "required":
                return <label className="s-error">{field} field is required.</label>;
            case "maxLength":
                return (
                    <label className="s-error">
                        Please enter a {field} with less than 200 characters.
                    </label>
                );
            case "pattern":
                return (
                    <label className="s-error">The {field} must be a valid email address.</label>
                );
            case "acceptedFormats":
                return (
                    <label className="s-error">Please upload a file in one of the following formats: .jpg, .png,
                        .jpg</label>
                );
            case "lessThan10MB":
                return (
                    <label className="s-error">The file size must not exceed 10MB.</label>
                );
            default:
                return '';
        }
    };
    const updateClickFunction = async (data) => {
        let formData = new FormData();
        formData.append('_method', 'PUT')
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('isDeleteLogo',isDeleteLogo)
        if (data?.logo?.[0]) {
            formData.append('logo', data.logo[0]);
        }

        setLoading(true);

        await updateClient(formData, client.id)
            .then((data) => {
                setClients(clients.map(item => item.id === data.client?.id ? data.client : item))
                if (toHomeOnchange) {
                    navigate(`/clients`);
                }
                setOpen(false);
                successToast("Client updated successfully!");
                setIsDeleteLogo(false)
            })
            .catch(() => {
                errorToast("Update client failed")
            })
            .finally(() => {
                setLoading(false);
            })
    };

    function getFileName(filePath) {
        return filePath?.split('/').pop();
    }
    const fileName = getFileName(client.logo_path)

    return (
        <div>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                className="backdrop-blur-[15px]"
            >
                <div
                    className={`w-auto bg-modal-bg-gradient shadow-modal min-w-min lg:min-w-[635px] max-w-[635px] py-10 px-6 rounded-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gradient-grey-3`}>
                    <div className="w-full flex items-center gap-3">
                        <div id="modal-title"
                             className={`text-[28px] font-medium leading-larger text-custom-ghostWhite flex-1`}>
                            {'Edit Client information'}
                        </div>
                        <button onClick={() => setOpen(false)}>
                            <CloseIcon className="icon-white w-6 h-6 p-[6px] s-icon-grey-4"/>
                        </button>
                    </div>

                    <SForm onSubmit={handleSubmit(updateClickFunction)}>
                        <div className="my-[34px] flex flex-col gap-[34px]">

                            <div className="flex flex-col">
                                <CustomInput
                                    variant="primary"
                                    {...register("name", {
                                        required: 'The client name field is required',
                                        maxLength: 200,
                                        pattern: /^[a-zA-Z0-9 ]+$/i,
                                    })}
                                    label={"CLIENT NAME *"}
                                    placeholder="Add a name for your client"
                                    disabled={loading}
                                    aria-invalid={errors.name ? "true" : "false"}
                                />
                                {renderErrors(errors?.name, 'Client name')}
                                <div className="mt-6">
                                    <CustomInput
                                        variant="primary"
                                        {...register("email", {
                                            required: true,
                                            maxLength: 200,
                                            pattern: /^\S+@\S+\.\S+$/,
                                        })}
                                        label={"CONTACT INFO *"}
                                        placeholder="Add client email"
                                        disabled={loading}
                                        aria-invalid={errors.email ? "true" : "false"}
                                    />
                                    {renderErrors(errors?.email, 'Client email')}
                                </div>
                                {(client.logo_path && !isDeleteLogo) ?
                                    <div className="relative h-max mt-8">
                                        <div className="flex justify-between mb-2 text-grey-17"><p
                                            className="font-medium leading-11 h-max">UPLOAD CLIENT LOGO</p>
                                        </div>
                                        <div className="flex items-center justify-between w-full">
                                            <div className="flex items-center gap-3">
                                                <FileIcon/>
                                                <span
                                                    className="text-[14px] font-medium text-custom-ghostWhite">{fileName}</span>
                                            </div>
                                            <span
                                                className="underline underline-offset-2 cursor-pointer"
                                                onClick={() => {
                                                    setIsDeleteLogo(true)
                                                }}
                                            >Delete</span>
                                        </div>
                                    </div>
                                    :
                                    <div className="relative h-max mt-8">
                                        <div className="flex justify-between mb-2 text-grey-17"><p
                                            className="font-medium leading-11 h-max">UPLOAD CLIENT LOGO (OPTIONAL)</p>
                                        </div>
                                        <div
                                            className="w-full h-24 cursor-pointer hover:bg-[#f0f0f014] bg-[#C1BFC414] border-dashed border-2 border-[#C1BFC414] rounded-lg flex flex-col justify-center items-center"
                                            onClick={() => document.getElementById('clientLogoRef')?.click()}
                                        >
                                            <UploadIcon/>
                                            <div className="w-full text-sm text-center mt-1">
                                                {selectedFileName}
                                            </div>
                                        </div>
                                        <input
                                            id="clientLogoRef"
                                            className="hidden"
                                            type="file"
                                            name="logo"
                                            accept="image/png, image/PNG, image/jpg, image/JPG, image/jpeg, image/JPEG"
                                            {...register("logo", {
                                                validate: {
                                                    lessThan10MB: files => !files[0]?.size || files[0]?.size < 10 * 1024 * 1024 || 'Max 10MB',
                                                    acceptedFormats: files =>
                                                        !files[0]?.size || ['image/png', 'image/PNG, image/jpg', 'image/JPG', 'image/jpeg', 'image/JPEG'].includes(files[0]?.type) || 'Only PNG, JPEG or JPG',
                                                },
                                            })}
                                            onInput={(event) => {
                                                setSelectedFileName(event.target.files?.[0]?.name ?? '')
                                            }}
                                        />
                                        {renderErrors(errors?.logo, 'Logo')}
                                    </div>
                                }
                            </div>
                        </div>
                        <Stack direction="row" justifyContent={"space-between"}>
                            <Stack direction="row" spacing={1}>
                                <Box sx={{display: "flex", justifyContent: "space-between"}}>
                                    <Button
                                        type="submit"
                                        variant='primary'
                                        className="text-custom-ghostWhite font-semibold text-lg !shadow-none py-[12px] px-[34px]"
                                    >
                                        Save
                                    </Button>
                                </Box>
                                <Box sx={{display: "flex", justifyContent: "space-between"}}>
                                    <Button
                                        onClick={() => setOpen(false)}
                                        className="text-custom-ghostWhite font-semibold text-lg !shadow-none bg-transparent border-[#454C54] border-[1px] rounded-[10px] py-[12px] px-[34px]"
                                    >
                                        Cancel
                                    </Button>
                                </Box>
                            </Stack>
                            <DeleteButton handler={handleDelete}/>
                        </Stack>
                    </SForm>
                </div>
            </Modal>
        </div>
    )
}

export default EditClientModal