import { FC, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from 'yup';
import { StyleContainer, StyleSubmitMessage } from "./FormForMessageStyle";
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

const serviceId = import.meta.env.VITE_APP_SERVICE_ID
const templateId = import.meta.env.VITE_APP_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_APP_PUBLIC_KEY;

const schema = Yup.object().shape({
    name: Yup.string().required('Name is required').min(3, 'Name must be at least 3 characters'),
    email: Yup.string().required('Email is required').email('Please enter a valid email address'),
    message: Yup.string().required('Message is required').min(15, 'The message cannot be shorter than 15 characters'),
});

type TypeFormData = {
    name: string,
    email: string,
    message: string,
};

const FormForMessage: FC = () => {
    const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
    const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm<TypeFormData>({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data: TypeFormData) => {
        reset();
        setIsFormSubmitted(true);

        if (serviceId && templateId && publicKey) {
            emailjs
                .send(serviceId, templateId, data, {
                    publicKey: publicKey,
                })
                .then(
                    (response: EmailJSResponseStatus) => {
                        console.log('Email sent successfully!', response.status);
                    },
                    (error) => {
                        console.error('Failed to send email:', error);
                    }
                );
        } else {
            console.error('Missing serviceId, templateId, or publicKey');
        }
    };

    useEffect(() => {
        if (isFormSubmitted) {
            setTimeout(() => { setIsFormSubmitted(false) }, 3000)
        }
    }, [isFormSubmitted]);

    return (
        <StyleContainer>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3>Contact us</h3>
                <div className="block-text">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        {...register('name')}
                    />
                </div>
                <div className="block-error">
                    {errors.name && <p>{errors.name.message}</p>}
                </div>
                <div className="block-text">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        {...register('email')}
                    />
                </div>
                <div className="block-error">
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
                <div className="block-text">
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        {...register('message')}
                    ></textarea>
                </div>
                <div className="block-error">
                    {errors.message && <p>{errors.message.message}</p>}
                </div>
                <StyleSubmitMessage $submitted={isFormSubmitted} >
                    <span>Form sent successfully</span>
                </StyleSubmitMessage>
                <button className={!isValid ? 'disabled' : 'enabled'} type="submit">Sumbit</button>
            </form>
        </StyleContainer>
    )
}

export default FormForMessage;