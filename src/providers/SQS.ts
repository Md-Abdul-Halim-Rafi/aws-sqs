import dotenv from "dotenv";
import { SQSClient } from "@aws-sdk/client-sqs";

dotenv.config();

export const SQS = new SQSClient({
    region: process.env.AWS_SQS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_SQS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SQS_SECRET_ACCESS_KEY,
    }
});

export const queueURL: string = process.env.AWS_SQS_QUEUE_URL;