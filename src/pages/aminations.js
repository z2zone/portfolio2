export const mainAnimation = {
    hidden: {
        opacity: 0,
        y: 300
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            when: "beforeChildren",
            staggerChildren: 0.25
        }
    },
    exit: {
        opacity: 0,
        y: 300,
        transition: {
            duration: 0.25
        }
    }
};

export const titleAnimation = {
    hidden: {
        y: 200
    },
    show: {
        y: 0,
        transition: {
            ease: "easeOut",
            duration: 0.75
        }
    }
};

export const fadeAnimation = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: { 
            ease: "easeOut", 
            duration: 0.75
        }
    }
};

export const photoAnimation = {
    hidden: {
        opacity: 0,
        scale: 1.5
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            ease: "easeOut",
            duration: 0.75
        }
    }
};

export const scrollAnimation = {
    hidden: {
        opacity: 0,
        scale: 0.7
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1
        }
    }
}