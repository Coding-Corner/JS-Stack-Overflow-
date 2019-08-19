var nv_style_anim = document.createElement("style");
nv_style_anim.innerHTML = ` span.anim {
    position: absolute;
    opacity: 0;
    top: 0;
    left: 0;
    background: -moz-linear-gradient(left, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, .03) 1%, rgba(255, 255, 255, .6) 30%, rgba(255, 255, 255, .85) 50%, rgba(255, 255, 255, .85) 70%, rgba(255, 255, 255, .85) 71%, rgba(255, 255, 255, 0) 100%);
    background: -webkit-gradient(linear, left top, right top, color-stop(0, rgba(255, 255, 255, 0)), color-stop(1%, rgba(255, 255, 255, .03)), color-stop(30%, rgba(255, 255, 255, .85)), color-stop(50%, rgba(255, 255, 255, .85)), color-stop(70%, rgba(255, 255, 255, .85)), color-stop(71%, rgba(255, 255, 255, .85)), color-stop(100%, rgba(255, 255, 255, 0)));
    background: -webkit-linear-gradient(left, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, .03) 1%, rgba(255, 255, 255, .6) 30%, rgba(255, 255, 255, .85) 50%, rgba(255, 255, 255, .85) 70%, rgba(255, 255, 255, .85) 71%, rgba(255, 255, 255, 0) 100%);
    background: -o-linear-gradient(left, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, .03) 1%, rgba(255, 255, 255, .6) 30%, rgba(255, 255, 255, .85) 50%, rgba(255, 255, 255, .85) 70%, rgba(255, 255, 255, .85) 71%, rgba(255, 255, 255, 0) 100%);
    background: -ms-linear-gradient(left, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, .03) 1%, rgba(255, 255, 255, .6) 30%, rgba(255, 255, 255, .85) 50%, rgba(255, 255, 255, .85) 70%, rgba(255, 255, 255, .85) 71%, rgba(255, 255, 255, 0) 100%);
    background: linear-gradient(to right, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, .03) 1%, rgba(255, 255, 255, .6) 30%, rgba(255, 255, 255, .85) 50%, rgba(255, 255, 255, .85) 70%, rgba(255, 255, 255, .85) 71%, rgba(255, 255, 255, 0) 100%);
    width: 15%;
    height: 100%;
    transform: skew(-10deg, 0deg);
    -webkit-transform: skew(-10deg, 0deg);
    -moz-transform: skew(-10deg, 0deg);
    -ms-transform: skew(-10deg, 0deg);
    -o-transform: skew(-10deg, 0deg);
    animation: move 2s;
    animation-iteration-count: infinite;
    animation-delay: 1s;
    -webkit-animation: move 2s;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-delay: 1s;
    -moz-transform: skew(-10deg, 0deg);
    -moz-animation: move 2s;
    -moz-animation-iteration-count: infinite;
    -moz-animation-delay: 1s;
    -ms-transform: skew(-10deg, 0deg);
    -ms-animation: move 2s;
    -ms-animation-iteration-count: infinite;
    -ms-animation-delay: 1s;
    -o-transform: skew(-10deg, 0deg);
    -o-animation: move 2s;
    -o-animation-iteration-count: infinite;
    -o-animation-delay: 1s
}

@keyframes move {
    0% {
        left: 0;
        opacity: 0
    }
    5% {
        opacity: 0
    }
    48% {
        opacity: .2
    }
    80% {
        opacity: 0
    }
    100% {
        left: 82%
    }
}

@-webkit-keyframes move {
    0% {
        left: 0;
        opacity: 0
    }
    5% {
        opacity: 0
    }
    48% {
        opacity: .2
    }
    80% {
        opacity: 0
    }
    100% {
        left: 82%
    }
}

@-moz-keyframes move {
    0% {
        left: 0;
        opacity: 0
    }
    5% {
        opacity: 0
    }
    48% {
        opacity: .2
    }
    80% {
        opacity: 0
    }
    100% {
        left: 88%
    }
}

@-ms-keyframes move {
    0% {
        left: 0;
        opacity: 0
    }
    5% {
        opacity: 0
    }
    48% {
        opacity: .2
    }
    80% {
        opacity: 0
    }
    100% {
        left: 82%
    }
}

@-o-keyframes move {
    0% {
        left: 0;
        opacity: 0
    }
    5% {
        opacity: 0
    }
    48% {
        opacity: .2
    }
    80% {
        opacity: 0
    }
    100% {
        left: 82%
    }
}`;

document.body.appendChild(nv_style_anim);