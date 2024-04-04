import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function postData(formData: FormData, senderId: string, receiverId: string){
    try {
        const content = formData.get('message');

        if (!content) {
            throw new Error('Le contenu du message est vide.');
        }

        const data = await prisma.messages.create({
            data:{
                content: content as string,
                senderId: senderId,
                receiverId: receiverId
            },
        });

        return data;
    } catch (error) {
        console.error("Une erreur s'est produite lors de la création du message :", error);
        throw new Error('Une erreur est survenue lors de la création du message.');
    }
}
