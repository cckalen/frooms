// src/lib/encoderSingleton.ts
import { register as registerExtendableRecorder } from 'extendable-media-recorder';
import { connect } from 'extendable-media-recorder-wav-encoder';

let isRegistered = false;

export async function registerEncoder() {
    if (!isRegistered) {
        await registerExtendableRecorder(await connect());
        isRegistered = true;
    }
}
