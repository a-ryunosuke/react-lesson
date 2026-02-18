import z from "zod"

export const zod = z.object({
    name: z
    // stringの形式で最小文字数2最大文字数10
    .string()
    .min(2, { message: "2文字以上"})
    .max(10, "10文字以下に")
})

export type FormValues = z.infer<typeof zod>