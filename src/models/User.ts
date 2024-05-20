import { Schema, model, models } from 'mongoose';

interface IUser {
    email: string;
    username: string;
    image?: string;
    bookmarks: Schema.Types.ObjectId[]
};

const UserSchema = new Schema<IUser>({
    email: {
        type: String,
        required: [true, 'This email address already exists.'],
    },
    username: {
        type: String,
        required: [true, 'Username is required']
    },
    image: {
        type: String,
    },
    bookmarks: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Property'
        }
    ]
}, { timestamps: true });

export default models.user || model('User', UserSchema);