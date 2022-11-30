import { atom } from "recoil";
import { recoilPersist } from "recoil-persist"
const { persistAtom } = recoilPersist()

export const cartState = atom({
    key: "cart",
    default: {
        id: null,
        name: "",
        count: null,
        image: ""
    },
    effects_UNSTABLE: [persistAtom]

})