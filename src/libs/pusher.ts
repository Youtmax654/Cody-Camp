import cluster from "cluster";
import PusherServer from "pusher";
import PusherClient from "pusher-js";

export const pusherServer = new PusherServer({
    appId: process.env.app_id!,
    key: process.env.key!,
    secret: process.env.secret!,
    cluster: 'eu',
    useTLS: true,
});

export const pusherClient = new PusherClient(
    process.env.app_id!,{
        cluster:'eu'
    }
);