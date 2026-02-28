import type { FieldErrors, FieldValues, Path, UseFormRegister } from "react-hook-form"


type Props<T extends FieldValues> = {
    // <T>はRHF内にある属性？プロパティ？
    type: Path<T>
    register: UseFormRegister<T>
    errors: FieldErrors<T>
}

export const Form = <T extends FieldValues>({type, register, errors}: Props<T>) => {
    return (
        <div>
            <label htmlFor={type}>{type}</label>
            <input id={type} {...register(type)} />
            {errors[type]?.message && <p>{errors[type]?.message as string}</p>}
        </div>
    )
}