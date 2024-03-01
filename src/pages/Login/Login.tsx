import { FC, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as Yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import ContainerForPages from "../../components/ContainerForPages/ContainerForPages";
import { StyleContainerFotm } from "../FormRegistration/FormRegistrationStyle";
import { MessageShowStyle } from "./LoginStyle";
import { Link } from "react-router-dom";
import { useNavigate, NavigateFunction } from "react-router-dom";
import { useDispatch } from "react-redux";
import { TypeAppDispatch } from "../../store/store";
import { changeSingIn, setLoginName } from "../../store/loginSlice";

type TypeValue = {
    email: string,
    password: string,
    name?: string,
}

const schema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Please enter a valid email address'),
    password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters'),
});

const Login: FC = () => {
    const [errorSubmit, SetErrorSubmit] = useState<boolean>(false)
    const navigate: NavigateFunction = useNavigate();
    const dispatch: TypeAppDispatch = useDispatch()

    const { register, handleSubmit, formState: { errors }, reset } = useForm<TypeValue>({
        resolver: yupResolver(schema)
    });

    const onSubmit: SubmitHandler<TypeValue> = (data) => {
        let existingData = JSON.parse(localStorage.getItem('data') || '[]');
        
        if (existingData.some((item: TypeValue) => {
            return item.email === data.email && item.password === data.password
        })){
     
        console.log(existingData)
            const user = existingData.find((item: TypeValue) => {
                return item.email === data.email && item.password === data.password;
            });
            console.log(user)
            if (user) {
                dispatch(setLoginName({ 
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    phone: user.phone
                }));
            }

            navigate('/')
            dispatch(changeSingIn(true))
            reset()
            console.log('successfull')
        } else {
            SetErrorSubmit(true)
            dispatch(changeSingIn(false))
            setTimeout(() => { SetErrorSubmit(false) }, 2000)
        }
    };

    return (
        <ContainerForPages h2="Sign In">
            <StyleContainerFotm onSubmit={handleSubmit(onSubmit)}>
                <div className="block-input">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" {...register('email')}  autoComplete="email" />
                </div>
                <div className="block-error">
                    {errors.email && <span>{errors.email.message}</span>}
                </div>
                <div className="block-input">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" {...register('password')}  autoComplete="current-password"/>
                </div>
                <div className="block-error">
                    {errors.password && <span>{errors.password.message}</span>}
                </div>
                <button type='submit'>Sign In</button>
                <MessageShowStyle >{errorSubmit && <span>Invalid login or password!!!</span>}</MessageShowStyle >
                <Link to="/registration">registration</Link>
            </StyleContainerFotm>
        </ContainerForPages>
    )
};

export default Login;