function formatCtrlRectStyle({width = 'auto', height = 'auto', top = 0, left = 0, angel = 0}) {
    return {width: `${width}px`, height: `${height}px`, top: `${top}px`, left: `${left}px`, transform: `rotateZ(${angel}deg)`}
}

function formatPageStyle({backgroundColor = 'unset', backgroundImage, backgroundSize = 'contain', backgroundRepeat = 'no-repeat', backgroundPosition = 'center center'}) {
    backgroundImage = backgroundImage ? `url(${backgroundImage})` : 'none'
    return {backgroundColor, backgroundImage, backgroundSize, backgroundRepeat, backgroundPosition}
}

export {formatCtrlRectStyle, formatPageStyle}