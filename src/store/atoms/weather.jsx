import { atom } from "recoil";

const weatherAtom = atom({
    key: 'weatherAtom',
    default: null,
});

export default weatherAtom;