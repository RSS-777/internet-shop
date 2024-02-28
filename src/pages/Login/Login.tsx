import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as Yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import ContainerForPages from "../../components/ContainerForPages/ContainerForPages";
import { StyleContainerFotm } from "../FormRegistration/FormRegistrationStyle";
import { Link } from "react-router-dom";

type TypeValue = {
    email: string,
    password: string,
}

const schema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Please enter a valid email address'),
    password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters'),
});

const Login: FC = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<TypeValue>({
        resolver: yupResolver(schema)
    });

    const onSubmit: SubmitHandler<TypeValue> = (data) => {
        console.log(data)
        reset()
    };

    return (
        <ContainerForPages h2="Sign In">
            <StyleContainerFotm onSubmit={handleSubmit(onSubmit)}>
                <div className="block-input">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" {...register('email')} />
                </div>
                <div className="block-error">
                    {errors.email && <span>{errors.email.message}</span>}
                </div>
                <div className="block-input">
                    <label htmlFor="last-name">Password:</label>
                    <input type="password" id="password" {...register('password')} />
                </div>
                <div className="block-error">
                    {errors.password && <span>{errors.password.message}</span>}
                </div>
                <button>Sign In</button>
                <Link to="/registration">registration</Link>
            </StyleContainerFotm>
        </ContainerForPages>
    )
};

export default Login;