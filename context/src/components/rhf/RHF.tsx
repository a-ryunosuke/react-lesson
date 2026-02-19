import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import type {  FormValues } from "./zod"
import { zod } from "./zod"

import { Form } from "./Form"

export const RHF = () => {
    const  [submitStates, setSubmitStates] = useState<
    "idle" | "submitting" | "success" | "error"
    >("idle")

    const {
        register, // フォーム登録の関数
        handleSubmit, // 送信の処理する関数
        reset, // フォームの状態をリセットする関数
        formState: { errors },
    } = useForm<FormValues>({
        resolver: zodResolver(zod), // バリデーション設定(ここではzod)
        defaultValues: {
            name: "",
            // 他フォーム拡張↓
            mail: "",
            comment: "",
        } // フォームの初期値
    })

    const onSubmit = async(data: FormValues) => {
        setSubmitStates("submitting")
        try {
            setSubmitStates("success")
            reset()
        } catch (error) {
            setSubmitStates("error")
        }
    }

    return (
        <form className="p-8 border-2" onSubmit={handleSubmit(onSubmit)}>
            <div className="p-8 border-2">
                <Form type="name" register={register} errors={errors} />
                <Form type="mail" register={register} errors={errors} />
                <Form type="comment" register={register} errors={errors} />
            </div>
            {/* <div>
                <label htmlFor="name">name</label>
                <input id="name" {...register("name")} />
                {errors.name && <p>{errors.name.message}</p>}
            </div> */}
            {/* disabled＝押下不可 */}
            <button type="submit" disabled={submitStates === "submitting"}>
                {submitStates === "submitting" ? "送信中" : "送信する"}
            </button>
        </form>
    )
}