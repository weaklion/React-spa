import {  keyframes } from 'styled-components';

export const transitions = {
    shake: keyframes`
        0% {
            transform: translate(-30px);
        }
        25% {
            transform: translate(15px);
        }
        50% {
            transform: translate(-10px);
        }
        75% {
            transform: translate(5px);
        }
        100% {
            transform: translate(0px);
        }
    `
};