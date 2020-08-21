function formatCtrlRectStyle({width = 'auto', height = 'auto', top = 0, left = 0, angel = 0}) {
    return {width: `${width}px`, height: `${height}px`, top: `${top}px`, left: `${left}px`, transform: `rotateZ(${angel}deg)`}
}

function formatPageStyle({backgroundColor = 'unset', backgroundImage, backgroundSize = 'contain', backgroundRepeat = 'no-repeat', backgroundPosition = 'center center'}) {
    backgroundImage = backgroundImage ? `url(${backgroundImage})` : 'none'
    return {backgroundColor, backgroundImage, backgroundSize, backgroundRepeat, backgroundPosition}
}

function formatElementStyle({width = 'auto', height = 'auto', top = 0, left = 0, angel = 0, zIndex = 1, radius = 0, fontSize = 16, fontWeight = 'normal', color = '#FFF', backgroundColor = 'transparent' }) {
    return {
        color,
        zIndex,
        fontWeight,
        backgroundColor,
        width: `${width}px`, 
        height: `${height}px`, 
        top: `${top}px`, 
        left: `${left}px`,
        borderRadius: `${radius}px`,
        transform: `rotateZ(${angel}deg)`,
        fontSize: `${fontSize}px`
    }
}

export {formatCtrlRectStyle, formatElementStyle, formatPageStyle}