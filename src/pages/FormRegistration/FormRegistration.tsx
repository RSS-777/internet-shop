import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as Yup from 'yup';
import { StyleContainerFotm } from "./FormRegistrationStyle";
import { yupResolver } from "@hookform/resolvers/yup";
import ContainerForPages from "../../components/ContainerForPages/ContainerForPages";
import { useNavigate, NavigateFunction } from "react-router-dom";

type TypeValue = {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    phone: string,
    gender: string;
}

const schema = Yup.object().shape({
    firstName: Yup.string().required('First name is required').min(3, 'First name must be at least 3 characters'),
    lastName: Yup.string().required('Last name is required').min(3, 'Last name must be at least 3 characters'),
    email: Yup.string().required('Email is required').email('Please enter a valid email address'),
    password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters'),
    phone: Yup.string().required('Phone number is required').matches(/^[0-9]+$/, 'Phone number must contain only digits').min(10, 'Phone number must be at least 10 digits long'),
    gender: Yup.string().required('Gender is required')
});

const FormRegistration: FC = () => {
    const navigate: NavigateFunction = useNavigate();
    const { register, handleSubmit, formState: { errors }, reset } = useForm<TypeValue>({
        resolver: yupResolver(schema)
    });

    const onSubmit: SubmitHandler<TypeValue> = async (data) => {
        const response = await fetch('https://dummyjson.com/users/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        if(response.ok){
            reset()
            const dataFetch = await response.json() 
            let existingData = JSON.parse(localStorage.getItem('data') || '[]');
            existingData.push(dataFetch);
            localStorage.setItem('data', JSON.stringify(existingData));
            navigate('/login')
        }else{
            console.error('Failed to submit form');
        }
    };

    return (
        <ContainerForPages h2="Registration form">
            <StyleContainerFotm onSubmit={handleSubmit(onSubmit)}>
                <div className="block-input">
                    <label htmlFor="name">First Name:</label>
                    <input type="text" id="name" {...register('firstName')} autoComplete="name"/>
                </div>
                <div className="block-error">
                    {errors.firstName && <span>{errors.firstName.message}</span>}
                </div>
                <div className="block-input">
                    <label htmlFor="last-name">Last Name:</label>
                    <input type="text" id="last-name" {...register('lastName')} autoComplete="family-name"/>
                </div>
                <div className="block-error">
                    {errors.lastName && <span>{errors.lastName.message}</span>}
                </div>
                <div className="block-input">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" {...register('email')} autoComplete="email"/>
                </div>
                <div className="block-error">
                    {errors.email && <span>{errors.email.message}</span>}
                </div>
                <div className="block-input">
                    <label htmlFor="last-name">Password:</label>
                    <input type="password" id="password" {...register('password')} autoComplete="current-password" />
                </div>
                <div className="block-error">
                    {errors.password && <span>{errors.password.message}</span>}
                </div>
                <div className="block-input">
                    <label htmlFor="phone">Phone number:</label>
                    <input type="tel" id="phone" {...register('phone')} autoComplete="tel"/>
                </div>
                <div className="block-error">
                    {errors.phone && <span>{errors.phone.message}</span>}
                </div>
                <div className="block-radio">
                    <fieldset>
                        <legend>Gender:</legend>
                        <div>
                            <label htmlFor="man">Man:</label>
                            <input type="radio" id="man" value="man" {...register("gender")} defaultChecked />
                        </div>
                        <div>
                            <label htmlFor="woman">Woman:</label>
                            <input type="radio" id="woman" value="woman" {...register("gender")} />
                        </div>
                    </fieldset>
                </div>
                <button>Submit</button>
            </StyleContainerFotm>
        </ContainerForPages>
    )
};

export default FormRegistration;