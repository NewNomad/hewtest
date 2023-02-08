import { HTMLMotionProps, Variants } from 'framer-motion'

/** ページの遷移アニメーション */
export const walletTransition: HTMLMotionProps<'div'> = {
    // 上へスライド
    initial: { y: 1000,opacity:0.5 },
    animate: { y: 0,opacity:1 },
    exit: { y: 1000,opacity:0.5 },
    transition: { ease: "easeInOut", duration: 0.5 },
}
export const indexTransition: HTMLMotionProps<'div'> = {
    // 下へスライド
    initial: { y: -1000,opacity:0.5 },
    animate: { y: 0,opacity:1 },
    exit: { y: -1000,opacity:0.5 },
    transition: { ease: "easeInOut", duration: 0.5 },
}

/** フェードインでポップアップ */
export const fadeInPopup: Variants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        scale: [0, 1, 1.05, 1],
        transition: {
            duration: 0.6,
            ease: 'easeInOut'
        }
    }
}

/** フェードインで表示 */
export const fadeIn: Variants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.4,
            ease: 'easeInOut'
        }
    }
}