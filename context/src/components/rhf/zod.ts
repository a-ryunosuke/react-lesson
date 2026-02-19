import z from "zod"

export const zod = z.object({
    name: z
    // stringで最小文字数2最大文字数10
    .string()
    .min(2, { message: "2文字以上"})
    .max(10, "10文字以下に"),
    mail: z
    .string()
    .min(1, "入力必須")
    .max(50, "50文字以下に"),
    comment: z
    .string()
    .max(50, "100文字以下に"),    
})

export type FormValues = z.infer<typeof zod>