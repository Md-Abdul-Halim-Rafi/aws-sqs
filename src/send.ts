import { SendMessageCommandInput, SendMessageCommand } from "@aws-sdk/client-sqs";
import { SQS, queueURL } from "./providers/SQS";

const sendMessage = async () => {

    const data = {
        id: 1044
    }

    const sendMessageParams: SendMessageCommandInput = {
        QueueUrl: queueURL,
        MessageBody: JSON.stringify(data),
        MessageGroupId: data.id.toString(),
        MessageDeduplicationId: data.id.toString(),
    };

    try {

        const message = await SQS.send(
            new SendMessageCommand(sendMessageParams)
        );

        console.log(message);
        
    } catch (err) {
        console.error(err);
    }
}

sendMessage();