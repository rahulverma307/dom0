import { onBoardUser } from "@/features/auth/action";

export default async function RootGroupLayout({
    children
}:Readonly<{
    children:React.ReactNode
}>) {
    await onBoardUser();
    return <>{children}</>
}