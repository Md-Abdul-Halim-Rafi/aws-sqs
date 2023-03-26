import { ReceiveMessageCommandInput, ReceiveMessageCommand } from "@aws-sdk/client-sqs";
import { SQS, queueURL } from "./providers/SQS";

const receiveMessage = async () => {
    
    const receiveMessageParams: ReceiveMessageCommandInput = {
        QueueUrl: queueURL,
        MaxNumberOfMessages: 10
    };

    try {

        const message = await SQS.send(
            new ReceiveMessageCommand(receiveMessageParams)
        );

        console.log(message);
        
    } catch (err) {
        console.error(err);
    }
}

receiveMessage();