import { MongoClient } from 'mongodb';

async function handler(req, res) {
    if (req.method === 'POST') {
        const { email, name, message } = req.body;
        if (!email ||
            !name ||
            name.trim() === '' ||
            !message ||
            message.trim() === ''
        ) {
            res.status(422).json({
                message: 'Invalid input.'
            });
            return;
        }
        // Store it in a db
        const newMessage = {
            email,
            name,
            message
        };
        //mongo db connection
        let client;
        try {
        client = await MongoClient.connect('mongodb+srv://testUser:testUser123456@cluster0.agazq.mongodb.net/my-site?retryWrites=true&w=majority')
        } catch (error) {
            res.status(500).json({message: 'Could not connect to database.'})
            return;
        }
        const db = client.db();

        let result;
        try {
            result = await db.collection('messages').insertOne(newMessage);
            newMessage.id = result.insertedId;
        } catch (error) {
            client.close();
            res.status(500).json({message: 'Stroing message failed!'});
            return;
        }
        client.close();

        res.status(201).json({
            message: 'Successfully stored message!',
            message: newMessage
        });
    }
}

export default handler;