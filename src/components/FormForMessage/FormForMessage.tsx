import { FC, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as Yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { StyleContainer, StyleSubmitMessage } from "./FormForMessageStyle";

const schema = Yup.object().shape({
    name: Yup.string().required('Name is required').min(3, 'Name must be at least 3 characters'),
    email: Yup.string().required('Email is required').email('Please enter a valid email address'),
    message: Yup.string().required('Message is required').min(15, 'The message cannot be shorter than 15 characters'),
});

type TypeFormData = {
    name: string,
    email: string,
    message: string
};

const FormForMessage: FC = () => {
    const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
    const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm<TypeFormData>({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data: TypeFormData) => {
        console.log(data)
        reset()
        setIsFormSubmitted(true)
        console.log(isFormSubmitted);
    };

    useEffect(() => {
        if(isFormSubmitted){
            setTimeout(()=> {setIsFormSubmitted(false)}, 3000)
        }
    },[isFormSubmitted]);

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
                    {isFormSubmitted && <span>Ваша форма успішно відправлена</span>}
                </StyleSubmitMessage>
                <button className={!isValid ? 'disabled' : 'enabled'} type="submit">Sumbit</button>
            </form>
        </StyleContainer>
    )
}

export default FormForMessage;